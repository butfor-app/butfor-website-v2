<template>
  <div id="hero_section">
    <template v-if="route.query.type === 'whitepaper'">
      <span class="font-semibold">Thanks!</span>
      Your white paper has downloaded &amp; a copy has been sent to your email.
      <span class="w-full text-right mt-6"> -the ButFor team </span>
    </template>
    <template v-else>
      <span class="font-semibold">Thank you!</span>
      The invite will be in your email. Chat soon.
      <span class="w-full text-right mt-6"> -the ButFor team </span>
    </template>
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";
import { useHead } from "@vueuse/head";
const route = useRoute();
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
  @apply max-w-5xl;
  /* @apply py-4 h-[calc(100vh)] text-center; */
  @screen md {
    /* @apply h-[calc(100vh_-_144px)]; */
  }
  @screen sm {
    @apply text-4xl;
  }
}
</style>
