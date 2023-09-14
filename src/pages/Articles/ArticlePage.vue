<template>
  <div class="mx-auto max-w-[1200px] px-2 py-6 sm:px-4 md:px-18">
    <div class="p-10 text-white bg-primary rounded-3xl">
      <div
        class="py-10 flex justify-between items-center border-b border-white"
      >
        <div class="text-5xl font-bold">
          {{ article.values.title }}
        </div>
        <button class="p-2 rounded-xl bg-primaryLight">Download</button>
      </div>
      <div class="py-6">
        {{ article.values.body }}
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";
import { ref } from "vue";
import { getArticle } from "@/composables/useHubspot";
const route = useRoute();
const articleId = route.params.article_id;

const article = ref(null);
article.value = await getArticle(articleId);
console.log(article.value);
</script>
<style lang="postcss" scoped></style>
