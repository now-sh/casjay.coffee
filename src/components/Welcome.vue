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
            class="mx-2"
            target="_blank"
            rel="noopener noreferrer"
            :title="name"
          >
            <img 
              v-if="name.toLowerCase() === 'gpg'"
              src="https://img.shields.io/badge/GPG-Key-blue?style=for-the-badge&logo=gnuprivacyguard"
              :alt="name"
              class="verify-icon"
            />
            <img 
              v-else-if="name.toLowerCase() === 'ssh'"
              src="https://img.shields.io/badge/SSH-Key-green?style=for-the-badge&logo=openssh"
              :alt="name"
              class="verify-icon"
            />
            <img 
              v-else-if="name.toLowerCase() === 'keybase'"
              src="https://img.shields.io/badge/Keybase-Verified-orange?style=for-the-badge&logo=keybase"
              :alt="name"
              class="verify-icon"
            />
            <span v-else class="badge bg-secondary p-2">{{ name }}</span>
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
            class="mx-2"
            target="_blank"
            rel="noopener noreferrer"
            :title="`Sponsor via ${name}`"
          >
            <img 
              v-if="name.toLowerCase() === 'paypal'"
              src="https://img.shields.io/badge/PayPal-Donate-blue?style=for-the-badge&logo=paypal"
              :alt="name"
              class="sponsor-icon"
            />
            <img 
              v-else-if="name.toLowerCase() === 'patreon'"
              src="https://img.shields.io/badge/Patreon-Support-red?style=for-the-badge&logo=patreon"
              :alt="name"
              class="sponsor-icon"
            />
            <img 
              v-else-if="name.toLowerCase() === 'github sponsors'"
              src="https://img.shields.io/badge/GitHub-Sponsor-purple?style=for-the-badge&logo=github"
              :alt="name"
              class="sponsor-icon"
            />
            <img 
              v-else-if="name.toLowerCase() === 'ko-fi' || name.toLowerCase() === 'kofi'"
              src="https://img.shields.io/badge/Ko--fi-Buy%20Coffee-orange?style=for-the-badge&logo=ko-fi"
              :alt="name"
              class="sponsor-icon"
            />
            <span v-else class="badge bg-success p-2">{{ name }}</span>
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

<style scoped>
.verify-icon,
.sponsor-icon {
  height: 40px;
  transition: transform 0.2s ease;
}

.verify-icon:hover,
.sponsor-icon:hover {
  transform: scale(1.1);
}

@media (max-width: 767.98px) {
  .verify-icon,
  .sponsor-icon {
    height: 30px;
  }
}
</style>
