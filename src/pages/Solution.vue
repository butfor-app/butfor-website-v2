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
import CompaniesSlider from "../components/CompaniesSlider.vue";
import HeroSection from "../components/HeroSection.vue";
import SolutionFeatures from "@/components/SolutionFeatures.vue";
import ContactForm from "../components/ContactForm.vue";
import { useHead } from "@vueuse/head";
import { useGeneralData } from "@/stores/useGeneralData";
import { defineProps, ref, watch, toRef } from "vue";
import { onBeforeRouteLeave, onBeforeRouteUpdate } from "vue-router";
import { useRoute } from "vue-router";
const route = useRoute();
console.log(route.params);
// const props = defineProps({
//   routeName: String,
// });
// const routeName = toRef(props, "routeName");
// const routeName = (props.routeName);
const routeName = ref(route.params.id);
// console.log(routeName);
const generalData = useGeneralData();
const solution_data = ref(generalData.getSolutionPageData(routeName.value));
watch(
  () => routeName.value,
  (newVal, oldVal) => {
    console.log("routeName changed", newVal, oldVal);
    solution_data.value = generalData.getSolutionPageData(newVal);
  }
);
// console.log(solution_data);
onBeforeRouteUpdate((to, from, routeName) => {
  // solution_data.value = generalData.getSolutionPageData(to.params.id);
  // console.log(to.params.id);
  routeName.value = to.params.id;
  console.log("onBeforeRouteUpdate", routeName.value);
  // next();
});
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
// const featrureImg = new URL(
//   "@/assets/images/solutions/feature1.png",
//   import.meta.url
// ).href;
</script>
<style lang="postcss" scoped>
#features {
  /* @apply hidden; */
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
