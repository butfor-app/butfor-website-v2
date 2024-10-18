<template>
  <div class="mx-auto max-w-[1200px] px-2 py-20 sm:px-4 md:px-18">
    <template v-if="!articleId || article == null">
      <div
        class="flex flex-col items-center gap-4 py-20 text-center text-xl font-medium"
      >
        <div>
          Article does not exist. <br />
          Please check the URL or try searching for the article
        </div>
        <RouterLink
          to="/articles"
          class="w-full max-w-xs rounded bg-primary px-2 py-1 text-sm text-white"
          >Go back to articles</RouterLink
        >
      </div>
    </template>
    <template v-else>
      <div
        class="flex w-full flex-col items-center py-10"
        v-if="Object.keys(article).length == 0"
      >
        <!-- Loading... -->
        <Spinner />
      </div>
      <div v-else class="rounded-3xl text-white shadow-xl shadow-gray-400">
        <div
          class="flex flex-col items-center justify-between rounded-3xl border-b border-white bg-primary px-10 py-10 pt-10 lg:flex-row"
        >
          <div class="flex flex-col-reverse items-center gap-y-4 lg:flex-row">
            <div class="text-3xl font-bold lg:w-2/3 lg:text-5xl">
              {{ article.attributes.title }}
            </div>
            <div class="h-fit lg:w-1/3">
              <img
                class="mx-auto rounded-xl"
                :src="
                  'https://butfor.co/strapi' +
                  article.attributes.thumbnail.data.attributes.url
                "
                alt=""
              />
            </div>
          </div>
          <a
            v-if="article.attributes.media_for_download.data"
            :href="
              'https://butfor.co/strapi' +
              article.attributes.media_for_download.data.attributes.url
            "
            class="self-end rounded-xl bg-primaryLight p-2"
            download
          >
            Download
          </a>
        </div>
        <div
          class="flex flex-col gap-y-2 rounded-b-3xl bg-stone-100 px-10 py-10 text-black"
          v-html="article.attributes.body"
        ></div>
      </div>
    </template>
  </div>
</template>
<script setup>
import { RouterLink, useRoute } from "vue-router";
import { ref } from "vue";
import Spinner from "@/components/General/Spinner.vue";
import useStrapi from "@/composables/useStrapi";
import { useHead } from "@vueuse/head";

const route = useRoute();
const { getArticle } = useStrapi();

const articleId = route.params.article_id;
const article = ref({});

getArticle(articleId).then((resp) => {
  if (resp.attributes.meta_tags?.title) {
    useHead({
      title: resp.attributes.meta_tags.title,
    });
  }
  if (resp.attributes.meta_tags?.description) {
    useHead({
      meta: [
        {
          name: "description",
          content: resp.attributes.meta_tags.description,
        },
      ],
    });
  }

  console.log(resp);
  article.value = resp;
});
</script>
<style lang="postcss" scoped></style>
