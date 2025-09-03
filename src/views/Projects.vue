<template>
  <div class="orgs">
    <myProjects />
  </div>
</template>

<script setup lang="ts">
import myProjects from '@/components/Projects.vue'; // @ is an alias to /src

interface Props {
  msg?: string;
  msgSpinner?: string;
}

defineProps<Props>();
</script>
