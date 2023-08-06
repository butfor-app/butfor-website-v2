<template>
  <div class="text-center text-5xl font-semibold py-12 mb-8">Articles</div>
  <div class="mx-auto max-w-[1200px] md:px-18 sm:px-4 px-2">
    <div class="flex flex-wrap justify-center gap-x-4">
      <EventCard
        class="w-[calc(50%-16px)]"
        v-for="article in articles"
        :name="article.name"
        :desc="article.desc"
        :link="article.link"
      />
    </div>
  </div>
</template>
<script setup>
import EventCard from "@/components/EventCard.vue";
import { ref } from "vue";
const articles = ref([
  {
    name: "Article 1",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam. Sed euismod, nisl quis lacinia aliquet, nisl nisl ultrices nisl, quis lacinia.",
    link: "#",
  },
  {
    name: "Article 2",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam. Sed euismod, nisl quis lacinia aliquet, nisl nisl ultrices nisl, quis lacinia.",
    link: "#",
  },
  {
    name: "Article 3",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam. Sed euismod, nisl quis lacinia aliquet, nisl nisl ultrices nisl, quis lacinia.",
    link: "#",
  },
  {
    name: "Article 4",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam. Sed euismod, nisl quis lacinia aliquet, nisl nisl ultrices nisl, quis lacinia.",
    link: "#",
  },
  {
    name: "Article 5",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam. Sed euismod, nisl quis lacinia aliquet, nisl nisl ultrices nisl, quis lacinia.",
    link: "#",
  },
]);
</script>
<style lang="postcss" scoped></style>
