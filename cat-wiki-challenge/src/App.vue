<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from './views/Home'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap");
#app {
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  color:black;
}
</style>
