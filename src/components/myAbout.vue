<template>
  <div class="home">
    <div v-if="setAbout">
      <spinner />
    </div>
    <div v-else>
      {{ setAbout }}
      <div class="h-100 row row-cols-3 mb-4">
        <!--<div class="card-group"> --->
        <div v-for="About in setAbout" v-bind:key="About.id">
          <div class="col h-100">
            <div class="card border-danger h-100 mb-3">
              <img
                width="72"
                height="72"
                class="card-img-top img-thumbnail rounded"
                :src="`${About.avatar_url}`"
                alt="{{About.login}}"
              />
              <div class="card-body">
                <h5 class="card-title">{{ About.login }}</h5>
                <p class="card-text">{{ About.description }}</p>
              </div>
              <div class="card-footer">
                <a
                  :href="`http://github.com/${About.login}`"
                  class="btn btn-primary card-link"
                  target="_blank"
                  >GitHub</a
                >
                <a :href="`/project/${About.login}`" class="btn btn-danger card-link">Projects</a
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
      setAbout: [],
    };
  },
  mounted() {
    axios.get('https://api.casjay.vercel.app/api/v1/git/jason').then((response) => {
      this.setAbout = response.data;
      if (!this.setAbout) {
        this.isLoading = true;
      }
      console.log(this.setAbout);
    });
    this.isLoading = false;
  },
})
export default class myAbout extends Vue {}
</script>
