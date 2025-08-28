import axios, { AxiosRequestConfig, AxiosError } from 'axios';
import { useToast } from '@/composables/useToast';

interface RetryConfig {
  retries?: number;
  retryDelay?: number;
  timeout?: number;
  showErrorToast?: boolean;
}

const defaultConfig: RetryConfig = {
  retries: 1,
  retryDelay: 1000,
  timeout: 5000,
  showErrorToast: true,
};

// Get user-friendly error message
function getUserFriendlyErrorMessage(error: Error | AxiosError): string {
  if (axios.isAxiosError(error)) {
    // Network or connection errors
    if (!error.response) {
      if (error.code === 'ECONNABORTED') {
        return 'Request timed out. Please check your internet connection and try again.';
      }
      return 'Unable to connect to the server. Please check your internet connection.';
    }

    // HTTP status code errors
    const { status } = error.response;
    switch (status) {
      case 400:
        return 'Invalid request. Please check your input and try again.';
      case 401:
        return 'Authentication required. Please sign in and try again.';
      case 403:
        return 'Access denied. You don\'t have permission to access this resource.';
      case 404:
        return 'The requested resource was not found.';
      case 429:
        return 'Too many requests. Please wait a moment and try again.';
      case 500:
        return 'Server error. Our team has been notified. Please try again later.';
      case 502:
      case 503:
      case 504:
        return 'Service temporarily unavailable. Please try again in a few moments.';
      default:
        return `Request failed with status ${status}. Please try again.`;
    }
  }

  // Generic error message
  return 'An unexpected error occurred. Please try again.';
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function fetchWithRetry(
  url: string,
  config: AxiosRequestConfig & RetryConfig = {},
): Promise<any> {
  const {
    retries = defaultConfig.retries,
    retryDelay = defaultConfig.retryDelay,
    showErrorToast = defaultConfig.showErrorToast,
    ...axiosConfig
  } = config;

  const finalConfig: AxiosRequestConfig = {
    ...axiosConfig,
    timeout: config.timeout || defaultConfig.timeout,
  };

  let lastError: Error | null = null;

  let attempt = 0;
  // eslint-disable-next-line no-constant-condition
  while (true) {
    try {
      // eslint-disable-next-line no-await-in-loop
      const response = await axios.get(url, finalConfig);
      return response.data;
    } catch (error) {
      lastError = error as Error;

      // Don't retry on client errors (4xx)
      if (axios.isAxiosError(error) && error.response?.status && error.response.status >= 400 && error.response.status < 500) {
        if (showErrorToast) {
          const { showError } = useToast();
          showError(getUserFriendlyErrorMessage(error as AxiosError));
        }
        throw error;
      }

      if (attempt < retries!) {
        // eslint-disable-next-line no-console
        console.warn(`Request failed, retrying... (attempt ${attempt + 1}/${retries})`);
        // eslint-disable-next-line no-await-in-loop
        await new Promise((resolve) => setTimeout(resolve, retryDelay));
        attempt += 1;
      } else {
        break;
      }
    }
  }

  // If all retries failed, show error toast and throw
  if (showErrorToast && lastError) {
    const { showError } = useToast();
    showError(getUserFriendlyErrorMessage(lastError));
  }

  throw lastError;
}

export async function fetchBlobWithRetry(
  url: string,
  config: RetryConfig = {},
): Promise<Blob> {
  const data = await fetchWithRetry(url, { ...config, responseType: 'blob' });
  return new Blob([data]);
}
