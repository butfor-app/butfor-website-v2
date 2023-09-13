<template>{{ articleId }}</template>
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
