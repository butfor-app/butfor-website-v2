<template>
  <div id="solutions">
    <div id="heading">OUR SOLUTIONS</div>
    <div class="solution_category">
      <div id="heading">BY COMPANY TYPE</div>
      <SolutionsSlider :solutions="solutionsByCompanyType" />
      <button>View All</button>
    </div>
    <div class="solution_category">
      <div id="heading">BY ROLE</div>
      <SolutionsSlider :solutions="generalData.solutionsByRole" />
      <button>View All</button>
    </div>
    <div class="solution_category">
      <div id="heading">BY CLAIM TYPE</div>
      <SolutionsSlider :solutions="generalData.solutionsByClaimType" />
      <button>View All</button>
    </div>
  </div>
  <GetStarted />
  <ContactForm />
</template>
<script setup>
import SolutionsSlider from "@/components/SolutionsSlider.vue";
import GetStarted from "@/components/GetStarted.vue";
import ContactForm from "@/components/ContactForm.vue";
import { useGeneralData } from "@/stores/useGeneralData";
import { ref, onMounted } from "vue";
import { useHead } from "@vueuse/head";
useHead({ title: "ButFor - Solutions" });
const generalData = useGeneralData();
// const features = generalData.features;
const solutionsByCompanyType = generalData.solutionsByCompanyType;
</script>
<style lang="postcss" scoped>
#solutions {
  @apply overflow-x-hidden flex flex-col items-center justify-center bg-[#5983921A];
  @apply pt-16;
  > #heading {
    @apply text-[46px] font-extrabold text-center text-black mb-9;
  }
  > .solution_category {
    @apply flex flex-col justify-center items-center text-black text-center font-semibold text-2xl mb-14;
    > #heading {
      @apply text-2xl font-semibold mb-12;
    }
    > button {
      @apply text-primary text-base font-medium h-11 w-[168px] rounded-full border border-primary;
      @apply cursor-pointer mt-9;
    }
  }
}
</style>
