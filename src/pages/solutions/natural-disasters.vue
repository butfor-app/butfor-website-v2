<template>
  <HeroSection
    :name="solution_data.title"
    :desc="solution_data.desc"
    :bg="solution_data.bg"
  />
  <CompaniesSlider />
  <div id="features">
    <SolutionFeatures
      v-for="(feature, index) in solution_data.features"
      :heading="feature.heading"
      :desc="feature.desc"
      :icon="feature.img"
      :rtl="index == 1"
    />
  </div>
  <div class="text-4xl font-extrabold mx-auto max-w-max mb-10">
    See what else Butfor can do
  </div>
  <SolutionsSlider class="mb-10" :solutions="solution_cards_data" />
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
import CompaniesSlider from "@/components/CompaniesSlider.vue";
import HeroSection from "@/components/HeroSection.vue";
import SolutionFeatures from "@/components/SolutionFeatures.vue";
import SolutionsSlider from "@/components/SolutionsSlider.vue";
import ContactForm from "@/components/ContactForm.vue";
import { useHead } from "@vueuse/head";
import { useGeneralData } from "@/stores/useGeneralData";
import { defineProps, ref, watch, toRef } from "vue";
const routeName = "natural-disasters";
const generalData = useGeneralData();
let solution_cards_data = {};
const solution_data = generalData.getSolutionPageData(routeName);
switch (solution_data.type) {
  case "company":
    solution_cards_data = generalData.solutionsByCompanyType;
    break;
  case "role":
    solution_cards_data = generalData.solutionsByRole;
    break;
  case "claim":
    solution_cards_data = generalData.solutionsByClaimType;
    break;
}
useHead({
  title: `${import.meta.env.VITE_META_TITLE} Solutions`,
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
#features {
  @apply py-16 flex flex-col gap-y-10 items-center;
  @screen lg {
    @apply gap-y-0 max-w-[1440px] mx-auto;
  }
  > #header {
    @apply text-black text-center font-extrabold text-[46px] mb-9;
  }
}
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
