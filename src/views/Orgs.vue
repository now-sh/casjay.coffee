<template>
  <div class="orgs">
    <myOrgs msg="My oganizations" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import myOrgs from '@/components/myOrgs.vue'; // @ is an alias to /src

@Options({
  props: {
    msg: { type: String },
    msgSpinner: { type: String },
  },
  components: {
    myOrgs,
  },
})
export default class Orgs extends Vue {}
</script>
