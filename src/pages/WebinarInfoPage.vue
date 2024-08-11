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
        <div class="flex">
          <div class="flex w-[60%] flex-col gap-y-8 pr-10">
            <div class="flex items-center gap-x-2">
              <img src="@/assets/icons/webinar.svg" width="30" alt="" /> Webinar
            </div>
            <div class="font-aneklatin text-5xl font-semibold">
              {{ webinar.attributes.title }}
            </div>
            <div class="flex items-center gap-x-2">
              <img src="@/assets/icons/clock.svg" width="30" alt="" />
              {{ getTime(webinar.attributes.start_time) }}
            </div>
            <div class="text-xl">{{ webinar.attributes.description }}</div>
          </div>
          <div
            class="flex w-[40%] flex-col gap-y-4 rounded-lg bg-white px-4 py-8"
          >
            <div class="text-center text-3xl font-semibold text-black">
              Register Now!
            </div>
            <img
              class="mx-auto h-72 w-full rounded-lg object-contain"
              :src="getImage()"
              alt=""
            />
            <HubspotFormBare
              :formId="
                webinar.attributes.hubspot_form_id
                  ? webinar.attributes.hubspot_form_id
                  : '83efaaa1-4ea3-4a48-b759-c2f345c5a1e3'
              "
            />
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
    { hour12: true },
  );
};
</script>

<style lang="scss" scoped></style>
