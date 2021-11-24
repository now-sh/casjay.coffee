<template>
  <div class="home">
    <div v-if="setResume == '' || isLoading == true">
      <spinner msgSpinner="Loading data from the API" />
    </div>
    <div v-else>
      <div class="align-content-center">
        <div class="row justify-content-center">
          <div class="col-9">
            <vue-pdf-embed :source="setResume" class="" />
            <a
              href="https://raw.githubusercontent.com/casjay/casjay/main/Resume-Tech.pdf"
              class="h2"
              >Resume can be found here</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import axios from 'axios';
import VuePdfEmbed from 'vue-pdf-embed';
import Spinner from '@/loaders/spinner.vue';

@Options({
  props: {
    msg: String,
    msgSpinner: { type: String },
  },
  components: { Spinner, VuePdfEmbed },
  computed: {},
  methods: {
    isLoading() {
      this.isLoading = true;
    },
  },
  data() {
    return {
      isLoading: true,
      setResume: [],
    };
  },
  mounted() {
    axios
      .get('https://raw.githubusercontent.com/casjay/casjay/main/Resume-Tech.pdf', {
        timeout: 2000,
        responseType: 'blob',
      })
      .then((response) => {
        const blob = new Blob([response.data]);
        const objectUrl = URL.createObjectURL(blob);
        this.setResume = objectUrl;
        if (!this.setResume) {
          this.isLoading = true;
        }
      });
    this.isLoading = false;
  },
})
export default class myResume extends Vue {}
</script>
