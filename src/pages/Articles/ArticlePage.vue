<template>
  <div class="mx-auto max-w-[1200px] px-2 py-6 sm:px-4 md:px-18">
    <template v-if="!articleId || article == null">
      <div
        class="text-center py-20 font-medium text-xl flex items-center flex-col gap-4"
      >
        <div>
          Article does not exist. <br />
          Please check the URL or try searching for the article
        </div>
        <RouterLink
          to="/articles"
          class="text-sm px-2 w-full max-w-xs py-1 bg-primary text-white rounded"
          >Go back to articles</RouterLink
        >
      </div>
    </template>
    <template v-else>
      <div
        class="w-full py-10 flex flex-col items-center"
        v-if="Object.keys(article).length == 0"
      >
        <!-- Loading... -->
        <Spinner />
      </div>
      <div v-else class="p-10 text-white bg-primary rounded-3xl">
        <div
          class="py-10 flex justify-between items-center border-b border-white"
        >
          <div class="text-5xl font-bold">
            {{ article.attributes.title }}
          </div>
          <button class="p-2 rounded-xl bg-primaryLight">Download</button>
        </div>
        <div class="py-6">
          {{ article.attributes.body }}
        </div>
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
const { getArticle } = useStrapi();

const articleId = route.params.article_id;
const article = ref({});

getArticle(articleId).then((resp) => {
  console.log(resp);
  article.value = resp;
});
</script>
<style lang="postcss" scoped></style>
