<template>
  <section class="mx-auto max-w-7xl px-4 py-10 pt-20">
    <h1 class="uppercase">join our team</h1>
    <div>
      At ButFor, we’re more than just a company—we’re a movement reshaping the
      insurance industry. We're growing fast and looking for passionate,
      talented individuals who want to be part of a company where innovation,
      collaboration, and purpose drive everything we do. If you're ready to join
      a company where your ideas are valued and your work matters, check out our
      open positions below! Oh...and we’re remote!
    </div>
  </section>

  <section class="mx-auto max-w-7xl px-4 py-10">
    <iframe
      class="h-[50vh] w-full"
      src="https://app.dover.com/jobs/butfor?embed=1"
      frameBorder="0"
    ></iframe>
  </section>

  <section class="mx-auto max-w-7xl">
    <GetStarted />
  </section>
  <section class="mx-auto max-w-7xl py-10">
    <h2 class="py-4">See what else Butfor can do</h2>
    <SolutionsSlider
      class="mb-10 overflow-x-hidden"
      :solutions="solution_cards_data"
    />
  </section>
  <ButForForm formId="04106926-b379-4fb5-b1cd-51e0b7ed4d73" pageName="Careers" />
</template>
<script setup>
import { ref } from "vue";
import GetStarted from "@/components/GetStarted.vue";
import SolutionsSlider from "@/components/SolutionsSlider.vue";
import { useGeneralData } from "@/stores/useGeneralData";
import ButForForm from "@/components/ButForForm.vue";

const generalData = useGeneralData();
const formSubmitted = ref(false);
const submitting = ref(false);

const solution_cards_data = ref({});
solution_cards_data.value = generalData.solutionsByClaimType;
</script>
<style lang="postcss" scoped>
h1,
h2 {
  @apply mb-6 text-center text-[35px] font-bold uppercase leading-[1] text-black;
}
input,
textarea,
button[type="submit"] {
  @apply w-full px-4 py-3;
  @apply rounded-2xl font-medium;
  @apply outline-none;
  @apply border border-[#D9D9D9] focus-within:outline focus-within:outline-[#D9D9D9];
}
</style>
