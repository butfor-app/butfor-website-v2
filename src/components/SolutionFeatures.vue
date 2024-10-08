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
    default: "",
  },
  bg: {
    type: String,
    default: "",
  },
  rtl: {
    type: Boolean,
    required: true,
  },
});
const image = new URL(
  `/src/assets/images/solutions/${props.icon}`,
  import.meta.url,
).href;
</script>
<style lang="postcss" scoped>
#feature_wrapper {
  @apply flex flex-col items-center gap-x-2 gap-y-4 px-2;

  @screen lg {
    @apply flex-row items-center justify-between;
    @apply my-18;
  }

  > #content {
    @apply my-0 flex max-w-[687px] flex-col;
    @screen lg {
      @apply my-18;
    }
    > #heading {
      @apply mb-4 text-left text-4xl font-bold uppercase;
    }
    > #desc {
      @apply text-left font-aneklatin text-xl font-medium text-primary;
    }
    > #shadow_box {
      @apply mt-6 h-1 w-[100px] rounded-full bg-[#1245591A];
    }
  }
  > img {
    @apply max-h-[350px];
    /* @apply max-w-[388px]; */
  }
}
#feature_wrapper:nth-child(odd) {
  @apply flex-col-reverse;
  @screen lg {
    @apply flex-row;
  }
}
</style>
