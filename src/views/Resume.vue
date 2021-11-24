<template>
  <div class="resume">
    <myResume />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import myResume from '@/components/myResume.vue'; // @ is an alias to /src

@Options({
  props: {
    msg: { type: String },
    msgSpinner: { type: String },
  },
  components: {
    myResume,
  },
})
export default class Resume extends Vue {}
</script>
