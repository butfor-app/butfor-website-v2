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
    default: "8c611917-1ea7-4d3f-8d7e-8f50d5706ef2",
  },
});
</script>
