<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
<!--  <img alt="Vue logo" src="./assets/logo.png" />-->
  <router-view></router-view>
</template>

<style>
:root {
  --title-color: #777777;
  --text-color: #777777;

  --backgroud-text: #F0F2F533;
  --backgroud-global: #F0F2F5;
}

* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Montserrat, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: var(--backgroud-global);
  color: var(--text-color);
  height: 100%;
  display: flex;
}
</style>
