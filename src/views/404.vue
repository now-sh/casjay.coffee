<template>
  <!-- Error Page Content -->
  <div class="container">
    <div class="jumbotron">
      <h1>
        <i class="fa fa-frown-o red"></i>
        <a href="https://www.google.com/search?q=server+error+404" target="_blank">404 Not Found</a>
      </h1>
      <br />
      <p class="lead">
        We apologize but we can't seem to be able to find what you're looking for!<br />
      </p>

      <div class="container">
        <div class="body-content">
          <img
            alt="error"
            src="https://raw.githubusercontent.com/casjay-templates/default-web-assets/main/icons/errors/404.gif"
          /><br />
        </div>
      </div>
      <a href="/" class="btn btn-secondary btn-outline-danger btn-lg btn-block"
        >return to homepage
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

export default class NotFound extends Vue {}
</script>

<style></style>
