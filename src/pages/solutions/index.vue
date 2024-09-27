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
  <div class="text-center text-4xl font-extrabold mx-auto max-w-max mb-10">
    See what else Butfor can do
  </div>
  <SolutionsSlider
    class="mb-10 overflow-x-hidden"
    :solutions="solution_cards_data"
  />
  <GetStarted />
  <HubspotForm :formId="solution_data.hubspot_form_id" />
</template>
<script setup>
import CompaniesSlider from "@/components/CompaniesSlider.vue";
import HeroSection from "@/components/HeroSection.vue";
import SolutionFeatures from "@/components/SolutionFeatures.vue";
import SolutionsSlider from "@/components/SolutionsSlider.vue";
import GetStarted from "@/components/GetStarted.vue";
import HubspotForm from "@/components/HubspotForm.vue";
import { useHead } from "@vueuse/head";
import { useGeneralData } from "@/stores/useGeneralData";
import { defineProps, ref, watch, toRef, onMounted } from "vue";
import { useRoute, onBeforeRouteUpdate } from "vue-router";
const route = useRoute();
const generalData = useGeneralData();

const routeName = ref();
const solution_cards_data = ref({});
const solution_data = ref([]);
routeName.value = route.params.solutionKey;

onBeforeRouteUpdate((to, from) => {
  routeName.value = to.params.solutionKey;
});

solution_data.value = generalData.getSolutionPageData(routeName.value);

switch (solution_data.value.type) {
  case "company":
    solution_cards_data.value = generalData.solutionsByCompanyType;
    break;
  case "role":
    solution_cards_data.value = generalData.solutionsByRole;
    break;
  case "claim":
    solution_cards_data.value = generalData.solutionsByClaimType;
    break;
}

watch(
  () => routeName.value,
  (newVal) => {
    // console.log("Route Changed to: ", newVal);
    solution_data.value = generalData.getSolutionPageData(newVal);
    switch (solution_data.value.type) {
      case "company":
        solution_cards_data.value = generalData.solutionsByCompanyType;
        break;
      case "role":
        solution_cards_data.value = generalData.solutionsByRole;
        break;
      case "claim":
        solution_cards_data.value = generalData.solutionsByClaimType;
        break;
    }
  }
);

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
  @apply overflow-x-hidden py-16 flex flex-col gap-y-10 items-center;
  @screen lg {
    @apply gap-y-0 max-w-[1440px] mx-auto;
  }
  > #header {
    @apply text-black text-center font-extrabold text-[46px] mb-9;
  }
}
</style>
