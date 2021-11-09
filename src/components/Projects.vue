<template>
  <div class="orgs">
    {{ setProjects }}
    <div v-if="isLoading == true">
      <spinner />
    </div>
    <div v-else>
      <div class="h-100 row row-cols-3 mb-4">
        <!--<div class="card-group"> --->
        <div v-for="Org in setProjects" v-bind:key="Org.id">
          <div class="col h-100">
            <div class="card border-danger h-100 mb-3">
              <img
                width="72"
                height="72"
                class="card-img-top img-thumbnail rounded"
                :src="`${Org.avatar_url}`"
                alt="{{Org.login}}"
              />
              <div class="card-body">
                <h5 class="card-title">{{ Org.login }}</h5>
                <p class="card-text">{{ Org.description }}</p>
              </div>
              <div class="card-footer">
                <a
                  :href="`http://github.com/${Org.login}`"
                  class="btn btn-primary card-link"
                  target="_blank"
                  >GitHub</a
                >
                <a :href="`/orgs/${Org.login}`" class="btn btn-danger card-link">Projects</a><br />
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
    const api = `https://api.casjay.vercel.app/api/v1/git/org/${this.$route.params.id}`;
    axios.get(api).then((response) => {
      this.setProjects = response.data;
    });
    this.isLoading = false;
  },
})
export default class myProjects extends Vue {}
</script>
