<template>
  <div class="mx-auto max-w-[1200px] px-2 py-6 sm:px-4 md:px-18">
    <template v-if="!caseStudyId || caseStudy == null">
      <div
        class="flex flex-col items-center gap-4 py-20 text-center text-xl font-medium"
      >
        <div>
          caseStudy does not exist. <br />
          Please check the URL or try searching for the caseStudy
        </div>
        <RouterLink
          to="/case-studies"
          class="w-full max-w-xs rounded bg-primary px-2 py-1 text-sm text-white"
          >Go back to case studies</RouterLink
        >
      </div>
    </template>
    <template v-else>
      <div
        class="flex w-full flex-col items-center py-10"
        v-if="Object.keys(caseStudy).length == 0"
      >
        <!-- Loading... -->
        <Spinner />
      </div>
      <div v-else class="rounded-3xl bg-primary p-10 text-white">
        <div
          class="flex items-center justify-between gap-4 border-b border-white py-10"
        >
          <div class="text-5xl font-bold lg:w-[80%]">
            {{ caseStudy.attributes.title }}
          </div>
          <!-- <button class="rounded-xl bg-primaryLight p-2">Download</button> -->
          <div class="hidden h-full w-[20%] lg:block">
            <img
              :src="
                'https://butfor.co/strapi' +
                caseStudy.attributes.thumbnail.data.attributes.url
              "
              class="h-full w-full"
              alt=""
            />
          </div>
        </div>
        <div class="py-6" v-html="caseStudy.attributes.body"></div>
      </div>
    </template>
  </div>
</template>
<script setup>
import { RouterLink, useRoute } from "vue-router";
import { ref } from "vue";
import Spinner from "@/components/General/Spinner.vue";
import useStrapi from "@/composables/useStrapi";

const route = useRoute();
const { getCaseStudy } = useStrapi();

const caseStudyId = route.params.caseStudyId;
const caseStudy = ref({});

getCaseStudy(caseStudyId).then((resp) => {
  // console.log(resp);
  caseStudy.value = resp;
});
</script>
<style lang="postcss" scoped></style>
