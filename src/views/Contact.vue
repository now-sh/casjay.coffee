<template>
  <div class="home">
    <myContact />
  </div>
</template>

<script setup lang="ts">
import myContact from '@/components/myContact.vue'; // @ is an alias to /src

interface Props {
  msg?: string;
  msgSpinner?: string;
}

defineProps<Props>();
</script>
