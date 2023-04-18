<template>
  <div id="feature_wrapper">
    <template v-if="rtl">
      <div id="content">
        <div id="heading">{{ heading }}</div>
        <div id="desc">{{ desc }}</div>
        <div id="shadow_box"></div>
      </div>
      <img :src="image" alt="" />
    </template>
    <template v-else>
      <img :src="image" alt="" />
      <div id="content">
        <div id="heading">{{ heading }}</div>
        <div id="desc">{{ desc }}</div>
        <div id="shadow_box"></div>
      </div>
    </template>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
const props = defineProps({
  heading: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  rtl: {
    type: Boolean,
    required: true,
  },
});
const image = new URL(`/src/assets/images/${props.icon}.svg`, import.meta.url).href;
</script>
<style lang="postcss" scoped>
#feature_wrapper {
  @apply flex justify-between items-center;
  @apply gap-x-4 my-18;

  > #content {
    @apply flex flex-col w-[687px] my-18;

    > #heading {
      @apply text-4xl text-left font-bold mb-4;
    }
    > #desc {
      @apply text-xl font-medium font-aneklatin text-left text-primary;
    }
    > #shadow_box {
      @apply w-[100px] h-1 bg-[#1245591A] rounded-full mt-6;
    }
  }
}
</style>
