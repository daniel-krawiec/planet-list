<template>
  <AppHeader></AppHeader>
  <RouterView />
  <AppFooter></AppFooter>
</template>
<script setup lang="ts">
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  background-image: url("assets/planets.jpg");
  background-size: cover;
  min-height: 100vh;
  min-width: 100vw;
}

body {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
</style>
