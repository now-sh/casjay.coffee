import { ref, onMounted } from 'vue';
import { fetchWithRetry, fetchBlobWithRetry } from '@/utils/api';

interface ApiDataOptions {
  timeout?: number;
  retries?: number;
  autoLoad?: boolean;
  showSkeleton?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useApiData<T = any>(url: string, options: ApiDataOptions = {}) {
  const data = ref<T | null>(null);
  const isLoading = ref(false);
  const error = ref<Error | null>(null);

  const {
    timeout = 3000,
    retries = 1,
    autoLoad = true,
  } = options;

  const load = async () => {
    try {
      (isLoading as any).value = true;
      (error as any).value = null;
      (data as any).value = await fetchWithRetry(url, {
        timeout,
        retries,
      });
    } catch (e) {
      (error as any).value = e as Error;
      // eslint-disable-next-line no-console
      console.error(`Failed to load data from ${url}:`, e);
    } finally {
      (isLoading as any).value = false;
    }
  };

  if (autoLoad) {
    onMounted(() => {
      load();
    });
  }

  return {
    data,
    isLoading,
    error,
    load,
  };
}

export function useApiBlob(url: string, options: ApiDataOptions = {}) {
  const blobUrl = ref<string | null>(null);
  const isLoading = ref(false);
  const error = ref<Error | null>(null);

  const {
    timeout = 5000,
    retries = 1,
    autoLoad = true,
  } = options;

  const load = async () => {
    try {
      (isLoading as any).value = true;
      (error as any).value = null;
      const blob = await fetchBlobWithRetry(url, {
        timeout,
        retries,
      });
      (blobUrl as any).value = URL.createObjectURL(blob);
    } catch (e) {
      (error as any).value = e as Error;
      // eslint-disable-next-line no-console
      console.error(`Failed to load blob from ${url}:`, e);
    } finally {
      (isLoading as any).value = false;
    }
  };

  if (autoLoad) {
    onMounted(() => {
      load();
    });
  }

  return {
    blobUrl,
    isLoading,
    error,
    load,
  };
}
