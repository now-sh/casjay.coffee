<template>
  <div class="home">
    <h1>About site</h1>
    This site along with all subdomains of casjay.coffee is<br />
    hosted on <a href="http://vercel.com">vercel.com</a><br />
    All source code is hosted on github<a href="http://github.com/now-sh">/now-sh</a>
  </div>
  <div>
    <br />
    <h2>Subdomains:</h2>
    <a href="http://lorem.casjay.coffee">lorem ipsum generator</a> |
    <a href="http://quotes.casjay.coffee">Random quote generator</a> <br />
    <a href="http://covid.casjay.coffee">Covid-19 Stats </a> |
    <a href="http://nys.covid.casjay.coffee">Covid-19 Stats for New York </a> |
    <a href="http://location.covid.casjay.coffee">Covid-19 data based on location </a>

    <br />
    <br />
    <h2>Backend API Servers</h2>
    <a href="http://api.casjay.coffee">Backend API server</a> |
    <a href="http://api.covid.casjay.coffee">Backend Covid-19 API server</a>
    <br />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {},
})
export default class About extends Vue {}
</script>
