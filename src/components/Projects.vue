<template>
  <div class="projects">
    <div class="h-100 row row-cols-3 mb-4">
      <!--<div class="card-group"> --->
      <div v-for="repo in setOrg" v-bind:key="repo.id">
        <div class="col h-100">
          <div class="card border-danger h-100 mb-3">
            <img
              width="72"
              height="72"
              class="card-img-top img-thumbnail rounded"
              :src="`${repo.avatar_url}`"
              alt="{{repo.login}}"
            />
            <div class="card-body">
              <h5 class="card-title">{{ repo.login }}</h5>
              <p class="card-text">{{ repo.description }}</p>
            </div>
            <div class="card-footer">
              <a
                :href="`http://github.com/${repo.login}`"
                class="btn btn-primary card-link"
                target="_blank"
                >GitHub</a
              >
              <br />
              <small class="text-muted">Last updated: {{ repo.updated_at }}</small>
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
import axios from 'axios';
import { useRoute } from 'vue-router';

const route = useRoute();
const { id } = route.params; // read parameter id (it is reactive)

@Options({
  props: {
    msg: String,
  },
  components: {},
  computed: {},
  methods: {},
  data() {
    return {
      setOrg: [],
    };
  },
  mounted() {
    axios.get(`https://api.casjay.vercel.app/api/v1/git/org/${id}`).then((response) => {
      this.setOrg = response.data;
    });
  },
})
export default class Projects extends Vue {}
</script>
