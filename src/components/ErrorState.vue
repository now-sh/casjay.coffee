<template>
  <div class="text-center">
    <div class="alert alert-danger m-5">
      <h3>{{ title }}</h3>
      <p>{{ message }}</p>
      <button v-if="showRetry" @click="onRetry" class="btn btn-primary" type="button">
        Try Again
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

interface Props {
  title?: string;
  message?: string;
  showRetry?: boolean;
}

withDefaults(defineProps<Props>(), {
  title: 'Error Loading Data',
  message: 'Unable to load data. Please try again later.',
  showRetry: true,
});

const router = useRouter();

const onRetry = () => {
  router.go(0); // Refresh the page
};
</script>
