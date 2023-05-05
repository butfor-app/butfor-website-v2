<template>
  <HeroSection
    :name="'Natural disasters'"
    :desc="'Natural disasters can cause business interruption by damaging physical property, disrupting supply chains, and causing employee displacement. This can lead to temporary or permanent closures and loss of revenue for affected businesses.'"
    :bg="'/src/assets/images/solutions/natural-disasters-hero-bg.png'"
  />
  <CompaniesSlider />
  <div id="get_started">
    <div id="heading" class="">Ready to get started?</div>
    <div id="buttons">
      <a href="#" id="demo_btn">View Demo</a>
      <a href="#" id="speak_btn">Speak to our team</a>
    </div>
  </div>
  <ContactForm />
</template>
<script setup>
import CompaniesSlider from "../../components/CompaniesSlider.vue";
import HeroSection from "../../components/HeroSection.vue";
import ContactForm from "../../components/ContactForm.vue";
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
<style lang="postcss" scoped>
#get_started {
  @apply h-96 flex flex-col items-center justify-center;
  @apply bg-[url('@/assets/images/solutions-get-started.png')] bg-no-repeat	bg-cover  bg-top;
  > #heading {
    @apply text-[46px] text-white font-extrabold text-center;
    @apply mb-10;
  }
  > #buttons {
    @apply flex gap-x-4;
    > a {
      @apply w-[160px] h-12 flex items-center justify-center text-center font-semibold font-aneklatin;
    }
    > #demo_btn {
      @apply bg-primary text-white rounded-3xl cursor-pointer;
      @apply mr-4;
    }
    > #speak_btn {
      @apply bg-white text-primary rounded-3xl cursor-pointer;
    }
  }
}
</style>
