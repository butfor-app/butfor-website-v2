<template>
  <div class="text-center text-5xl font-semibold py-12 mb-8">Case Studies</div>
  <div class="mx-auto max-w-[1200px] md:px-18 sm:px-4 px-2">
    <div
      class="w-full py-10 flex flex-col items-center"
      v-if="articles.length == 0"
    >
      <!-- Loading... -->
      <Spinner />
    </div>
    <div class="py-10 flex flex-wrap justify-center gap-x-4 gap-y-12">
      <div
        v-for="article in articles"
        :id="article.id"
        :values="article.attributes"
        class="w-[calc(50%-16px)] bg-white shadow-lg"
      >
        <div>
          <img class="max-h-60 h-60 mx-auto" :src="getImage()" alt="" />
        </div>
        <div class="p-6">
          <div class="text-[28px] font-semibold mb-4">
            {{ article.attributes.values.title }}
          </div>
          <div class="text-lg text-gray-500 font-medium mb-6 font-aneklatin;">
            {{ article.attributes.values.description }}
          </div>
          <RouterLink
            :to="`/article/${id}`"
            class="w-fit block border border-primaryLight px-3 py-2 rounded hover:bg-primaryLight hover:text-white"
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

const { getArticles } = useStrapi();

const articles = ref([]);
getArticles().then((resp) => {
  console.log(resp);
  articles.value = resp;
});

const getDesc = (desc) => {
  const newDesc = desc.replace(/<[^>]*>?/gm, "");
  return newDesc;
};
</script>
<style lang="postcss" scoped></style>
