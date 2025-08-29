<template>
  <div class="home">
    <div v-if="setOrgs.length === 0 || isLoading == true">
      <spinner msgSpinner="Loading data from the API" />
    </div>
    <div v-else>
      <div class="h-100 row row-cols-md-3 justify-content-center">
        <!--<div class="card-group"> --->
        <div v-for="Org in setOrgs" v-bind:key="Org.id">
          <div class="col h-100 p-2">
            <div class="card border-danger h-100">
              <a :href="`/Projects/${Org.login}`"> <img class="card-img-top rounded" :src="Org.avatar_url" :alt="Org.login" /></a>
              <div class="card-body">
                <h5 class="card-title">{{ Org.login }}</h5>
                <p class="card-text">{{ Org.description }}</p>
              </div>
              <div class="card-footer"><a :href="`/Projects/${Org.login}`" class="btn btn-danger card-link">Show all Repos</a><br /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import axios from 'axios';
import Spinner from '@/loaders/spinner.vue';

@Options({
  props: {
    msg: String,
    msgSpinner: { type: String },
  },
  components: { Spinner },
  computed: {},
  methods: {},
  data() {
    return {
      isLoading: true,
      setOrgs: [],
    };
  },
  async mounted() {
    await new Promise((resolve) => {
      setTimeout(resolve, 500);
    });
    try {
      const response = await axios.get('https://api.casjay.coffee/api/v1/git/orgs/casjay', {
        timeout: 5000,
      });
      console.log('Full API Response:', JSON.stringify(response.data, null, 2));
      this.setOrgs = Array.isArray(response.data) ? response.data : (response.data.orgs || response.data);
    } catch (error) {
      console.log('First attempt failed, retrying...');
      try {
        const response = await axios.get('https://api.casjay.coffee/api/v1/git/orgs/casjay', {
          timeout: 5000,
        });
        this.setOrgs = Array.isArray(response.data) ? response.data : (response.data.orgs || response.data);
      } catch (retryError) {
        console.error('Failed after retry:', retryError);
      }
    }
    this.isLoading = false;
  },
})
export default class myOrgs extends Vue {}
</script>

<style scoped>
.card-img-top {
  max-width: 150px !important;
  max-height: 150px !important;
}
</style>
