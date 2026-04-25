<template>
  <ButForForm :formId="formId" :title="title" pageName="Contact / Demo" />
</template>
<script setup>
import ButForForm from "@/components/ButForForm.vue";

const props = defineProps({
  title: {
    type: String,
    default: "LET'S GO",
  },
  formId: {
    type: String,
    // required: true,
    default: "32e9d6a5-21fe-49b1-af99-0b06119c032d",
  },
});
</script>
