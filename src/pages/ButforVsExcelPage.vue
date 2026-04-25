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
        Excel Spreadsheets
      </div>

      <div class="green">
        Automates data entry and calculations, reducing time spent on manual
        input and minimizing errors.
      </div>

      <div class="mid">Data EntryEfficiency</div>

      <div class="end">
        Requires extensive manual input, which can lead to inaccuracies and
        wasted time.
      </div>

      <div class="green">
        Ensures data is securely stored & compliant with industry regulations,
        protecting sensitive information.
      </div>

      <div class="mid">Enhanced Reporting & Analytics</div>

      <div class="end">
        Requires manual setup for reports, which can be time-consuming and prone
        to errors.
      </div>

      <div class="green">
        Easily scales with business growth & adapts to changing insurance needs
        without compromising performance.
      </div>

      <div class="mid">Scalability & Adaptability</div>

      <div class="end">
        Can become unwieldy as data grows, leading to slower performance and
        management difficulties.
      </div>

      <div class="green">
        Automates tasks, such as data entry and calculations, which reduces the
        time employees spend on manual work.
      </div>

      <div class="mid">Reduced Labor Costs</div>

      <div class="end">
        Require significant manual effort, leading to higher labor costs as
        employees spend more time on tasks that could be automated.
      </div>
      <div class="green">
        Reduces error occurrence through automated processes, saving costs
        associated with correcting mistakes & reworking reports.
      </div>

      <div class="mid">Minimized Errors & Rework</div>

      <div class="end">
        Prone to human error, which can result in costly mistakes that require
        time and resources to rectify.
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
  <ButForForm formId="32e9d6a5-21fe-49b1-af99-0b06119c032d" pageName="ButFor vs Excel" />
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
