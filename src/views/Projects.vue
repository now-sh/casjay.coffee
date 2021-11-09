<template>
  <div class="orgs">
    <Org msg="My oganizations" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import myOrg from '@/components/Projects.vue'; // @ is an alias to /src

@Options({
  components: {
    myOrg,
  },
})
export default class Projects extends Vue {}
</script>
