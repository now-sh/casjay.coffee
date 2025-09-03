<template>
  <div class="home">
    <div v-if="loading">
      <spinner msgSpinner="Loading data from the API" />
    </div>
    <ErrorState
      v-else-if="error"
      message="Unable to load repositories. Please try again later."
    />
    <EmptyState
      v-else-if="!repos || repos.length === 0"
      title="No Repositories Found"
      :message="`No repositories were found for ${orgName}.`"
    />
    <div v-else>
      <h1>
        <a :href="`https://github.com/${orgName}`">{{ orgName }}</a>
      </h1>
      <div class="h-100 row row-cols-1 row-cols-md-3 justify-content-center">
        <div v-for="repo in repos" :key="repo.id" class="col h-100 p-2">
          <div class="card border-danger h-100">
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
import type { GitHubRepo } from '@/types/api';

const route = useRoute();
const orgName = computed(() => route.params.id as string);

const { data: repos, loading, error } = useApi<GitHubRepo[]>(
  () => `https://api.casjay.coffee/api/v1/git/repos/${orgName.value}`,
);
</script>
