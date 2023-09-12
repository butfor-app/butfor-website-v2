<template>
  <div class="text-center text-5xl font-semibold py-12 mb-8">Articles</div>
  <div class="mx-auto max-w-[1200px] md:px-18 sm:px-4 px-2">
    <div class="py-10 flex flex-wrap justify-center gap-x-4 gap-y-6">
      <EventCard
        class="w-[calc(50%-16px)] shadow-lg"
        v-for="article in articles"
        :image="getImage(article.featuredImage)"
        :name="article.name"
        :desc="article.postBody"
        :link="article.link"
      />
    </div>
  </div>
</template>
<script setup>
import EventCard from "@/components/EventCard.vue";
import { useHubspot } from "@/composables/useHubspot";
import { ref } from "vue";
const articles = ref([]);
const resp = await useHubspot().getBlogsPostsByTag("articles");
console.log(resp);
console.log(resp.results);
articles.value = resp.results;

const getImage = (img) => {
  if (img) {
    return img;
  }
  return new URL("@/assets/images/event_1.png", import.meta.url).href;
};
// const articles = ref([
//   {
//     name: "Article 1",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam. Sed euismod, nisl quis lacinia aliquet, nisl nisl ultrices nisl, quis lacinia.",
//     link: "#",
//   },
//   {
//     name: "Article 2",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam. Sed euismod, nisl quis lacinia aliquet, nisl nisl ultrices nisl, quis lacinia.",
//     link: "#",
//   },
//   {
//     name: "Article 3",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam. Sed euismod, nisl quis lacinia aliquet, nisl nisl ultrices nisl, quis lacinia.",
//     link: "#",
//   },
//   {
//     name: "Article 4",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam. Sed euismod, nisl quis lacinia aliquet, nisl nisl ultrices nisl, quis lacinia.",
//     link: "#",
//   },
//   {
//     name: "Article 5",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam. Sed euismod, nisl quis lacinia aliquet, nisl nisl ultrices nisl, quis lacinia.",
//     link: "#",
//   },
// ]);
</script>
<style lang="postcss" scoped></style>
