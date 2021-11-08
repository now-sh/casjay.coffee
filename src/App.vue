<template>
  <div id="nav" class="nav d-flex justify-content-center mx-5">
    <router-link to="/" style="width: 100px" class="text-left justify-content-between"
      ><img src="/logo.png" height="64" width="64" alt="Home" />
    </router-link>
    <router-link to="/about" type="button" class="btn-lg btn-outline-info"> About </router-link>
  </div>
  <router-view />
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
