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
    required: true,
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
  import.meta.url
).href;
</script>
<style lang="postcss" scoped>
#feature_wrapper {
  @apply flex flex-col gap-y-4 gap-x-2 items-center px-2;

  @screen lg {
    @apply flex-row justify-between items-center;
    @apply my-18;
  }

  > #content {
    @apply flex flex-col max-w-[687px] my-0;
    @screen lg {
      @apply my-18;
    }
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
