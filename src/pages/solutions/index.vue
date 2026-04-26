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
  <ButForForm :formId="formId" pageName="Solutions" />
</template>
<script setup>
import CompaniesSlider from "@/components/CompaniesSlider.vue";
import HeroSection from "@/components/HeroSection.vue";
import SolutionFeatures from "@/components/SolutionFeatures.vue";
import SolutionsSlider from "@/components/SolutionsSlider.vue";
import GetStarted from "@/components/GetStarted.vue";
import ButForForm from "@/components/ButForForm.vue";
import { useHead } from "@vueuse/head";
import { useGeneralData } from "@/stores/useGeneralData";
import { ref, computed, watch } from "vue";
import { useRoute, onBeforeRouteUpdate } from "vue-router";

const SOLUTION_FORM_IDS = {
  "enterprise":           "67499095-e2e3-4c9e-8603-612712e4adff",
  "insurance-companies":  "570aaff6-2026-4103-a5bb-dddb8468e005",
  "claim-managers":       "6928a319-b976-4f33-9e88-10d8522b0373",
  "insurance-brokers":    "d8edf62d-d09e-4cd2-8485-0419becb799f",
  "law-firms":            "5d7e7c38-e996-4d40-b35c-a76fdec1beb2",
  "risk-compliance":      "479e2427-0ada-4b35-a072-583d96f2257e",
  "finance-analysts":     "1cfec617-31f1-4026-8521-a5c8904cea71",
  "forensic-accountants": "97f32196-7b5d-49ea-bbc8-0b321e583208",
  "executive-teams":      "40d094d9-149b-439d-a7fc-82e62bb665e4",
  "natural-disasters":    "1b91d01e-d6e8-421d-ae79-ce8e563cc628",
  "fire-or-explosion":    "a9b35634-d5e9-4070-b938-d06ca77ec349",
  "equipment-breakdown":  "3a001c4a-0665-419d-82c3-2583d7460261",
  "cyber-attacks":        "8d8492b2-b288-4ad6-9307-6b283e6e9395",
  "power-outages":        "0aef49a5-6160-48d3-80ca-e2f99321afba",
  "city-shutdowns":       "4839eb4d-0250-472f-bf68-89e265ae5a4a",
  "pandemics":            "6cc2e41c-4383-4ced-9ef5-fbb47bbba6c2",
  "faulty-construction":  "e26d05ed-c1ab-4421-a81a-b07eb4071ed6",
};
const route = useRoute();
const generalData = useGeneralData();

const routeName = ref(route.params.solutionKey);
const solution_cards_data = ref({});
const solution_data = ref([]);

const formId = computed(
  () => SOLUTION_FORM_IDS[routeName.value] ?? "d67f1e97-d23d-4960-849a-4153be831abc"
);

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
