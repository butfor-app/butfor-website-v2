<template>
  <div
    id="contact_form"
    class="py-16 bg-[url('@/assets/images/contact-hero-bg.png')] bg-no-repeat bg-cover bg-center"
  >
    <div
      class="max-w-2xl w-[90%] md:w-1/2 mx-auto px-2 md:px-12 py-12 bg-white rounded-2xl"
    >
      <div class="mb-12 text-[46px] text-primary font-extrabold text-center">
        {{ title }}
      </div>
      <div id="hubspotForm" class="mx-auto w-[90%]"></div>
    </div>
  </div>
</template>
<script setup>
import { onMounted } from "vue";
const props = defineProps({
  title: {
    type: String,
    default: "LET'S GO",
  },
  formId: {
    type: String,
    required: true,
  },
});
onMounted(() => {
  const vidMatch = document.cookie.match(/(?:^|; )bf_vid=([^;]*)/);
  const visitorId = vidMatch ? decodeURIComponent(vidMatch[1]) : '';
  hbspt.forms.create({
    region: "na2",
    portalId: "245822077",
    formId: props.formId,
    target: "#hubspotForm",
    hiddenFieldValues: { visitor_id: visitorId },
  });
});
</script>
<style lang="postcss"></style>
