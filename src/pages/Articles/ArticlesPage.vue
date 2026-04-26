<template>
  <div class="mb-8 px-4 py-12 text-center text-5xl font-semibold">Articles</div>
  <div class="mx-auto max-w-[1200px] px-2 sm:px-4 md:px-18">
    <div
      class="flex w-full flex-col items-center py-10"
      v-if="articles.length == 0"
    >
      <!-- Loading... -->
      <Spinner />
    </div>
    <div
      class="flex flex-col flex-wrap justify-center gap-x-4 gap-y-12 py-10 lg:flex-row"
    >
      <ArticleCard
        class=""
        v-for="article in articles"
        :id="article.id"
        :values="article.attributes"
      />
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import Spinner from "@/components/General/Spinner.vue";
import ArticleCard from "@/components/Articles/ArticleCard.vue";
import useStrapi from "@/composables/useStrapi";
import { useHead } from "@vueuse/head";
useHead({ title: "ButFor - Articles" });

const { getArticles } = useStrapi();

const articles = ref([]);
getArticles().then((resp) => {
  articles.value = resp;
});

const getDesc = (desc) => {
  const newDesc = desc.replace(/<[^>]*>?/gm, "");
  return newDesc;
};
</script>
<style lang="postcss" scoped></style>
