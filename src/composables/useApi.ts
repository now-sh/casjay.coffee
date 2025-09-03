import { ref, Ref } from 'vue';
import axios, { AxiosRequestConfig } from 'axios';

interface UseApiOptions {
  immediate?: boolean;
  retries?: number;
  retryDelay?: number;
  initialDelay?: number;
}

interface UseApiReturn<T> {
  data: Ref<T | null>;
  loading: Ref<boolean>;
  error: Ref<Error | null>;
  execute: () => Promise<void>;
}

// eslint-disable-next-line import/prefer-default-export
export function useApi<T = any>(
  url: string | (() => string),
  config?: AxiosRequestConfig,
  options: UseApiOptions = {},
): UseApiReturn<T> {
  const {
    immediate = true,
    retries = 1,
    retryDelay = 1000,
    initialDelay = 500,
  } = options;

  const data = ref<T | null>(null) as Ref<T | null>;
  const loading = ref(false);
  const error = ref<Error | null>(null);

  const execute = async () => {
    loading.value = true;
    error.value = null;

    // Initial delay to show spinner
    if (initialDelay > 0) {
      await new Promise((resolve) => setTimeout(resolve, initialDelay));
    }

    const apiUrl = typeof url === 'function' ? url() : url;
    let lastError: Error | null = null;

    // eslint-disable-next-line no-plusplus
    for (let attempt = 0; attempt <= retries; attempt++) {
      try {
        if (attempt > 0) {
          if (process.env.NODE_ENV !== 'production') {
            console.log(`Retry attempt ${attempt}...`);
          }
          // eslint-disable-next-line no-await-in-loop
          await new Promise((resolve) => setTimeout(resolve, retryDelay));
        }

        // eslint-disable-next-line no-await-in-loop
        const response = await axios.get<T>(apiUrl, {
          timeout: 5000,
          ...config,
        });

        // Handle different response structures
        if (response.data) {
          if (Array.isArray(response.data)) {
            data.value = response.data;
          } else if (typeof response.data === 'object' && response.data !== null && 'repos' in response.data) {
            data.value = (response.data as any).repos;
          } else if (typeof response.data === 'object' && response.data !== null && 'orgs' in response.data) {
            data.value = (response.data as any).orgs;
          } else if (typeof response.data === 'object' && response.data !== null && 'message' in response.data) {
            // Handle "No repositories found" or similar messages - preserve the response
            data.value = response.data;
          } else {
            data.value = response.data;
          }
        }

        loading.value = false;
        return;
      } catch (err) {
        lastError = err as Error;
        if (attempt === 0 && process.env.NODE_ENV !== 'production') {
          console.log('First attempt failed, retrying...');
        }
      }
    }

    // All attempts failed
    if (process.env.NODE_ENV !== 'production') {
      console.error('Failed after all retries:', lastError);
    }
    error.value = lastError;
    loading.value = false;
  };

  if (immediate) {
    execute();
  }

  return {
    data,
    loading,
    error,
    execute,
  };
}
