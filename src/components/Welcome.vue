<template>
  <div v-if="loading">
    <spinner msgSpinner="Loading profile information" />
  </div>
  <ErrorState
    v-else-if="error"
    message="Unable to load profile information. Please try again later."
  />
  <EmptyState
    v-else-if="!profile || Object.keys(profile).length === 0"
    title="No Profile Information Found"
    message="Profile information is currently unavailable."
  />
  <div v-else class="row text-center">
    <div class="col-md-6 offset-md-3">
      <div class="text-center">
        <h1>{{ profile.name }}</h1>
        <p>{{ profile.bio }}</p>
        <br />
      </div>

      <section v-if="profile.email?.length">
        <h2>Email:</h2>
        <div class="mb-3">
          <a
            v-for="email in profile.email"
            :key="email"
            :href="`mailto:${email}`"
            class="d-block"
          >
            {{ email }}
          </a>
        </div>
      </section>

      <section v-if="profile.verify?.length">
        <h2>Verify</h2>
        <div class="mb-3">
          <a
            v-for="[name, url] in profile.verify"
            :key="name"
            :href="`https://${url}`"
            class="p-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ name }}
          </a>
        </div>
      </section>

      <section v-if="profile.sponsor?.length">
        <h2>Sponsor:</h2>
        <div class="mb-3">
          <a
            v-for="[name, url] in profile.sponsor"
            :key="name"
            :href="url"
            class="mx-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ name }}
          </a>
        </div>
      </section>
    </div>
  </div>
  <div class="mb-5" />
</template>

<script setup lang="ts">
import Spinner from '@/loaders/spinner.vue';
import ErrorState from '@/components/ErrorState.vue';
import EmptyState from '@/components/EmptyState.vue';
import { useApi } from '@/composables/useApi';
import type { ProfileContact } from '@/types/api';

const { data: profile, loading, error } = useApi<ProfileContact>(
  'https://raw.githubusercontent.com/casjay/casjay/main/profile.json',
);
</script>
