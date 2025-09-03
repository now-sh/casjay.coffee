<template>
  <div v-if="loading">
    <spinner />
  </div>
  <ErrorState v-else-if="error" title="Error Loading Data" message="Unable to load domain information. Please try again later." />
  <EmptyState
    v-else-if="!data || (!data.domains && !data.subDomains)"
    title="No Domain Information Found"
    message="Domain information is currently unavailable."
  />
  <div v-else>
    <div class="row text-center">
      <div class="col-md-6 offset-md-3">
        <div class="text-center">
          <h2 class="text-danger">My registered domains:</h2>
          <div v-if="!data.domains || data.domains.length === 0">
            <p>No domains registered</p>
          </div>
          <div v-else>
            <div>
              <span class="m-5" v-for="name in data.domains" v-bind:key="name">
                <a :href="`http://${name}`" target="_blank" rel="noopener noreferrer"> {{ name }} </a>
                <br />
              </span>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row text-center">
      <div class="col-md-6 offset-md-3">
        <div class="text-center">
          <h2 class="text-danger">My Servers:</h2>
          <div v-if="!data.subDomains || data.subDomains.length === 0">
            <p>No servers available</p>
          </div>
          <div v-else>
            <div>
              <span class="m-5" v-for="host in data.subDomains" v-bind:key="host">
                <a :href="`http://${host}`" target="_blank" rel="noopener noreferrer"> {{ host }} </a>
                <br />
              </span>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="mb-5" />
</template>

<script setup lang="ts">
import { useApi } from '@/composables/useApi';
import type { DomainsData } from '@/types/api';
import Spinner from '@/loaders/spinner.vue';
import ErrorState from '@/components/ErrorState.vue';
import EmptyState from '@/components/EmptyState.vue';

const { data, loading, error } = useApi<DomainsData>('https://api.casjay.coffee/api/v1/me/info/domains', { timeout: 2000 });
</script>
