<template>
  <div v-if="Object.keys(landing_page_data).length > 0">
    <HeroSection
      :name="landing_page_data.attributes.title"
      :desc="landing_page_data.attributes.description"
      :bg="
        'https://butfor.co/strapi' +
        landing_page_data.attributes.background_image.data.attributes.url
      "
    />
    <CompaniesSlider />
    <div id="features">
      <div
        id="feature_wrapper"
        class="flex flex-col items-center gap-x-2 gap-y-4 px-2 lg:my-18 lg:flex-row lg:items-center lg:justify-between"
      >
        <div id="content" class="my-0 flex max-w-[687px] flex-col lg:my-18">
          <div id="heading" class="mb-4 text-left text-4xl font-bold uppercase">
            {{ landing_page_data.attributes.feature_heading }}
          </div>
          <div
            id="desc"
            class="text-left font-aneklatin text-xl font-medium text-primary"
          >
            {{ landing_page_data.attributes.feature_description }}
          </div>
          <div
            id="shadow_box"
            class="mt-6 h-1 w-[100px] rounded-full bg-[#1245591A]"
          ></div>
        </div>
        <img
          :src="
            'https://butfor.co/strapi' +
            landing_page_data.attributes.feature_img.data.attributes.url
          "
          alt=""
        />
      </div>
    </div>
    <div class="mx-auto mb-10 max-w-max text-center text-4xl font-extrabold">
      See what else Butfor can do
    </div>
    <SolutionsSlider
      class="mb-10 overflow-x-hidden"
      :solutions="solution_cards_data"
    />
    <GetStarted />
    <HubspotForm :formId="landing_page_data.attributes.hubspot_form_id" />
  </div>
  <div v-else>
    <div v-if="_404" class="py-44 text-center text-4xl font-bold text-gray-600">
      Page Not Found. Go back to
      <RouterLink to="/" class="text-primary underline"> Home. </RouterLink>
    </div>
    <div
      v-else
      class="animate-pulse py-44 text-center text-4xl font-bold text-gray-600"
    >
      Loading...
    </div>
  </div>
</template>
<script setup>
import CompaniesSlider from "@/components/CompaniesSlider.vue";
import HeroSection from "@/components/HeroSection.vue";
import SolutionsSlider from "@/components/SolutionsSlider.vue";
import GetStarted from "@/components/GetStarted.vue";
import HubspotForm from "@/components/HubspotForm.vue";
import { useHead } from "@vueuse/head";
import { useGeneralData } from "@/stores/useGeneralData";
import useStrapi from "@/composables/useStrapi.js";
import { ref } from "vue";
import { useRoute, onBeforeRouteUpdate, RouterLink } from "vue-router";

const route = useRoute();
const generalData = useGeneralData();

const routeName = ref();
const { getLandingPage } = useStrapi();

const solution_cards_data = ref({});
solution_cards_data.value = generalData.solutionsByCompanyType;

const landing_page_data = ref({});

routeName.value = route.params.landingPageId;

// console.log(routeName.value);
const _404 = ref(false);
getLandingPage(routeName.value).then((data) => {
  //   console.log(data[0]);
  if (data.length > 0) {
    landing_page_data.value = data[0];
  } else {
    _404.value = true;
  }
});
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
  @apply flex flex-col items-center gap-y-10 overflow-x-hidden py-16;
  @screen lg {
    @apply mx-auto max-w-[1440px] gap-y-0;
  }
  > #header {
    @apply mb-9 text-center text-[46px] font-extrabold text-black;
  }
}
</style>
