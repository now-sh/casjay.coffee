<template>
  <div class="home">
    <myContact />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import myContact from '@/components/myContact.vue'; // @ is an alias to /src

@Options({
  props: {
    msg: { type: String },
    msgSpinner: { type: String },
  },
  components: {
    myContact,
  },
})
export default class Contact extends Vue {}
</script>
