<template>
  <div class="home">
    <div v-if="loading">
      <spinner msgSpinner="Loading data from the API" />
    </div>
    <ErrorState
      v-else-if="error"
      message="Unable to load repositories. Please try again later."
    />
    <div 
      v-else-if="!repos || (Array.isArray(repos) && repos.length === 0) || (repos && 'message' in repos)"
      class="text-center"
    >
      <EmptyState
        title="No Repositories Found"
        :message="(repos && 'message' in repos) ? repos.message : `No repositories were found for ${orgName}.`"
      />
      <div v-if="repos && 'github_profile' in repos && repos.github_profile" v-html="repos.github_profile" class="mt-3" />
    </div>
    <div v-else>
      <h1>
        <a :href="`https://github.com/${orgName}`">{{ orgName }}</a>
      </h1>
      <div class="h-100 row row-cols-1 row-cols-md-3 justify-content-center">
        <div v-for="repo in (repos as GitHubRepo[])" :key="repo.id" class="col h-100 p-2">
          <div class="card border-danger h-100">
            <img
              class="card-img-top rounded"
              :src="orgData?.avatar_url || '/logo.png'"
              :alt="repo.name"
              loading="lazy"
            />
            <div class="card-body">
              <h5 class="card-title">{{ repo.name }}</h5>
              <p class="card-text">{{ repo.description || 'No description available' }}</p>
            </div>
            <div class="card-footer">
              <div class="mb-2">
                <span class="badge bg-secondary me-2">⭐ {{ repo.stargazers_count }}</span>
                <span class="badge bg-secondary me-2">🍴 {{ repo.forks_count }}</span>
                <span class="badge bg-secondary me-2">👀 {{ repo.watchers_count }}</span>
              </div>
              <div class="mb-2">
                Language: <span class="badge bg-info">{{ repo.language || 'None' }}</span>
              </div>
              <a
                :href="`https://github.com/${repo.full_name}`"
                class="btn btn-danger btn-outline-success card-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View GitHub Repo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import Spinner from '@/loaders/spinner.vue';
import ErrorState from '@/components/ErrorState.vue';
import EmptyState from '@/components/EmptyState.vue';
import { useApi } from '@/composables/useApi';
import type { GitHubRepo, GitHubOrg, ApiErrorResponse } from '@/types/api';

const route = useRoute();
const orgName = computed(() => route.params.id as string);

// Fetch repos for the organization
const { data: repos, loading, error } = useApi<GitHubRepo[] | ApiErrorResponse>(
  () => `https://api.casjay.coffee/api/v1/git/repos/${orgName.value}`,
);

// Fetch org data to get avatar for fallback image
const { data: orgData } = useApi<GitHubOrg>(
  () => `https://api.github.com/orgs/${orgName.value}`,
  {},
  { retries: 0 },
);
</script>
