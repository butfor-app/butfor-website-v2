<template>
  <HeroSection
    name="Why butfor Beats Traditional Consulting"
    desc="ButFor provides the same expert insights as traditional consultants at a fraction of the cost,
          eliminating unnecessary fees and inefficiencies.
          Our streamlined, tech-driven solutions deliver faster, tailored results, saving you both time and money."
    bg="/imgs/butfor_vs_bg.png"
  />

  <section class="mx-auto max-w-7xl px-4 py-10">
    <div
      id="table"
      class="grid grid-cols-[40%_20%_40%] items-center text-center"
    >
      <div
        class="flex h-full items-center justify-center bg-[#E0E0E0] text-[38px] font-bold leading-[1] !text-[#6D998F] lg:text-[98px]"
      >
        <span class="block"> Butfor </span>
      </div>
      <div class="h-full w-full bg-[#E0E0E0]"></div>
      <div
        class="h-full w-full bg-[#E0E0E0] py-6 text-[22px] font-bold leading-[1] !text-black lg:text-[64px]"
      >
        Traditional Consultants
      </div>

      <div class="green">
        Utilizes technology to streamline the process, reducing settlement time
        by an average of 30-50%.
      </div>

      <div class="mid">Claim Settlement Time</div>

      <div class="end">
        Often takes months or even years to settle claims due to complex
        negotiations and paperwork.
      </div>

      <div class="green">
        Our technology standardizes the claims process and guarantees no formula
        errors with high success every time.
      </div>

      <div class="mid">Claim Success Rate</div>

      <div class="end">
        May vary depending on the consultant’s experience and skills running
        claims, with human error occurring often.
      </div>

      <div class="green">
        Offers fixed fees, often resulting in substantial cost savings compared
        to traditional consultants.
      </div>

      <div class="mid">Average Cost Savings</div>

      <div class="end">
        High hourly rates can lead to significant costs, especially for complex
        claims.
      </div>

      <div class="green">
        Provides a standardized approach to claims management, minimizing human
        error and ensuring consistent application of policies.
      </div>

      <div class="mid">Consistency & Accuracy</div>

      <div class="end">
        Variability in approach and decision-making can lead to inconsistencies
        and potential errors in claims handling.
      </div>
    </div>
  </section>

  <section class="mx-auto mt-20 max-w-7xl">
    <GetStarted />
  </section>
  <section class="mx-auto max-w-7xl py-10">
    <h2 class="py-4">See what else Butfor can do</h2>
    <SolutionsSlider
      class="mb-10 overflow-x-hidden"
      :solutions="solution_cards_data"
    />
  </section>
  <HubspotForm formId="83efaaa1-4ea3-4a48-b759-c2f345c5a1e3" />
</template>

<script setup>
import { ref } from "vue";
import GetStarted from "@/components/GetStarted.vue";
import SolutionsSlider from "@/components/SolutionsSlider.vue";
import { useGeneralData } from "@/stores/useGeneralData";
import HubspotForm from "@/components/HubspotForm.vue";
import HeroSection from "@/components/HeroSection.vue";

const generalData = useGeneralData();

const solution_cards_data = ref({});
solution_cards_data.value = generalData.solutionsByClaimType;
</script>

<style lang="postcss" scoped>
h2 {
  @apply mb-6 text-center text-[35px] font-bold uppercase leading-[1] text-black;
}
div {
  @apply font-poppins text-[#00000080];
}
#table {
  @apply leading-[1] lg:text-[32px];

  > div {
    @apply px-2 py-10;
  }
  .green {
    @apply flex h-full items-center border-b border-r border-[#E0E0E0] text-[#6D998F];
  }
  .mid {
    writing-mode: vertical-rl;
    text-orientation: sideways-right;
    @apply flex h-full rotate-180 items-center border-b-0 border-t border-[#E0E0E0] font-semibold leading-[1] text-[#080808] lg:rotate-0 lg:border-b lg:border-t-0 lg:text-[25px] lg:font-medium;
  }
  .end {
    @apply flex h-full items-center border-b border-l border-[#E0E0E0] text-[#3E3E3E];
  }
}
</style>
