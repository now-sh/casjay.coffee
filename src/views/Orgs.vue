<template>
  <div class="orgs">
    <myOrgs msg="My oganizations" />
  </div>
</template>

<script setup lang="ts">
import myOrgs from '@/components/myOrgs.vue'; // @ is an alias to /src

interface Props {
  msg?: string;
  msgSpinner?: string;
}

defineProps<Props>();
</script>
