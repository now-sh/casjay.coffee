<template>
  <div class="home">
    <div v-if="setProjects == '' || isLoading == true">
      <spinner msgSpinner="Loading data from the API" />
    </div>
    <div v-else>
      <h1></h1>
      <div class="h-100 row row-cols-3 justify-content-center">
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
                <a
                  :href="`http://github.com/${Org.full_name}`"
                  class="btn btn-primary card-link"
                  target="_blank"
                  >GitHub</a
                ><br />
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
    };
  },
  mounted() {
    const api = `https://api.casjay.vercel.app/api/v1/git/repos/${this.$route.params.id}`;
    axios.get(api).then((response) => {
      this.setProjects = response.data;
      if (!this.setProjects) {
        this.isLoading = true;
      }
    });
    this.isLoading = false;
  },
})
export default class myProjects extends Vue {}
</script>
