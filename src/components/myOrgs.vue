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
import Spinner from '@/loaders/spinner.vue';
import ErrorState from '@/components/ErrorState.vue';
import EmptyState from '@/components/EmptyState.vue';
import { useApi } from '@/composables/useApi';
import type { GitHubOrg } from '@/types/api';

const { data: orgs, loading, error } = useApi<GitHubOrg[]>(
  'https://api.casjay.coffee/api/v1/git/orgs/casjay',
);
</script>
