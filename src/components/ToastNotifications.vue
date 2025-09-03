<template>
  <transition-group
    name="toast"
    tag="div"
    class="toast-container"
  >
    <div
      v-for="toast in toasts"
      :key="toast.id"
      :class="['toast', `toast-${toast.type}`]"
      role="alert"
      tabindex="0"
      @click="removeToast(toast.id)"
      @keydown.enter="removeToast(toast.id)"
      @keydown.space.prevent="removeToast(toast.id)"
    >
      <div class="toast-icon">
        <span v-if="toast.type === 'success'">✓</span>
        <span v-else-if="toast.type === 'error'">✗</span>
        <span v-else-if="toast.type === 'warning'">!</span>
        <span v-else>ℹ</span>
      </div>
      <div class="toast-message">
        {{ toast.message }}
      </div>
    </div>
  </transition-group>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useToast } from '@/composables/useToast';

export default defineComponent({
  name: 'ToastNotifications',
  setup() {
    const { toasts, removeToast } = useToast();

    return {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      toasts: computed(() => (toasts as any).value),
      removeToast,
    };
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/global.scss';

.toast-container {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 9999;
  pointer-events: none;
}

.toast {
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  margin-bottom: 16px;
  padding: 16px;
  pointer-events: all;
  cursor: pointer;
  max-width: 400px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(-5px);
  }

  &-success {
    border-left: 4px solid $success-color;

    .toast-icon {
      color: $success-color;
    }
  }

  &-error {
    border-left: 4px solid $primary-color;

    .toast-icon {
      color: $primary-color;
    }
  }

  &-warning {
    border-left: 4px solid #ffc107;

    .toast-icon {
      color: #ffc107;
    }
  }

  &-info {
    border-left: 4px solid $secondary-color;

    .toast-icon {
      color: $secondary-color;
    }
  }
}

.toast-icon {
  font-size: 24px;
  font-weight: bold;
  margin-right: 12px;
  width: 30px;
  text-align: center;
}

.toast-message {
  flex: 1;
  color: $text-dark;
  font-size: 14px;
  line-height: 1.5;
}

// Dark theme styles
.dark-theme {
  .toast {
    background-color: $dark-bg-secondary;
    color: $dark-text;

    .toast-message {
      color: $dark-text;
    }
  }
}

// Toast animations
.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}

.toast-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.toast-leave-to {
  transform: translateX(100%);
  opacity: 0;
}

// Mobile responsiveness
@media (max-width: $mobile) {
  .toast-container {
    top: 10px;
    right: 10px;
    left: 10px;
  }

  .toast {
    max-width: 100%;
  }
}
</style>
