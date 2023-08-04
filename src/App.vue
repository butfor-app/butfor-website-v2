<template>
  <NavBar />
  <!-- <div id="master_wrapper"> -->
    <div id="scroll_anchor"></div>
  <RouterView />
  <!-- </div> -->
  <Footer />
</template>

<script setup>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
import { RouterLink, RouterView, useRoute } from "vue-router";
import { watch, ref } from "vue";
const route = useRoute();
const navRef = ref(null);
watch(
  () => route.query,
  (query) => {
    // console.log("Scrolling to top");
    const navbarRef = document.querySelector("#scroll_anchor");
    navbarRef.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }
);
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
