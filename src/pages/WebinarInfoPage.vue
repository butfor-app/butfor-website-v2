<template>
  <template v-if="!webinar_id || webinar == null">
    <div
      class="flex flex-col items-center gap-4 py-20 text-center text-xl font-medium"
    >
      <div>
        Webinar does not exist. <br />
        Please check the URL or try searching for the webinar
      </div>
      <RouterLink
        to="/webinars"
        class="w-full max-w-xs rounded bg-primary px-2 py-1 text-sm text-white"
        >Go back to webinars</RouterLink
      >
    </div>
  </template>
  <template v-else>
    <div
      class="flex w-full flex-col items-center py-10"
      v-if="Object.keys(webinar).length == 0"
    >
      <!-- Loading... -->
      <Spinner />
    </div>
    <div v-else class="bg-primary px-4">
      <div class="mx-auto max-w-[1050px] py-10 text-white">
        <div class="flex flex-col gap-y-10 lg:flex-row">
          <div class="flex flex-col gap-y-8 pr-10 lg:w-[60%]">
            <div class="flex items-center gap-x-2">
              <img src="@/assets/icons/webinar.svg" width="30" alt="" /> Webinar
            </div>
            <div class="font-aneklatin text-5xl font-semibold">
              {{ webinar.attributes.title }}
            </div>
            <div class="flex items-center gap-x-2">
              <img src="@/assets/icons/clock.svg" width="30" alt="" />
              {{ getTime(webinar.attributes.start_time) }} -
              {{ webinar.attributes.timezone }}
            </div>
            <div class="text-xl" v-html="webinar.attributes.body"></div>
          </div>
          <div
            class="flex flex-col gap-y-4 rounded-lg bg-white px-4 py-8 lg:w-[40%]"
          >
            <div class="text-center text-3xl font-semibold text-black">
              Register Now!
            </div>
            <img
              class="mx-auto h-72 w-full rounded-lg object-contain"
              :src="getImage()"
              alt=""
            />
            <ButForForm formId="32e9d6a5-21fe-49b1-af99-0b06119c032d" pageName="Webinar" />
          </div>
        </div>
      </div>
    </div>
  </template>
</template>

<script setup>
import ButForForm from "@/components/ButForForm.vue";
import Spinner from "@/components/General/Spinner.vue";

import { ref } from "vue";
import { useRoute } from "vue-router";
import useStrapi from "@/composables/useStrapi";
import { useHead } from "@vueuse/head";
const route = useRoute();
const webinar = ref({});

const { getWebinar, getImageUrl } = useStrapi();
const webinar_id = route.params.webinar_id;
// console.log(webinar_id);

getWebinar(webinar_id).then((resp) => {
  console.log(resp);

  if (resp.attributes.meta_tags?.title) {
    useHead({
      title: resp.attributes.meta_tags.title,
    });
  }
  if (resp.attributes.meta_tags?.description) {
    useHead({
      meta: [
        {
          name: "description",
          content: resp.attributes.meta_tags.description,
        },
      ],
    });
  }

  webinar.value = resp;
});
const getImage = () => {
  if (webinar.value.attributes.thumbnail.data) {
    return getImageUrl(webinar.value.attributes.thumbnail.data.attributes.url);
  }
  return new URL("@/assets/images/event_1.png", import.meta.url).href;
};
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

<style lang="scss" scoped></style>
