<template>
  <div id="event_cart">
    <img src="@/assets/images/event_1.png" alt="" />
    <div id="name">{{ name }}</div>
    <div id="desc">{{ desc }}</div>
    <a :href="link"></a>
  </div>
</template>
<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});
</script>
<style lang="postcss" scoped>
#event_cart {
  > img {
    @apply max-h-72 mb-6;
  }
  > #name {
    @apply text-[28px] font-semibold mb-4;
  }
  > #desc {
    @apply text-lg text-gray-500 font-medium mb-6 font-aneklatin;
  }
}
</style>
