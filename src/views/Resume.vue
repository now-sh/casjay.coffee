<template>
  <div class="resume">
    <myResume />
  </div>
</template>

<script setup lang="ts">
import myResume from '@/components/myResume.vue'; // @ is an alias to /src

interface Props {
  msg?: string;
  msgSpinner?: string;
}

defineProps<Props>();
</script>
