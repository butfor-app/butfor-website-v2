<template>
  <div id="slider_wrapper">
    <Carousel :items-to-show="4" :autoplay="2000" :wrap-around="true">
      <slide v-for="(logo, index) in logos" :key="index">
        <img :src="logo" alt="" />
      </slide>
    </Carousel>
  </div>
</template>
<script setup>
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

const logos = [
  new URL("@/assets/logos/dxc_logo.svg", import.meta.url).href,
  new URL("@/assets/logos/symbility_logo.svg", import.meta.url).href,
  new URL("@/assets/logos/guidewire_logo.svg", import.meta.url).href,
  new URL("@/assets/logos/appian_logo.svg", import.meta.url).href,
  new URL("@/assets/logos/insurity_logo.svg", import.meta.url).href,
];
</script>
<style lang="postcss" scoped>
#slider_wrapper {
  @apply h-14;

  > #slider {
    @apply h-14;
    /* @apply flex items-center gap-x-18; */
    /* @apply overflow-x-auto; */
    /* @apply scrollbar-hide; */
    > img {
      /* @apply h-14; */
    }
  }
}
</style>
