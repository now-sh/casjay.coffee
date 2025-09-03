<template>
  <div class="home">
    <myDomains />
  </div>
</template>

<script setup lang="ts">
import myDomains from '@/components/myDomains.vue'; // @ is an alias to /src

interface Props {
  msg?: string;
  msgSpinner?: string;
}

defineProps<Props>();
</script>
