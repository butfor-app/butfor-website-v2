<template>
  <div id="hero_section">THANKYOU!</div>
</template>
<script setup>
import { useHead } from "@vueuse/head";
useHead({
  title: "Butfor - Thankyou!",
  meta: [
    {
      name: "description",
      content:
        "Butfor is a tool that automates business interruption insurance claims. Calculate your losses & build comprehensive reports in a fraction of the time.",
    },
  ],
});
</script>
<style lang="postcss" scoped>
#hero_section {
  @apply flex flex-col items-center justify-center;
  @apply mx-auto py-20;
  @apply text-5xl font-aneklatin;
  /* @apply py-4 h-[calc(100vh)] text-center; */
  @screen md {
    /* @apply h-[calc(100vh_-_171px)]; */
  }
  @screen sm {
    @apply text-8xl;
  }
}
</style>
