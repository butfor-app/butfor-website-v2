<template>
  <ContactForm />
</template>
<script setup>
import { useHead } from "@vueuse/head";
import ContactForm from "../components/ContactForm.vue";
useHead({
  title: "Butfor - Contact Us",
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
