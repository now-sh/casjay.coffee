import { ref, Ref } from 'vue';

export interface Toast {
  id: string;
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
  duration?: number;
}

interface UseToastReturn {
  toasts: Ref<Toast[]>;
  showToast: (message: string, type?: Toast['type'], duration?: number) => void;
  removeToast: (id: string) => void;
  showSuccess: (message: string, duration?: number) => void;
  showError: (message: string, duration?: number) => void;
  showWarning: (message: string, duration?: number) => void;
  showInfo: (message: string, duration?: number) => void;
}

const toasts = ref<Toast[]>([]);

// eslint-disable-next-line import/prefer-default-export, @typescript-eslint/explicit-module-boundary-types
export function useToast(): UseToastReturn {
  const removeToast = (id: string): void => {
    const index = (toasts as any).value.findIndex((t: Toast) => t.id === id);
    if (index > -1) {
      (toasts as any).value.splice(index, 1);
    }
  };

  const showToast = (message: string, type: Toast['type'] = 'info', duration = 5000): void => {
    const id = Date.now().toString();
    const toast: Toast = {
      id,
      message,
      type,
      duration,
    };

    (toasts as any).value.push(toast);

    if (duration > 0) {
      setTimeout(() => {
        removeToast(id);
      }, duration);
    }
  };

  const showSuccess = (message: string, duration?: number): void => {
    showToast(message, 'success', duration);
  };

  const showError = (message: string, duration?: number): void => {
    showToast(message, 'error', duration);
  };

  const showWarning = (message: string, duration?: number): void => {
    showToast(message, 'warning', duration);
  };

  const showInfo = (message: string, duration?: number): void => {
    showToast(message, 'info', duration);
  };

  return {
    toasts,
    showToast,
    removeToast,
    showSuccess,
    showError,
    showWarning,
    showInfo,
  };
}
