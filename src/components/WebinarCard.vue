<template>
  <RouterLink :to="'/webinars/' + slug" id="event_cart">
    <img src="@/assets/images/event_1.png" alt="" />
    <div id="title">{{ title }}</div>
    <div id="desc">{{ trimDesc(desc) }}</div>
    <a
      :href="'/webinars/' + slug"
      class="border border-primaryLight px-3 py-2 hover:bg-primaryLight hover:text-white"
      >Register</a
    >
  </RouterLink>
</template>
<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
});
const trimDesc = (desc) => {
  return desc.length > 70 ? desc.slice(0, 70) + "..." : desc;
};
// const generatePermaLink = (title) => {
//   return title
//     .toLowerCase()
//     .replace(/ /g, "-")
//     .replace(/[^\w-]+/g, "");
// };
</script>
<style lang="postcss" scoped>
#event_cart {
  @apply flex flex-col items-center justify-center text-center;
  > img {
    @apply max-h-72 mb-6;
  }
  > #title {
    @apply text-[24px] font-semibold mb-4;
  }
  > #desc {
    @apply text-lg text-gray-500 font-medium mb-6 font-aneklatin;
  }
}
</style>
