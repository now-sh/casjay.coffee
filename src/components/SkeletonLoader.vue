<template>
  <div class="skeleton-loader" :style="{ width, height }">
    <div class="skeleton-shimmer"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'SkeletonLoader',
  props: {
    width: {
      type: String,
      default: '100%',
    },
    height: {
      type: String,
      default: '20px',
    },
    type: {
      type: String as PropType<'text' | 'card' | 'image' | 'button' | 'circle'>,
      default: 'text',
    },
  },
});
</script>

<style lang="scss" scoped>
@import '@/styles/global.scss';

.skeleton-loader {
  position: relative;
  overflow: hidden;
  background-color: #e0e0e0;
  border-radius: 4px;
  display: inline-block;

  &[type='card'] {
    border-radius: 8px;
    width: 100%;
    min-height: 200px;
  }

  &[type='image'] {
    aspect-ratio: 16 / 9;
    border-radius: 8px;
  }

  &[type='button'] {
    border-radius: 4px;
    width: 120px;
    height: 40px;
  }

  &[type='circle'] {
    border-radius: 50%;
    width: 60px;
    height: 60px;
  }
}

.skeleton-shimmer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.5),
    transparent
  );
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

// Dark theme support
.dark-theme {
  .skeleton-loader {
    background-color: $dark-bg-secondary;
  }

  .skeleton-shimmer {
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
  }
}
</style>
