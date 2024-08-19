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
    <div v-else class="flex flex-wrap justify-center gap-x-4 gap-y-12 py-10">
      <div
        v-for="caseStudy in caseStudies"
        :id="caseStudy.id"
        class="w-[calc(50%-16px)] bg-white shadow-lg"
      >
        <!-- :values="caseStudy.attributes" -->
        <div>
          <img
            class="mx-auto h-60 max-h-60"
            :src="
              caseStudy.attributes.thumbnail.data
                ? 'https://butfor.co/strapi' +
                  caseStudy.attributes.thumbnail.data.attributes.url
                : ''
            "
            alt=""
          />
        </div>
        <div class="p-6">
          <div class="mb-4 text-[28px] font-semibold">
            {{ caseStudy.attributes.title }}
          </div>
          <div class="font-aneklatin; mb-6 text-lg font-medium text-gray-500">
            {{ caseStudy.attributes.description }}
          </div>
          <RouterLink
            :to="`/case-studies/${caseStudy.id}`"
            class="block w-fit rounded border border-primaryLight px-3 py-2 hover:bg-primaryLight hover:text-white"
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
  console.log(resp);
  caseStudies.value = resp;
});

const getDesc = (desc) => {
  const newDesc = desc.replace(/<[^>]*>?/gm, "");
  return newDesc;
};
</script>
<style lang="postcss" scoped></style>
