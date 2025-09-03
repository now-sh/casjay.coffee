<template>
  <div class="home">
    <div v-if="loading">
      <spinner msgSpinner="Loading data from the API" />
    </div>
    <ErrorState
      v-else-if="error"
      message="Unable to load organizations. Please try again later."
    />
    <EmptyState
      v-else-if="!orgs || orgs.length === 0"
      title="No Organizations Found"
      message="No organizations were found."
    />
    <div v-else>
      <div class="text-center my-5">
        <h2>GitHub Organizations</h2>
        <div class="mt-4 mb-4">
          <a href="https://github.com/casjay" target="_blank" rel="noopener noreferrer" class="badge bg-primary fs-5 p-3 text-decoration-none">
            <i class="fas fa-building me-2" />
            casjay has {{ orgs.length }} {{ orgs.length === 1 ? 'Organization' : 'Organizations' }}
          </a>
        </div>
      </div>
      <div class="h-100 row row-cols-1 row-cols-md-3 justify-content-center">
        <div v-for="org in orgs" :key="org.id" class="col h-100 p-2">
          <div class="card border-danger h-100">
            <router-link :to="`/Projects/${org.login}`">
              <img
                class="card-img-top rounded"
                :src="org.avatar_url"
                :alt="org.login"
                loading="lazy"
              />
            </router-link>
            <div class="card-body">
              <h5 class="card-title">{{ org.login }}</h5>
              <p class="card-text">{{ org.description || 'No description available' }}</p>
              <div class="mt-3">
                <span v-if="isLoadingCount(org.login)" class="badge bg-secondary">
                  <i class="fas fa-spinner fa-spin me-1" />
                  Loading...
                </span>
                <router-link
                  v-else-if="getRepoCount(org.login) > 0"
                  :to="`/Projects/${org.login}`"
                  class="badge bg-info fs-6 px-3 py-2 text-decoration-none"
                >
                  <i class="fas fa-code-branch me-2" />
                  {{ org.login }} has {{ getRepoCount(org.login) }} {{ getRepoCount(org.login) === 1 ? 'Repository' : 'Repositories' }}
                </router-link>
              </div>
            </div>
            <div class="card-footer">
              <router-link
                :to="`/Projects/${org.login}`"
                class="btn btn-danger card-link"
              >
                Show all Repos
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import Spinner from '@/loaders/spinner.vue';
import ErrorState from '@/components/ErrorState.vue';
import EmptyState from '@/components/EmptyState.vue';
import { useApi } from '@/composables/useApi';
import type { GitHubOrg } from '@/types/api';

const { data: orgs, loading, error } = useApi<GitHubOrg[]>(
  'https://api.casjay.coffee/api/v1/social/github/orgs/casjay',
);

// Store repo counts for each org
const repoCounts = ref<Record<string, number>>({});
const loadingCounts = ref<Record<string, boolean>>({});

// Fetch repo count for each org when orgs are loaded
watch(orgs, async (newOrgs) => {
  if (newOrgs && Array.isArray(newOrgs)) {
    newOrgs.forEach(async (org) => {
      loadingCounts.value[org.login] = true;
      try {
        const response = await fetch(`https://api.casjay.coffee/api/v1/social/github/repos/${org.login}`);
        const data = await response.json();
        if (Array.isArray(data)) {
          repoCounts.value[org.login] = data.length;
        } else {
          repoCounts.value[org.login] = 0;
        }
      } catch {
        repoCounts.value[org.login] = 0;
      } finally {
        loadingCounts.value[org.login] = false;
      }
    });
  }
}, { immediate: true });

// Get repo count for an org
const getRepoCount = (orgLogin: string) => repoCounts.value[orgLogin] ?? 0;
const isLoadingCount = (orgLogin: string) => loadingCounts.value[orgLogin] ?? true;
</script>
