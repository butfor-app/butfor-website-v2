<template>
  <div id="contact">
    <div id="wrapper">
      <div id="heading">LET'S GO</div>
      <form @submit="" action="">
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Phone" />
        <input
          type="text"
          placeholder="Personal Linkedin Profile URL (Optional)"
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  </div>
</template>
<script setup></script>
<style lang="postcss" scoped>
#contact {
  @apply py-24;
  @apply flex justify-center;
  @apply bg-[url('@/assets/images/contact-hero-bg.png')] bg-no-repeat	bg-cover bg-center;

  > #wrapper {
    @apply w-4/5 max-w-3xl py-12;
    @screen md {
      @apply w-1/2;
    }

    @apply bg-white shadow-lg rounded-2xl;
    > #heading {
      @apply text-[46px] text-primary font-extrabold text-center;
      @apply mb-12;
    }
    > form {
      @apply w-[90%] mx-auto;
      @apply flex flex-col items-center gap-y-4;

      @screen sm {
        @apply w-2/3 gap-y-6;
      }
      > input[type="text"] {
        @apply w-full h-12 px-6 py-[14px] font-medium;
        @apply border border-[#D9D9D9] rounded-xl;
      }
      > input[type="submit"] {
        @apply w-1/3 min-w-[130px] h-12 py-[14px] text-center font-medium;
        @apply bg-primary text-white rounded-3xl cursor-pointer;
      }
    }
  }
}
</style>
