<template>
  <div id="get_started">
    <div id="heading" class="">Ready to get started?</div>
    <div id="buttons">
      <a href="#" id="demo_btn">View Demo</a>
      <a href="#" id="speak_btn">Speak to our team</a>
    </div>
  </div>
</template>
<script setup></script>
<style lang="postcss" scoped>
#get_started {
  @apply h-96 flex flex-col items-center justify-center;
  @apply bg-[url('@/assets/images/solutions-get-started.png')] bg-no-repeat	bg-cover  bg-top;
  > #heading {
    @apply text-[46px] text-white font-extrabold text-center;
    @apply mb-10;
  }
  > #buttons {
    @apply flex gap-x-4;
    > a {
      @apply w-[160px] h-12 flex items-center justify-center text-center font-semibold font-aneklatin;
    }
    > #demo_btn {
      @apply bg-primary text-white rounded-3xl cursor-pointer;
      @apply mr-4;
    }
    > #speak_btn {
      @apply bg-white text-primary rounded-3xl cursor-pointer;
    }
  }
}
</style>
