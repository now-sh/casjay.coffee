<template>
  <div v-if="loading">
    <spinner msgSpinner="Loading contact information" />
  </div>
  <ErrorState
    v-else-if="error"
    title="Error Loading Data"
    message="Unable to load contact information. Please try again later."
  />
  <EmptyState
    v-else-if="!data || Object.keys(data).length === 0"
    title="No Contact Information Found"
    message="Contact information is currently unavailable."
  />
  <div v-else>
    <div class="row text-center">
      <div class="col-md-6 offset-md-3">
        <div class="text-center">
          <h2 class="text-danger">This is an ever growing list</h2>
          <p>
            I go by the username casjay I have been using that username since I created my first account on yahoo in 1997.. <br />
            Other usernames include chmweb and casjaysdev. I try to sign every commit so it can be verified
          </p>
          <br />
          <h2 class="text-danger">Personal websites:</h2>
          <div v-if="data.websites == null">
            <h3 class="text-primary">Problem loading data</h3>
            <spinner />
            <br />
          </div>
          <div v-else>
            <div v-for="[name, url] in data.websites" :key="name" class="website-link-row">
              <a
                :href="`${url}`"
                target="_blank"
                rel="noopener noreferrer"
                :title="name"
              >
                <img 
                  :src="getShieldBadge(name, 'website')"
                  :alt="name"
                  class="website-icon"
                />
              </a>
            </div>
            <br />
          </div>
          <h2 class="text-danger">Phone/Fax:</h2>
          <div v-if="data.phone == null">
            <h3 class="text-primary">Problem loading data</h3>
            <spinner />
            <br />
          </div>
          <div v-else>
            <div>
              <span v-for="[name, number] in data.phone" v-bind:key="name">
                {{ name }}: {{ number }}
                <br />
              </span>
              <br />
            </div>
          </div>
        </div>
        <div>
          <h2 class="text-danger">E-Mail:</h2>
          <div v-if="data.email_primary == null">
            <h3 class="text-primary">Problem loading data</h3>
            <spinner />
            <br />
          </div>
          <div v-else>
            <span v-for="[name, url, display] in data.email_primary" v-bind:key="`${name}`">
              {{ name }}: <a :href="`mailto:${url}`">{{ display }}</a>
              <br />
            </span>
            <br />
          </div>
        </div>
        <div>
          <h2 class="text-danger">Other E-mail:</h2>
          <div v-if="data.email_other == null">
            <h3 class="text-primary">Problem loading data</h3>
            <spinner />
            <br />
          </div>
          <div v-else>
            <span v-for="[name, url, display] in data.email_other" v-bind:key="`${name}`">
              {{ name }}: <a :href="`mailto:${url}`">{{ display }}</a>
              <br />
            </span>
            <br />
          </div>
        </div>
        <div>
          <h2 class="text-danger">Chat:</h2>
          <div v-if="data.chat == null">
            <h3 class="text-primary">Problem loading data</h3>
            <spinner />
            <br />
          </div>
          <div v-else>
            <div v-for="[name, url, display] in data.chat" :key="`${name}`" class="chat-link-row">
              <a
                :href="`https://${url}`"
                target="_blank"
                rel="noopener noreferrer"
                :title="`${name}: ${display}`"
              >
                <img 
                  :src="getShieldBadge(name, 'chat')"
                  :alt="name"
                  class="chat-icon"
                />
              </a>
              <span class="ms-2">{{ display }}</span>
            </div>
          </div>
        </div>
        <div>
          <h2 class="text-danger">Public and Social links:</h2>
          <div v-if="data.social == null">
            <h3 class="text-primary">Problem loading data</h3>
            <spinner />
            <br />
          </div>
          <div v-else>
            <div v-for="[name, url] in data.social" :key="`${name}`" class="social-link-row">
              <a
                :href="`https://${url}`"
                target="_blank"
                rel="noopener noreferrer"
                :title="name"
              >
                <img 
                  :src="getShieldBadge(name, 'social')"
                  :alt="name"
                  class="social-icon"
                />
              </a>
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="mb-5" />
</template>

<script setup lang="ts">
import { useApi } from '@/composables/useApi';
import type { ProfileContact } from '@/types/api';
import Spinner from '@/loaders/spinner.vue';
import ErrorState from '@/components/ErrorState.vue';
import EmptyState from '@/components/EmptyState.vue';
import { getShieldBadge } from '@/utils/badges';

const { data, loading, error } = useApi<ProfileContact>(
  'https://raw.githubusercontent.com/casjay/casjay/main/profile.json',
  {},
  { retries: 1, retryDelay: 1000, initialDelay: 500 },
);
</script>

<style scoped>
.social-icon,
.website-icon,
.chat-icon {
  height: 40px;
  margin: 5px;
  transition: transform 0.2s ease;
  vertical-align: middle;
}

.social-icon:hover,
.website-icon:hover,
.chat-icon:hover {
  transform: scale(1.1);
}

.social-link-row,
.website-link-row,
.chat-link-row {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 767.98px) {
  .social-icon,
  .website-icon,
  .chat-icon {
    height: 30px;
  }
}
</style>
