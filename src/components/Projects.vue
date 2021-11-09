<template>
  <div class="orgs">
    <div class="h-100 row row-cols-3 mb-4">
      <!--<div class="card-group"> --->
      {{ setRepos }}
      <div v-for="Org in setRepos" v-bind:key="Org.id">
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
  <!-- </div> -->
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { useRoute } from 'vue-router';

import axios from 'axios';

@Options({
  props: {
    msg: String,
  },
  components: {},
  computed: {},
  methods: {},
  data() {
    return {
      setRepos: [],
    };
  },
  mounted() {
    const route = useRoute();
    const apiUrl = `https://api.casjay.vercel.app/api/v1/git/org/${route.params.id}`;
    axios.get(apiUrl).then((response) => {
      this.setRepos = response.data;
    });
  },
})
export default class myOrg extends Vue {}
</script>
