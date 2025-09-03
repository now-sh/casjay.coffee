<template>
  <div class="text-center">
    <div class="alert alert-warning m-5">
      <h3>{{ title }}</h3>
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  message: string;
}

defineProps<Props>();
</script>
