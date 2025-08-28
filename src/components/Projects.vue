<template>
  <div class="home">
    <div v-if="setProjects == '' || isLoading == true">
      <spinner msgSpinner="Loading data from the API" />
    </div>
    <div v-else>
      <h1>
        <a :href="`http://github.com/${orgName}`">{{ orgName }}</a>
      </h1>
      <div class="h-100 row row-cols-md-3 justify-content-center">
        <!--<div class="card-group"> --->
        <div v-for="Org in setProjects" v-bind:key="Org.id">
          <div class="col h-100 p-2">
            <div class="card border-danger h-100">
              <div class="card-body">
                <h2 class="card-title">{{ Org.name }}</h2>
                <p class="card-text">{{ Org.description }}</p>
              </div>
              <br />
              <div class="card-footer">
                <span>
                  Stars: {{ Org.stargazers_count }} | forks: {{ Org.forks_count }} | watchers:
                  {{ Org.watchers_count }}
                  <br />
                  language: {{ Org.language || 'none detected' }}
                </span>
                <br /><br />
                <a :href="`http://github.com/${Org.full_name}`" class="btn btn-danger btn-outline-success card-link" target="_blank">View github repo</a><br />
              </div>
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
  methods: {
    isLoading() {
      this.isLoading = true;
    },
  },
  data() {
    return {
      isLoading: true,
      setProjects: [],
      orgName: this.$route.params.id,
    };
  },
<<<<<<< Updated upstream
  mounted() {
    const apiUrl = `https://api.casjay.coffee/api/v1/git/repos/${this.$route.params.id}`;
    axios.get(apiUrl, { timeout: 2000 }).then((response) => {
=======
  async mounted() {
    const api = `https://api.casjay.vercel.app/api/v1/git/repos/${this.$route.params.id}`;
    try {
      const response = await axios.get(api, {
        timeout: 5000,
      });
>>>>>>> Stashed changes
      this.setProjects = response.data;
    } catch (error) {
      console.log('First attempt failed, retrying...');
      try {
        const response = await axios.get(api, {
          timeout: 5000,
        });
        this.setProjects = response.data;
      } catch (retryError) {
        console.error('Failed after retry:', retryError);
      }
    }
    this.isLoading = false;
  },
})
export default class myProjects extends Vue {}
</script>
