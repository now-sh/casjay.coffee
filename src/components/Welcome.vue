<template>
  <h1>{{ setProfile.name }}</h1>
  <p>{{ setProfile.bio }}</p>
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
      setProfile: [],
    };
  },
  mounted() {
    axios
      .get('https://raw.githubusercontent.com/casjay/casjay/main/profile.json')
      .then((response) => {
        this.setProfile = response.data;
        if (!this.setProfile) {
          this.isLoading = true;
        }
      });
    this.isLoading = false;
  },
})
export default class Welcome extends Vue {}
</script>
