<template>
  <div class="orgs">
    <myProjects />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import myProjects from '@/components/Projects.vue'; // @ is an alias to /src

@Options({
  props: {
    msg: { type: String },
    msgSpinner: { type: String },
  },
  components: {
    myProjects,
  },
})
export default class Projects extends Vue {}
</script>
