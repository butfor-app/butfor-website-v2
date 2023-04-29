<template>
  <HeroSection
    :name="'Natural disasters'"
    :desc="'Natural disasters can cause business interruption by damaging physical property, disrupting supply chains, and causing employee displacement. This can lead to temporary or permanent closures and loss of revenue for affected businesses.'"
    :bg="'/src/assets/images/solutions/natural-disasters-hero-bg.png'"
  />
  <CompaniesSlider />
</template>
<script setup>
import CompaniesSlider from "../../components/CompaniesSlider.vue";
import HeroSection from "../../components/HeroSection.vue";
import { useHead } from "@vueuse/head";
import { ref, onMounted } from "vue";

useHead({
  title: "Butfor - Solutions",
  meta: [
    {
      name: "description",
      content:
        "Butfor is a tool that automates business interruption insurance claims. Calculate your losses & build comprehensive reports in a fraction of the time.",
    },
  ],
});
</script>
<style lang="postcss" scoped></style>
