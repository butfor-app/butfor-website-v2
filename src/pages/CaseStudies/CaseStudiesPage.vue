<template>
  <div class="mb-8 py-12 text-center text-5xl font-semibold">Case Studies</div>
  <div class="mx-auto max-w-[1200px] px-2 sm:px-4 md:px-18">
    <div
      class="flex w-full flex-col items-center py-10"
      v-if="caseStudies.length == 0"
    >
      <!-- Loading... -->
      <Spinner />
    </div>
    <div
      v-else
      class="flex flex-col flex-wrap justify-center gap-x-4 gap-y-12 py-10 lg:flex-row"
    >
      <div
        v-for="caseStudy in caseStudies"
        :id="caseStudy.id"
        class="w-full bg-white shadow-lg lg:w-[calc(50%-16px)]"
      >
        <!-- :values="caseStudy.attributes" -->
        <div>
          <img
            class="mx-auto h-60 max-h-60 object-contain"
            :src="
              caseStudy.attributes.thumbnail.data
                ? 'https://butfor.co/strapi' +
                  caseStudy.attributes.thumbnail.data.attributes.url
                : ''
            "
            alt=""
          />
        </div>
        <div class="p-3 lg:p-6">
          <div
            class="mb-2 text-xl font-semibold leading-[1.2] lg:mb-4 lg:text-[28px]"
          >
            {{ caseStudy.attributes.title }}
          </div>
          <div
            class="mb-2 font-aneklatin text-sm font-medium text-gray-500 lg:mb-6 lg:text-lg"
          >
            {{ trimDesc(caseStudy.attributes.description) }}
          </div>
          <RouterLink
            :to="`/case-studies/${caseStudy.id}`"
            class="block w-fit rounded border border-primaryLight px-3 py-2 text-sm hover:bg-primaryLight hover:text-white lg:text-base"
          >
            Read Now
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import Spinner from "@/components/General/Spinner.vue";
import useStrapi from "@/composables/useStrapi";

const { getCaseStudies } = useStrapi();

const caseStudies = ref([]);
getCaseStudies().then((resp) => {
  // console.log(resp);
  caseStudies.value = resp;
});

const getDesc = (desc) => {
  const newDesc = desc.replace(/<[^>]*>?/gm, "");
  return newDesc;
};
const trimDesc = (desc, length = 100) => {
  return desc.length > length ? desc.slice(0, length) + "..." : desc;
};
</script>
<style lang="postcss" scoped></style>
