<template>
  <div class="relative">
    <div class="absolute top-0 -z-10 bg-primary w-full h-1/2"></div>
    <div class="max-w-[1050px] mx-auto py-18 text-white">
      <div class="flex lg:px-0 px-5 gap-y-6 flex-col lg:flex-row">
        <div class="lg:w-[60%] lg:pr-10 flex flex-col gap-y-8">
          <div class="flex items-center gap-x-2">
            <img src="@/assets/icons/webinar.svg" width="30" alt="" /> Claims
            101
          </div>
          <div
            class="flex items-center gap-x-2"
            :class="loading ? 'animate-pulse' : ''"
          >
            <img src="@/assets/icons/clock.svg" width="30" alt="" />
            {{ getTime(claim101.start_time) }}
          </div>
          <div
            class="text-5xl font-semibold font-aneklatin"
            :class="loading ? 'animate-pulse' : ''"
          >
            {{ claim101.title }}
          </div>
          <div class="text-xl" :class="loading ? 'animate-pulse' : ''">
            {{ claim101.description }}
          </div>
          <div class="box">
            <div class="text-2xl font-bold mb-4">Lesson Content</div>
            <div class="text-sm" :class="loading ? 'animate-pulse' : ''">
              {{ claim101.lesson_content }}
            </div>
          </div>
        </div>
        <div
          class="lg:w-[40%] flex flex-col gap-y-4 bg-white rounded-lg px-4 py-8 shadow-lg"
        >
          <div class="text-3xl text-center text-black font-semibold">
            Register Now!
          </div>
          <img src="https://placehold.co/470x280" alt="" />
          <HubspotFormBare :formId="claim101.hubspot_form_id"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import HubspotFormBare from "@/components/HubspotFormBare.vue";
import { ref } from "vue";
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
    { hour12: true }
  );
};
</script>

<style lang="postcss" scoped>
.box {
  @apply py-6 px-8;
  @apply text-black;
  @apply rounded-lg bg-white shadow-lg;
}
</style>
