<template>
  <div
    id="contact_form"
    class="py-16 bg-[url('@/assets/images/contact-hero-bg.png')] bg-no-repeat bg-cover bg-center"
  >
    <div
      class="max-w-2xl w-4/5 md:w-1/2 mx-auto px-12 py-12 bg-white rounded-2xl"
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
  hbspt.forms.create({
    region: "na1",
    portalId: "39510047",
    formId: props.formId,
    target: "#hubspotForm",
  });
});
</script>
<style lang="postcss"></style>
