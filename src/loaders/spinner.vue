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
  name: 'CoffeeSpinner',
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
  margin-top: 7.5rem;
}

.coffee-cup {
  width: 120px;
  height: 100px;
  background: linear-gradient(to bottom, #D2691E 0%, #A0522D 100%);
  border-radius: 0 0 60px 60px;
  position: relative;
  margin-bottom: 40px;
  animation: wobble 1.5s infinite ease-in-out;
}

.coffee-liquid {
  width: 100px;
  height: 70px;
  background: linear-gradient(to bottom, #8B4513 0%, #654321 100%);
  border-radius: 0 0 50px 50px;
  position: absolute;
  top: 16px;
  left: 10px;
  animation: bubble 2s infinite ease-in-out;
}

.coffee-handle {
  width: 40px;
  height: 50px;
  border: 6px solid #A0522D;
  border-left: none;
  border-radius: 0 24px 24px 0;
  position: absolute;
  right: -36px;
  top: 16px;
}

.steam {
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
}

.steam div {
  width: 6px;
  height: 40px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  position: absolute;
  animation: steam 1.5s infinite ease-out;
}

.steam-1 {
  left: -16px;
  animation-delay: 0s;
}

.steam-2 {
  left: 0px;
  animation-delay: 0.3s;
}

.steam-3 {
  left: 16px;
  animation-delay: 0.6s;
}

.loading-message h3 {
  color: #f8f9fa;
  font-size: 2.4rem;
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
