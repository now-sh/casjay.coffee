<template>
  <div id="nav" class="nav d-flex justify-content-center mx-5">
    <router-link
      to="/"
      type="button"
      style="width: 100px; color: #ffffff"
      class="m-2 text-left justify-content-between btn btn-outline-danger"
      ><img src="/logo.png" height="64" width="64" alt="Home" />
    </router-link>
    <router-link
      to="/orgs"
      type="button"
      style="color: #ffffff"
      class="m-1 btn btn-info btn-outline-info btn-outline-success"
    >
      Organizations
    </router-link>
    <router-link
      to="/Contact"
      type="button"
      style="color: #ffffff"
      class="m-1 btn btn btn-info btn-outline-info btn-outline-success"
    >
      Contact
    </router-link>
    <router-link
      to="/about"
      type="button"
      style="color: #ffffff"
      class="m-1 btn btn-info btn-outline-info btn-outline-success"
    >
      About
    </router-link>
  </div>
  <router-view />
  <br /><br /><br />
  <hr />
  <div class="footer col-sm-12">
    <!-- Begin Footer -->
    <div class="footer-custom" align="center">
      <br />
      <!-- Begin Casjays Developments Footer -->
      Copyright 1999 - 2021
      <br />
      <a href="https://casjay.net" target="_blank">Casjays Developments</a> and
      <a href="https://jason.malaks.us" target="_blank">Jason M. Hempstead-Malak</a><br />
      Hosting by
      <a href="https://casjay.net/hosting" target="_blank">Casjays Developments: Hosting</a><br />
      and powered by <a href="https://casjaysdev.com" target="_blank">CasjaysDev.com</a>
      <br />
      <br />
      <a href="https://www.patreon.com/casjay" target="_blank"
        ><img
          src="https://img.shields.io/badge/patreon-donate-orange.svg"
          border="0"
          alt="Casjays Patreon Page"
      /></a>
      <a href="https://www.paypal.me/casjaysdev" target="_blank"
        ><img
          src="https://img.shields.io/badge/Donate-PayPal-green.svg?casjay@yahoo.com"
          alt="Casjays Paypal Page"
      /></a>
      <br />
      <br />
      <a href="https://help.casjay.net" target="_blank">CasjaysDev Support</a> |
      <a href="https://bugs.casjay.net" target="_blank">CasjaysDev Bugs</a> <br />
      <a href="https://status.casjay.net" target="_blank">System Status</a> |
      <a href="https://servers.casjay.net" target="_blank">Service Status</a> |
      <a href="https://status.casjaysdev.com" target="_blank">Complete Status</a> <br />
      <a href="https://casjaysdev.com/domains.html" target="_blank">Casjays Developments Domains</a>
      <br />
      <br />
      Casjays Developments privacy policy can be found at<br />
      <a href="https://casjaysdev.com/policy/" target="_blank">https://casjaysdev.com/policy</a>
      <br />
      <!-- End Casjays Developments Footer -->
      <!-- Begin theme Code -->
      <div class="text-center" style="color: royalblue">
        <br />
        Made with 💜💜💜💜💜💜 by <br />
        <a href="http://github.com/casjay" target="_blank" rel="noopener">
          Jason M. Hempstead (Casjay)</a
        ><br />
        This site is powered by an
        <a href="https://github.com/casjay-templates" target="_blank"> open source </a>theme
      </div>
      <br />
      <!-- End Theme powered -->
    </div>
    <br />
    <br />
    <!-- End Footer -->
  </div>
  <br /><br /><br /><br />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
