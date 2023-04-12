<template>
  <div id="feature_wrapper">
    <!-- <div id="icon">
      <img :src="icon" alt="" />
    </div> -->
    <template v-if="rtl">
      <div id="content">
        <div id="heading">{{ heading }}</div>
        <div id="desc">{{ desc }}</div>
      </div>
      <img :src="image" alt="" />
    </template>
    <!-- <template v-else>
      <div>{{ icon }}</div>
      <div id="heading">{{ heading }}</div>
      <div id="desc">{{ desc }}</div>
    </template> -->
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
    default: true,
  },
});
const image = require(`@/assets/images/${props.icon}.svg`);
</script>
<style lang="postcss" scoped>
#feature_wrapper {
  @apply flex justify-between items-center;
  @apply gap-x-4;

  > #content {
    @apply flex flex-col w-[687px];

    > #heading {
      @apply text-4xl text-left font-bold;
    }
    > #desc {
      @apply text-xl text-left;
    }
  }
}
</style>
