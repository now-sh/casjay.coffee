<template>
  <div class="home">
    <myDomains />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import myDomains from '@/components/myDomains.vue'; // @ is an alias to /src

@Options({
  props: {
    msg: { type: String },
    msgSpinner: { type: String },
  },
  components: {
    myDomains,
  },
})
export default class Domains extends Vue {}
</script>
