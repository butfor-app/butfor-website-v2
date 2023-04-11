<template>
  <div id="slider_wrapper">
    <div id="slider">
      <img v-for="logo in logos" :src="logo" alt="" />
    </div>
  </div>
</template>
<script setup>
const logos = [
    require("@/assets/logos/dxc_logo.svg"),
    require("@/assets/logos/symbility_logo.svg"),
    require("@/assets/logos/guidewire_logo.svg"),
  require("@/assets/logos/appian_logo.svg"),
  require("@/assets/logos/insurity_logo.svg"),
];
</script>
<style lang="postcss" scoped>
#slider_wrapper {
  @apply h-14;

  > #slider {
    @apply h-14;
    @apply flex items-center gap-x-18;
    @apply overflow-x-auto;
    /* @apply scrollbar-hide; */
    > img {
      @apply h-14;
    }
  }
}
</style>
