<template>
  <div class="mb-8 px-4 py-12 text-center text-5xl font-semibold">
    White Papers
  </div>
  <div class="mx-auto max-w-[1200px] px-2 sm:px-4 md:px-18">
    <div
      class="flex w-full flex-col items-center py-10"
      v-if="whitePapers.length == 0"
    >
      <!-- Loading... -->
      <Spinner />
    </div>
    <div
      class="flex flex-col flex-wrap justify-center gap-x-4 gap-y-12 py-10 lg:flex-row"
    >
      <div id="white_paper_card" v-for="whitePaper in whitePapers">
        <img
          class="h-48 w-96 object-contain"
          :src="getImage(whitePaper.attributes.thumbnail.data.attributes.url)"
          alt=""
        />
        <div id="title">{{ whitePaper.attributes.title }}</div>
        <div id="desc">{{ trimDesc(whitePaper.attributes.description) }}</div>
        <RouterLink
          :to="'/white-papers/' + whitePaper.id"
          class="border border-primaryLight px-3 py-2 hover:bg-primaryLight hover:text-white"
        >
          Register
        </RouterLink>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useHead } from "@vueuse/head";
import useStrapi from "@/composables/useStrapi.js";

useHead({ title: "ButFor - White Papers" });

const { getWhitePapers, getImageUrl } = useStrapi();

const whitePapers = ref([]);

getWhitePapers().then((data) => {
  //   console.log("Got the data....");

  //   console.log(data);
  whitePapers.value = data;
});
const trimDesc = (desc) => {
  return desc.length > 40 ? desc.slice(0, 40) + "..." : desc;
};
const getImage = (imgSlug) => {
  if (imgSlug) {
    return getImageUrl(imgSlug);
  }
  return new URL("@/assets/images/event_1.png", import.meta.url).href;
};
</script>
<style lang="postcss" scoped>
#white_paper_card {
  @apply flex flex-col items-center justify-center rounded-lg py-4 text-center shadow-lg shadow-gray-500;
  > img {
    @apply mb-6 max-h-72;
  }
  > #title {
    @apply mb-4 text-[24px] font-semibold;
  }
  > #desc {
    @apply mb-6 font-aneklatin text-lg font-medium text-gray-500;
  }
}
</style>
