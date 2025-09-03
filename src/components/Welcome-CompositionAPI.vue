<template>
  <div v-if="!data || isLoading">
    <spinner />
  </div>
  <div v-else>
    <div class="row text-center">
      <div class="col-md-6 offset-md-3">
        <div class="text-center">
          <h1>{{ data.name }}</h1>
          <p>{{ data.bio }}</p>
          <br />
        </div>
        <h2>Email:</h2>
        <div>
          <span v-for="email in data.email" v-bind:key="email">
            <a :href="`mailto:${email}`">{{ email }}</a>
            <br />
          </span>
          <br />
        </div>
        <div>
          <h2>Verify</h2>
          <span v-for="[name, url] in data.verify" v-bind:key="`${name}`">
            <a :href="`http://${url}`" class="p-3"> {{ name }} </a>
          </span>
          <br />
          <br />
        </div>
        <div>
          <h2>Sponsor:</h2>
          <span class="sponsor-link" v-for="[name, url] in data.sponsor" v-bind:key="name">
            <a :href="`${url}`"> {{ name }} </a>
          </span>
          <br />
          <br />
        </div>
      </div>
    </div>
  </div>
  <div class="mb-5" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useApiData } from '@/composables/useApiData';
import Spinner from '@/loaders/spinner.vue';

interface ProfileData {
  name: string;
  bio: string;
  email: string[];
  verify: [string, string][];
  sponsor: [string, string][];
}

export default defineComponent({
  name: 'Welcome',
  components: { Spinner },
  setup() {
    const profileUrl = 'https://raw.githubusercontent.com/casjay/casjay/main/profile.json';

    const { data, isLoading, error } = useApiData<ProfileData>(profileUrl, {
      timeout: 3000,
      retries: 1,
    });

    return {
      data,
      isLoading,
      error,
    };
  },
});
</script>

<style scoped lang="scss">
@import '@/styles/global.scss';

.row {
  width: 100%;
}

.sponsor-link {
  display: inline-block;
  margin: 0 1rem;

  @media (max-width: $mobile) {
    display: block;
    margin: 0.5rem 0;
  }
}
</style>
