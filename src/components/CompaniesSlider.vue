<template>
  <div id="slider">
    <div id="slider_track">
      <template v-for="logo in logos">
        <img :src="logo" alt="" />
      </template>
      <template v-for="logo in logos">
        <img :src="logo" alt="" />
      </template>
    </div>
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
#slider {
  @apply mx-10 h-14 relative overflow-hidden;

  #slider_track {
    @apply h-full w-[calc(383px_*_10)] flex justify-between;
    animation: scroll 5s linear infinite;
    > img {
      @apply w-96 h-full;
    }
  }
}
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-384px * 5));
  }
}
</style>
