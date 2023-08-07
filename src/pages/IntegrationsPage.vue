<template>
  <HeroSection
    name="butfor works where you do"
    desc="Integrate with your existing tools to sync compensation information and workflows. Changes made in one place seamlessly appear in all."
    :bg="integrations_bg"
  />
  <ContactForm />
</template>
<script setup>
import HeroSection from "@/components/HeroSection.vue";
import ContactForm from "@/components/ContactForm.vue";
import integrations_bg from "@/assets/images/integrations_bg.png";
</script>
<style lang="postcss" scoped></style>
