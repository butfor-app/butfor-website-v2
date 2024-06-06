<template>
  <div class="text-center text-5xl font-semibold py-12 mb-8">Articles</div>
  <div class="mx-auto max-w-[1200px] md:px-18 sm:px-4 px-2">
    <div
      class="w-full py-10 flex flex-col items-center"
      v-if="articles.length == 0"
    >
      <!-- Loading... -->
      <Spinner />
    </div>
    <div class="py-10 flex flex-wrap justify-center gap-x-4 gap-y-12">
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
