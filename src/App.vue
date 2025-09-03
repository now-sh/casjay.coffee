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
      to="/Projects"
      type="button"
      style="color: #ffffff"
      class="m-1 btn btn-info btn-outline-info btn-outline-success"
    >
      Projects
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
    <router-link
      to="/Domains"
      type="button"
      style="color: #ffffff"
      class="m-1 btn btn-info btn-outline-info btn-outline-success"
    >
      Domains
    </router-link>
    <router-link
      to="/Resume"
      type="button"
      style="color: #ffffff"
      class="m-1 btn btn-info btn-outline-info btn-outline-success"
    >
      Resume
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
      Copyright 1999 - 2024
      <br />
      <a href="https://casjay.pro" target="_blank" rel="noopener noreferrer">Casjays Developments</a> and
      <a href="https://malaks-us.github.io/jason" target="_blank" rel="noopener noreferrer">Jason M. Hempstead-Malak</a><br />
      Hosting by
      <a href="https://casjay.pro/hosting" target="_blank" rel="noopener noreferrer">Casjays Developments: Hosting</a><br />
      and powered by <a href="https://casjaysdev.pro" target="_blank" rel="noopener noreferrer">CasjaysDev</a>
      <br />
      <br />
      <a
        href="https://www.patreon.com/casjay"
        target="_blank"
        rel="noopener noreferrer"
      ><img
        src="https://img.shields.io/badge/patreon-donate-orange.svg"
        border="0"
        alt="Casjays Patreon Page"
      /></a>
      <a
        href="https://www.paypal.me/casjaysdev"
        target="_blank"
        rel="noopener noreferrer"
      ><img
        src="https://img.shields.io/badge/Donate-PayPal-green.svg?casjay@yahoo.com"
        alt="Casjays Paypal Page"
      /></a>
      <br />
      <br />
      <a href="https://help.casjay.pro" target="_blank" rel="noopener noreferrer">CasjaysDev Support</a> |
      <a href="https://bugs.casjay.pro" target="_blank" rel="noopener noreferrer">CasjaysDev Bugs</a> <br />
      <a href="https://uptime.servicestat.us" target="_blank" rel="noopener noreferrer">System Status</a> |
      <a href="https://services.servicestat.us" target="_blank" rel="noopener noreferrer">Service Status</a> |
      <a href="https://uptime.servicestat.us" target="_blank" rel="noopener noreferrer">Complete Status</a> <br />
      <a href="https://casjaysdev.pro/domains.html" target="_blank" rel="noopener noreferrer">Casjays Developments Domains</a>
      <br />
      <br />
      Casjays Developments privacy policy can be found at<br />
      <a href="https://casjaysdev.pro/policy/" target="_blank" rel="noopener noreferrer">https://casjaysdev.pro/policy</a>
      <br />
      <!-- End Casjays Developments Footer -->
      <!-- Begin theme Code -->
      <div class="text-center" style="color: royalblue">
        <br />
        Made with 💜💜💜💜💜💜 by <br />
        <a href="http://github.com/casjay" target="_blank" rel="noopener noreferrer">
          Jason M. Hempstead (Casjay)</a
        ><br />
        This site is powered by an
        <a href="https://github.com/casjay-templates" target="_blank" rel="noopener noreferrer"> open source </a>theme
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

/* Global card styles for consistent dimensions */
.card {
  height: 450px !important;
  width: 100% !important;
  display: flex !important;
  flex-direction: column !important;
}

.card-body {
  height: 200px !important;
  display: flex !important;
  flex-direction: column !important;
  overflow: hidden !important;
  padding: 1rem !important;
}

.card-title {
  font-size: 1.25rem !important;
  margin-bottom: 0.75rem !important;
  height: 3rem !important;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
  display: -webkit-box !important;
  -webkit-line-clamp: 2 !important;
  -webkit-box-orient: vertical !important;
}

.card-text {
  height: 6rem !important;
  overflow: hidden !important;
  text-overflow: ellipsis !important;
  display: -webkit-box !important;
  -webkit-line-clamp: 4 !important;
  -webkit-box-orient: vertical !important;
  margin-bottom: 0 !important;
}

.card-footer {
  height: 120px !important;
  padding: 1rem !important;
  flex-shrink: 0 !important;
  margin-top: auto !important;
}

/* Ensure equal height columns */
.row-cols-1 > .col,
.row-cols-md-3 > .col {
  display: flex !important;
  align-items: stretch !important;
  margin-bottom: 1rem !important;
}

/* Mobile responsive adjustments */
@media (max-width: 767.98px) {
  .card {
    height: 400px !important;
    margin: 0 auto 1rem auto !important;
    max-width: 350px !important;
  }
  
  .card-body {
    height: 180px !important;
  }
  
  .card-footer {
    height: 100px !important;
  }
  
  .card-img-top {
    height: 120px !important;
  }
  
  /* Mobile navigation adjustments */
  #nav {
    padding: 15px !important;
    flex-wrap: wrap !important;
  }
  
  #nav a {
    margin: 0.25rem !important;
    font-size: 0.875rem !important;
  }
}

/* Fixed dimensions for card images */
.card-img-top {
  width: 100% !important;
  height: 150px !important;
  object-fit: cover !important;
  flex-shrink: 0 !important;
}
</style>
