<template>
  <div class="home">
    <About />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {},
})
export default class About extends Vue {}
</script>
