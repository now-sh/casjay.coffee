<template>
  <div class="coffee-spinner">
    <div class="coffee-cup">
      <div class="coffee-liquid"></div>
      <div class="coffee-handle"></div>
      <div class="steam">
        <div class="steam-1"></div>
        <div class="steam-2"></div>
        <div class="steam-3"></div>
      </div>
    </div>
    <div class="loading-message">
      <h3 v-if="msgSpinner">{{ msgSpinner }}</h3>
      <h3 v-else>Loading data from the API</h3>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'spinner',
  props: {
    msg: { type: String },
    msgSpinner: { type: String },
    loading: { type: Boolean },
  },
});
</script>

<style scoped>
.coffee-spinner {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.coffee-cup {
  width: 60px;
  height: 50px;
  background: linear-gradient(to bottom, #8B4513 0%, #5D2E0C 100%);
  border-radius: 0 0 30px 30px;
  position: relative;
  margin-bottom: 20px;
  animation: wobble 1.5s infinite ease-in-out;
}

.coffee-liquid {
  width: 50px;
  height: 35px;
  background: linear-gradient(to bottom, #3E2723 0%, #1B0E08 100%);
  border-radius: 0 0 25px 25px;
  position: absolute;
  top: 8px;
  left: 5px;
  animation: bubble 2s infinite ease-in-out;
}

.coffee-handle {
  width: 20px;
  height: 25px;
  border: 3px solid #5D2E0C;
  border-left: none;
  border-radius: 0 12px 12px 0;
  position: absolute;
  right: -18px;
  top: 8px;
}

.steam {
  position: absolute;
  top: -25px;
  left: 50%;
  transform: translateX(-50%);
}

.steam div {
  width: 3px;
  height: 20px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  position: absolute;
  animation: steam 1.5s infinite ease-out;
}

.steam-1 {
  left: -8px;
  animation-delay: 0s;
}

.steam-2 {
  left: 0px;
  animation-delay: 0.3s;
}

.steam-3 {
  left: 8px;
  animation-delay: 0.6s;
}

.loading-message h3 {
  color: #5D2E0C;
  font-size: 1.2rem;
  margin: 0;
}

@keyframes wobble {
  0%, 100% { transform: rotate(-2deg); }
  50% { transform: rotate(2deg); }
}

@keyframes bubble {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}

@keyframes steam {
  0% {
    opacity: 0;
    transform: translateY(0) scaleY(0.5);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(-30px) scaleY(1.2);
  }
}
</style>
