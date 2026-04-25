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
        Internal Claim Preparation
      </div>

      <div class="green">
        Leverages industry expertise and specialized knowledge in commercial
        insurance, ensuring claims are handled efficiently and accurately.
      </div>

      <div class="mid">Specialized Expertise</div>

      <div class="end">
        May lack the specialized knowledge required for complex claims, leading
        to potential oversights and errors.
      </div>

      <div class="green">
        Streamlines the claims process with automated workflows, allowing for
        quicker resolution of claims and faster payouts.
      </div>

      <div class="mid">Time Efficiency</div>

      <div class="end">
        Often involves manual processes that can be slow, delaying claim
        resolution and increasing administrative burden.
      </div>

      <div class="green">
        Reduces labor and operational costs through automation and efficient
        processes.
      </div>

      <div class="mid">Cost Savings</div>

      <div class="end">
        Requires dedicated staff and resources, leading to higher operational
        costs for the company.
      </div>

      <div class="green">
        Easily adapts to changing claims volumes and complexities, making it
        suitable for businesses of all sizes and ensuring efficient handling
        during peak times.
      </div>

      <div class="mid">Scalability</div>

      <div class="end">
        May struggle to scale effectively during busy periods, resulting in
        backlogs and increased processing times.
      </div>
      <div class="green">
        Provides access to advanced technology and analytics tools that enhance
        decision-making and optimize claims processing.
      </div>

      <div class="mid">Technology Access</div>

      <div class="end">
        Often relies on outdated systems or spreadsheets, which can hinder
        efficiency and limit data insights.
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
  <ButForForm formId="32e9d6a5-21fe-49b1-af99-0b06119c032d" pageName="ButFor vs Internal" />
</template>

<script setup>
import { ref } from "vue";
import GetStarted from "@/components/GetStarted.vue";
import SolutionsSlider from "@/components/SolutionsSlider.vue";
import { useGeneralData } from "@/stores/useGeneralData";
import ButForForm from "@/components/ButForForm.vue";
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
    text-orientation: sideways;

    @screen lg {
      writing-mode: horizontal-tb;
      text-orientation: upright;
    }
    @apply flex h-full rotate-180 items-center justify-center border-b-0 border-t border-[#E0E0E0] font-semibold leading-[1] text-[#080808] lg:rotate-0 lg:border-b lg:border-t-0 lg:text-[25px] lg:font-medium;
  }
  .end {
    @apply flex h-full items-center border-b border-l border-[#E0E0E0] text-[#3E3E3E];
  }
}
</style>
