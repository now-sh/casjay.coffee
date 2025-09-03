<template>
  <div class="home">
    <div v-if="loading">
      <spinner msgSpinner="Loading data from the API" />
    </div>
    <ErrorState v-else-if="error" title="Error Loading Resume" message="Unable to load resume. Please try again later." />
    <div v-else>
      <div class="align-content-center">
        <div class="row justify-content-center">
          <div class="col-9">
            <vue-pdf-embed :source="pdfSource" class="" />
            <a href="https://raw.githubusercontent.com/casjay/public/main/Resume-Tech.pdf" class="h2">Resume can be found here</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import axios from 'axios';
import VuePdfEmbed from 'vue-pdf-embed';
import Spinner from '@/loaders/spinner.vue';
import ErrorState from '@/components/ErrorState.vue';

const loading = ref(true);
const error = ref<Error | null>(null);
const pdfBlob = ref<Blob | null>(null);

const pdfSource = computed(() => {
  if (pdfBlob.value) {
    return URL.createObjectURL(pdfBlob.value);
  }
  return '';
});

onMounted(async () => {
  const resumeUrl = 'https://api.casjay.coffee/api/v1/me/info/resume';

  // Initial delay consistent with useApi pattern
  await new Promise((resolve) => setTimeout(resolve, 500));

  let lastError: Error | null = null;

  // Retry logic consistent with useApi pattern
  // eslint-disable-next-line no-plusplus
  for (let attempt = 0; attempt <= 1; attempt++) {
    try {
      if (attempt > 0) {
        // eslint-disable-next-line no-await-in-loop
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }

      // eslint-disable-next-line no-await-in-loop
      const response = await axios.get(resumeUrl, {
        timeout: 5000,
        responseType: 'blob',
      });

      pdfBlob.value = new Blob([response.data]);
      loading.value = false;
      return;
    } catch (err) {
      lastError = err as Error;
    }
  }

  // All attempts failed
  error.value = lastError;
  loading.value = false;
});

onUnmounted(() => {
  // Clean up object URL to prevent memory leaks
  if (pdfSource.value) {
    URL.revokeObjectURL(pdfSource.value);
  }
});
</script>
