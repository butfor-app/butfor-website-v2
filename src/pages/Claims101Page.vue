<template>
  <div class="relative">
    <div class="absolute top-0 -z-10 h-1/2 w-full bg-primary"></div>
    <div class="mx-auto max-w-[1050px] py-18 text-white">
      <div class="flex flex-col gap-y-6 px-5 lg:flex-row lg:px-0">
        <div class="flex flex-col gap-y-8 lg:w-[60%] lg:pr-10">
          <div class="flex items-center gap-x-2">
            <img src="@/assets/icons/webinar.svg" width="30" alt="" /> Claims
            101
          </div>
          <div
            class="flex items-center gap-x-2"
            :class="loading ? 'animate-pulse' : ''"
          >
            <img src="@/assets/icons/clock.svg" width="30" alt="" />
            {{ getTime(claim101.start_time) }} - {{ claim101.timezone }}
          </div>
          <div
            class="font-aneklatin text-5xl font-semibold"
            :class="loading ? 'animate-pulse' : ''"
          >
            {{ claim101.title }}
          </div>
          <div class="text-xl" :class="loading ? 'animate-pulse' : ''">
            {{ claim101.description }}
          </div>
          <div class="box">
            <div class="mb-4 text-2xl font-bold">Lesson Content</div>
            <div
              class="text-sm"
              :class="loading ? 'animate-pulse' : ''"
              v-html="claim101.lesson_content"
            ></div>
          </div>
        </div>
        <div
          v-if="!loading"
          class="flex flex-col gap-y-4 rounded-lg bg-white px-4 py-8 shadow-lg lg:w-[40%]"
        >
          <div class="text-center text-3xl font-semibold text-black">
            Register Now!
          </div>
          <img
            :src="
              'https://butfor.co/strapi/' +
              claim101.thumbnail.data.attributes.url
            "
            alt=""
          />
          <ButForForm formId="79e72c6d-a330-48c4-9366-6fe0d1f8c02f" pageName="Claims 101" />
        </div>
        <div
          v-else
          class="flex flex-col gap-y-4 rounded-lg bg-white px-4 py-8 shadow-lg lg:w-[40%]"
        >
          <div class="text-center text-3xl font-semibold text-black">
            Register Now!
          </div>
          <div class="h-[231px] w-full animate-pulse bg-gray-200"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ButForForm from "@/components/ButForForm.vue";
import { useHead } from "@vueuse/head";
import { ref } from "vue";

useHead({ title: "ButFor - Claims 101" });
import { useRoute } from "vue-router";
import useStrapi from "@/composables/useStrapi.js";
const { getClaims101 } = useStrapi();
const loading = ref(true);

const claim101 = ref({
  createdAt: "2024-07-13T13:23:18.692Z",
  updatedAt: "2024-07-15T11:35:41.505Z",
  publishedAt: "2024-07-13T13:23:20.532Z",
  title: "Loading...",
  description: "Loading...",
  lesson_content: "Loading...",
  hubspot_form_id: null,
  start_time: "Loading...",
  thumbnail: {
    data: null,
  },
});

getClaims101().then((data) => {
  claim101.value = data.attributes;
  loading.value = false;
  // console.log(claim101.value);
});

const getTime = (time) => {
  const date = new Date(time);
  return date.toLocaleTimeString(
    navigator.language,
    {
      weekday: "short",
      hour: "2-digit",
      minute: "2-digit",
      day: "numeric",
      month: "short",
      year: "numeric",
    },
    { hour12: true },
  );
};
</script>

<style lang="postcss" scoped>
.box {
  @apply px-8 py-6;
  @apply text-black;
  @apply rounded-lg bg-white shadow-lg;
}
</style>
