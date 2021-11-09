<template>
  <div class="home">
    <Welcome />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Welcome from '@/components/Welcome.vue'; // @ is an alias to /src

@Options({
  components: {
    Welcome,
  },
})
export default class Home extends Vue {}
</script>
