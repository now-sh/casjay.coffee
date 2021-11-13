<template>
  <div id="nav" class="nav d-flex justify-content-center mx-5">
    <router-link
      to="/"
      type="button"
      style="width: 100px"
      class="text-left justify-content-between btn-lg btn-outline-danger"
      ><img src="/logo.png" height="64" width="64" alt="Home" />
    </router-link>
    <router-link to="/" type="button" class="btn-lg btn-outline-info"> Home </router-link>
    <router-link to="/orgs" type="button" class="btn-lg btn-outline-info">
      Organizations
    </router-link>
    <router-link to="/about" type="button" class="btn-lg btn-outline-info"> About </router-link>
  </div>
  <router-view />
  <div class="footer footer-custom col-sm-12">
    <!-- Begin Footer -->
    <div class="footer-custom" align="center">
      <br />
      <!-- Social Links -->
      <div class="share-buttons" align="center">
        <a href="/rss.xml%20"
          ><img alt="RSS Feed" src="https://static.casjay.net/default-icons/social/rss-48x48.png" />
        </a>
        <a href="https://github.com/casjay" target="_blank" title="Github">
          <img alt="Tweet" src="https://static.casjay.net/default-icons/social/github-48x48.png" />
        </a>
        <br />
        <br />
        <!-- ShareThis BEGIN -->
        <div
          class="container"
          style="width: 20%; rows: 2; margin: 0 auto; columns: auto; text-align: center"
          align="center"
        >
          <div class="sharethis-inline-share-buttons"></div>
          <script
            type="text/javascript"
            src="https://platform-api.sharethis.com/js/sharethis.js#property=5acc08103368f4001495b647&amp;product=inline-share-buttons"
            async="async"
          ></script>
        </div>
        <!-- ShareThis END -->
      </div>
      <br />
      <!-- End Social Links-->
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
      <!-- Theme powered -->
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
      <!-- End theme Code -->
      <!-- Begin last updated -->
      <span style="color: skyblue"> Last update on: August 28, 2021 at 16:52 </span>
      <!-- End last updated -->
      <!--Begin Statcounter Code -->
      <!-- End Statcounter Code -->
      <!-- Begin Google Track -->
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-936146-1"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', 'UA-936146-1');
      </script>
      <!-- Eng Google Track -->
      <!--Begin ads Code -->
      <br />
      <!-- End ads Code -->
      <!-- Begin EU compliant -->
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.0.3/cookieconsent.min.css"
      />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.0.3/cookieconsent.min.js"></script>
      <script>
        window.addEventListener('load', function () {
          window.cookieconsent.initialise({
            palette: {
              popup: {
                background: '#64386b',
                text: '#ffcdfd',
              },
              button: {
                background: 'transparent',
                text: '#f8a8ff',
                border: '#f8a8ff',
              },
            },
            content: {
              message: 'In accordance with the EU GDPR law this message is being displayed. - ',
              dismiss: 'I Agree',
              link: 'CasjaysDev Policy',
              href: 'https://casjaysdev.com/policy/',
            },
            type: 'opt-out',
          });
        });
      </script>
      <br />
      <!-- End EU compliant -->
      <!-- Begin WidgetBot Code -->
      <!-- discord widget -->
      <script src="https://cdn.jsdelivr.net/npm/@widgetbot/crate@3" async defer>
        new Crate({
          server: '430838999876108289',
          channel: '430838999876108291',
          location: ['bottom', 'left'],
        })
        crate.notify(
        )
      </script>
      <!-- end discord widget -->
      <!-- End WidgetBot Code -->
      <!-- Start of Rocket.Chat Livechat Script -->
      <!-- End of Rocket.Chat Livechat Script -->
    </div>
    <br />
    <br />
    <!-- End Footer -->
  </div>
  <br /><br /><br /><br /><br /><br /><br />
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
