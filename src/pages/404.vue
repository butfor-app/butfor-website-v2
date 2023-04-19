<template>
  <div class="text-4xl mx-auto mt-20">That Didn't work..</div>
  <div class="text-4xl mx-auto mt-20">
    '{{ currentPath }}' doesn't exist on this server
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";
const Route = useRoute();
const currentPath = Route.path;
</script>
