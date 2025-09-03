<template>
  <div class="container mt-5">
    <h2>Error Handling Test</h2>
    <div class="row">
      <div class="col-md-6">
        <h3>Test 1: API Failure</h3>
        <button @click="testApiFailure" class="btn btn-warning mb-3">
          Simulate API Failure
        </button>
        <div v-if="loading1">
          <spinner msgSpinner="Loading data..." />
        </div>
        <ErrorState
          v-else-if="error1"
          title="API Test Failed"
          message="This is a simulated API failure to test error handling."
          :showRetry="false"
        />
        <div v-else-if="data1" class="alert alert-success">
          Data loaded successfully!
        </div>
      </div>

      <div class="col-md-6">
        <h3>Test 2: Empty Data</h3>
        <button @click="testEmptyData" class="btn btn-info mb-3">
          Simulate Empty Data
        </button>
        <div v-if="loading2">
          <spinner msgSpinner="Loading data..." />
        </div>
        <EmptyState
          v-else-if="showEmpty"
          title="No Data Available"
          message="This simulates a successful API call that returns no data."
        />
        <div v-else-if="data2" class="alert alert-success">
          Data found: {{ data2 }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Spinner from '@/loaders/spinner.vue';
import ErrorState from '@/components/ErrorState.vue';
import EmptyState from '@/components/EmptyState.vue';
import { useApi } from '@/composables/useApi';

const loading1 = ref(false);
const error1 = ref(false);
const data1 = ref(null);

const loading2 = ref(false);
const showEmpty = ref(false);
const data2 = ref(null);

const testApiFailure = async () => {
  loading1.value = true;
  error1.value = false;
  data1.value = null;

  // Simulate API call with invalid URL to trigger error
  // Unused variables from useApi are intentionally not used to simulate the API call
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { loading, error, data } = useApi(
    'https://api.casjay.coffee/api/v1/invalid-endpoint-404',
    {},
    { immediate: false, retries: 0 },
  );

  await new Promise((resolve) => setTimeout(resolve, 1000));
  loading1.value = false;
  error1.value = true;
};

const testEmptyData = async () => {
  loading2.value = true;
  showEmpty.value = false;
  data2.value = null;

  await new Promise((resolve) => setTimeout(resolve, 1000));
  loading2.value = false;
  showEmpty.value = true;
};
</script>
