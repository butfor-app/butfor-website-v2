<template>
  <template v-if="!webinar_id || webinar == null">
    <div
      class="text-center py-20 font-medium text-xl flex items-center flex-col gap-4"
    >
      <div>
        Webinar does not exist. <br />
        Please check the URL or try searching for the webinar
      </div>
      <RouterLink
        to="/webinars"
        class="text-sm px-2 w-full max-w-xs py-1 bg-primary text-white rounded"
        >Go back to webinars</RouterLink
      >
    </div>
  </template>
  <template v-else>
    <div
      class="w-full py-10 flex flex-col items-center"
      v-if="Object.keys(webinar).length == 0"
    >
      <!-- Loading... -->
      <Spinner />
    </div>
    <div v-else class="bg-primary px-4">
      <div class="max-w-[1050px] mx-auto py-10 text-white">
        <div class="flex">
          <div class="w-[60%] pr-10 flex flex-col gap-y-8">
            <div class="flex items-center gap-x-2">
              <img src="@/assets/icons/webinar.svg" width="30" alt="" /> Webinar
            </div>
            <div class="text-5xl font-semibold font-aneklatin">
              {{ webinar.attributes.title }}
            </div>
            <div class="flex items-center gap-x-2">
              <img src="@/assets/icons/clock.svg" width="30" alt="" />
              {{ getTime(webinar.attributes.start_time) }}
            </div>
            <div class="text-xl">{{ webinar.attributes.description }}</div>
          </div>
          <div
            class="w-[40%] flex flex-col gap-y-4 bg-white rounded-lg px-4 py-8"
          >
            <div class="text-3xl text-center text-black font-semibold">
              Register Now!
            </div>
            <img
              class="mx-auto h-72 w-full rounded-lg object-contain"
              :src="getImage()"
              alt=""
            />
            <HubspotFormBare :formId="webinar?.form_id" />
          </div>
        </div>
      </div>
    </div>
  </template>
</template>

<script setup>
import HubspotFormBare from "@/components/HubspotFormBare.vue";
import Spinner from "@/components/General/Spinner.vue";

import { ref } from "vue";
import { useRoute } from "vue-router";
import useStrapi from "@/composables/useStrapi";
const route = useRoute();
const webinar = ref({});

const { getWebinar, getImageUrl } = useStrapi();

const webinar_id = route.params.webinar_id;
console.log(webinar_id);

getWebinar(webinar_id).then((resp) => {
  // console.log(resp);
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
    { hour12: true }
  );
};
</script>

<style lang="scss" scoped></style>
