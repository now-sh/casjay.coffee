<template>
  <div v-if="setDomains == '' || setDomains == null || isLoading == true">
    <spinner />
  </div>
  <div v-else>
    <div class="row text-center">
      <div class="col-md-6 offset-md-3">
        <div class="text-center">
          <h2 class="text-danger">My registered domains:</h2>
          <div v-if="setDomains == null">
            <h3 class="text-primary">Problem loading data</h3>
            <spinner />
            <br />
          </div>
          <div v-else>
            <div>
              <span class="m-5" v-for="name in setDomains.domains" v-bind:key="name">
                <a :href="`http://${name}`" target="_blank"> {{ name }} </a>
                <br />
              </span>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row text-center">
      <div class="col-md-6 offset-md-3">
        <div class="text-center">
          <h2 class="text-danger">My Servers:</h2>
          <div v-if="setDomains == null">
            <h3 class="text-primary">Problem loading data</h3>
            <spinner />
            <br />
          </div>
          <div v-else>
            <div>
              <span class="m-5" v-for="host in setDomains.subDomains" v-bind:key="host">
                <a :href="`http://${host}`" target="_blank"> {{ host }} </a>
                <br />
              </span>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="mb-5"></div>
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
      setDomains: [],
    };
  },
  mounted() {
    axios
      .get('https://github.com/casjay/casjay/raw/refs/heads/main/domains.json')
      .then((response) => {
        this.setDomains = response.data;
        if (!this.setDomains) {
          this.isLoading = true;
        }
      });
    this.isLoading = false;
  },
})
export default class myDomains extends Vue {}
</script>
