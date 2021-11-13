<template>
  <div v-if="setContact == '' || isLoading == true">
    <spinner />
  </div>
  <div v-else>
    <div class="row text-center">
      <div class="col-md-6 offset-md-3">
        <div class="text-center">
          <h1>{{ setContact.name }}</h1>
          <p>{{ setContact.bio }}</p>
          <br />
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
      setContact: [],
    };
  },
  mounted() {
    axios
      .get('https://raw.githubusercontent.com/casjay/casjay/main/contact.json')
      .then((response) => {
        this.setContact = response.data;
        if (!this.setContact) {
          this.isLoading = true;
        }
      });
    this.isLoading = false;
  },
})
export default class Contact extends Vue {}
</script>
