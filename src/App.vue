<template>
  <NavBar />
  <!-- <div id="master_wrapper"> -->
    <RouterView />
  <!-- </div> -->
  <Footer />
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
</script>

<style>
#app {
  @apply m-0 p-0;
  /* @apply w-[1440px] mx-auto; */
}
/* #master_wrapper {
  @apply w-[1440px] mx-auto;
} */
</style>
