<template>
  <NavBar />
  <!-- <div id="master_wrapper"> -->
  <div id="scroll_anchor"></div>
  <Suspense>
    <RouterView />
  </Suspense>
  <!-- </div> -->
  <Footer />
</template>

<script setup>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
import { RouterLink, RouterView, useRoute } from "vue-router";
import { watch, ref } from "vue";
import { useHead } from "@vueuse/head";

const title =
  "ButFor: Automate Business Interruption Claims and Maximize Lost Income"; // Replace with your desired title
const description =
  "ButFor: Automate Complex Business Interruption Claims & Recover More. Streamline the process, save time, get expert guidance, reduce costs, and maximize your lost income. Visit butfor.co"; // Replace with your description
const route = useRoute();
const navRef = ref(null);
watch(
  () => route.query,
  (query) => {
    // console.log(route.path.includes("/product"));
    // console.log("Scrolling to top");
    if (route.path.includes("/product")) {
    } else {
      const navbarRef = document.querySelector("#scroll_anchor");
      navbarRef.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  },
);

useHead({
  title,
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "description", content: description },
    {
      name: "keywords",
      content:
        "business interruption insurance, butfor, butfor.co, business interruption claim preparation, claim automation, business interruption",
    },
    {
      property: "og:title",
      content: "Simplify Complex Business Interruption Claims with ButFor",
    },
    {
      property: "og:description",
      content:
        "ButFor streamlines complex and catastrophic business interruption insurance claim preparation. Get expert guidance and maximize your recovery. Visit butfor.co",
    },
    { property: "og:url", content: "https://butfor.co" },
    { property: "og:image", content: "https://www.butfor.co/metal.jpg" },
    {
      property: "twitter:title",
      content: "Simplify Complex Business Interruption Claims with ButFor",
    },
    {
      property: "twitter:description",
      content:
        "ButFor streamlines complex and catastrophic business interruption insurance claim preparation. Get expert guidance and maximize your recovery. Visit butfor.co",
    },
    { property: "twitter:card", content: "summary_large_image" },
    { property: "twitter:image", content: "https://www.butfor.co/metal.jpg" },
    {
      property: "linkedin:summary",
      content: "ButFor helps automate business interruption claims.",
    },
    { property: "linkedin:url", content: "https://butfor.co" },
    { property: "linkedin:image", content: "https://www.butfor.co/metal.jpg" },
  ],
});
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
