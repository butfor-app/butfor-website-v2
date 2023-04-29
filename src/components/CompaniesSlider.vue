<template>
  <div id="clients">
    <div id="heading">Solving compensation for leading brands</div>
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
  </div>
</template>
<script setup>
const logos = [
  new URL("@/assets/logos/dxc_logo.svg", import.meta.url).href,
  new URL("@/assets/logos/symbility_logo.svg", import.meta.url).href,
  new URL("@/assets/logos/guidewire_logo.svg", import.meta.url).href,
  new URL("@/assets/logos/appian_logo.svg", import.meta.url).href,
  new URL("@/assets/logos/insurity_logo.svg", import.meta.url).href,
];
</script>
<style lang="postcss" scoped>
#clients {
  @apply h-[260px] py-16;
  > #heading {
    @apply text-black text-center font-semibold text-2xl mb-9;
  }

  > #slider {
    @apply max-w-[1200px]  mx-auto h-14 relative overflow-hidden;

    #slider_track {
      @apply h-full w-[calc(383px_*_10)] flex justify-between;
      animation: scroll 60s linear infinite;
      > img {
        @apply w-96 h-full;
      }
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
