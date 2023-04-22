<template>
  <div id="solution_card">
    <div id="icon">icon</div>
    <div id="heading">Heading</div>
    <div id="desc">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard.
    </div>
  </div>
</template>
<script></script>
<style lang="postcss" scoped>
#solution_card {
  @apply h-[276px] w-[314px] bg-primary px-7 pt-10 pb-7 cursor-grab;
  @apply flex flex-col items-center justify-center gap-y-4;
  @apply rounded-2xl;
  @apply shadow-lg text-white font-aneklatin;
  @screen lg {
    @apply h-[276px] w-[414px];
  }
  > #icon {
    @apply text-primaryLight;
  }
  > #heading {
    @apply text-[32px] font-bold;
  }
  > #desc {
    @apply text-xl font-medium text-center;
  }
}
</style>
