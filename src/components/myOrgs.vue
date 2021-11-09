<template>
  <div class="orgs">
    <div class="h-100 row row-cols-3 mb-4">
      <!--<div class="card-group"> --->
      <div v-for="Org in setOrgs" v-bind:key="Org.id">
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
              <a href="#" class="btn btn-primary card-link">Card link</a>
              <a href="#" class="btn btn-danger card-link">Another link</a><br />
              <small class="text-muted">Last updated: {{ Org.updated_at }}</small>
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

@Options({
  props: {
    msg: String,
  },
  components: {},
  computed: {},
  methods: {},
  data() {
    return {
      setOrgs: [],
    };
  },
  mounted() {
    axios.get('https://api.casjay.vercel.app/api/v1/git/orgs/casjay').then((response) => {
      this.setOrgs = response.data;
      console.log(response.data);
    });
  },
})
export default class myOrgs extends Vue {}
</script>
