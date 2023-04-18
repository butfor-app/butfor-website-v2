<template>
  <NavBar />
  <div id="hero_section">
    <img id="bg" src="@/assets/images/productpage_hero.png" alt="" />
    <div id="bg_gradient"></div>
    <div id="heading">Get to know the ButFor platform</div>
    <div id="sub_heading">
      Preparing a business interruption claim has never been easier.
    </div>
    <button>Learn More</button>
  </div>
  <div id="possibilities">
    <div id="header">What you can do with ButFor</div>
    <img src="@/assets/images/possibilities.png" alt="" />
    <!-- <div id="wrapper">
      <img src="@/assets/images/dotted_circle.png" alt="" id="circle" />
    </div> -->
  </div>
  <div id="trial">
    <img src="@/assets/images/trial.png" alt="" />
    <div id="wrapper">
      <div id="header">Try Butfor For free</div>
      <div id="desc">
        Learn the platform in less than an hour.<br />Become a power user in
        less than a day.
      </div>
      <div id="input_wrapper">
        <input type="text" placeholder="Enter your email" />
        <button>Start Trial</button>
      </div>
    </div>
  </div>
  <Footer />
</template>
<script setup>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
</script>
<style lang="postcss" scoped>
#hero_section {
  @apply flex flex-col items-center;
  @apply h-[690px] relative;
  @apply text-center px-72 py-60;
  > #bg {
    @apply absolute top-0 left-0 -z-20;
  }
  > #bg_gradient {
    @apply w-full h-full absolute top-0 left-0 -z-10 bg-gradient-to-b from-[#01161E90] to-[#59839290];
  }
  > #heading {
    @apply mb-10 text-[46px] font-extrabold text-white;
  }
  > #sub_heading {
    @apply mb-9 text-xl font-medium font-aneklatin text-white;
  }
  > button {
    @apply w-44 h-11 bg-white rounded-full;
    @apply text-primary  font-semibold font-aneklatin;
  }
}
#possibilities {
  @apply p-10 flex flex-col justify-center items-center;

  /* #wrapper {
    @apply w-[882px] h-[882px] relative;
    #circle {
      @apply absolute top-0 left-1/2 -z-10;
    }
  } */
  #header {
    @apply text-[46px] mb-10 pb-10 font-bold text-center;
  }
}
#trial {
  @apply h-[520px] px-18 py-32 relative bg-[#EFF3F5];
  > img {
    @apply absolute top-16 right-18;
  }
  > #wrapper {
    @apply w-1/2;
    > #header {
      @apply mb-9 text-[46px] font-bold;
    }
    > #desc {
      @apply mb-11 text-[28px] text-[#6D998F];
    }
    > #input_wrapper {
      @apply flex justify-start items-center;
      > input {
        @apply w-[500px] h-14 px-4 rounded-l-xl;
        @apply border-y-2 border-l-2 border-[#D9D9D9] text-[#D9D9D9];
        @apply font-medium font-aneklatin;
      }
      > button {
        @apply w-24 h-14 bg-[#6D998F] rounded-r-xl;
        @apply text-white  font-semibold font-aneklatin;
      }
    }
  }
}
</style>
