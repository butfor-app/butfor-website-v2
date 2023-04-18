<template>
  <NavBar />
  <div id="hero_section">
    <img id="bg" src="@/assets/images/productpage_hero.png" alt="" />
    <div id="bg_gradient"></div>
    <div id="heading">Get to know the ButFor platform</div>
    <div id="sub_heading">
      Preparing a business interruption claim has never been easier.
    </div>
    <button>Learn More</button>
  </div>
  <Footer />
</template>
<script setup>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
</script>
<style lang="postcss" scoped>
#hero_section {
  @apply flex flex-col items-center;
  @apply h-[690px] relative;
  @apply text-center px-72 py-60;
  > #bg {
    @apply absolute top-0 left-0 -z-20;
  }
  > #bg_gradient {
    @apply w-full h-full absolute top-0 left-0 -z-10 bg-gradient-to-b from-[#01161E90] to-[#59839290];
  }
  > #heading {
    @apply mb-10 text-[46px] font-extrabold text-white;
  }
  > #sub_heading {
    @apply mb-9 text-xl font-medium font-aneklatin text-white;
  }
  > button {
    @apply w-44 h-11 bg-white rounded-full;
    @apply text-primary  font-semibold font-aneklatin;
  }
}
</style>
