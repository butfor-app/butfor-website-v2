<template>
  <div id="footer">
    <div id="top">
      <div id="left">
        <img id="logo" src="@/assets/BFlogo.png" alt="" />
        <div id="desc">
          Tueri is a software tool designed to automate the process of filing
          business interruption insurance claims. It uses advanced algorithms
          and machine learning technology to calculate your losses and provide
          comprehensive reports in minutes.
        </div>
        <div id="social_media">
          <a href="#"><img src="@/assets/icons/facebook.png" alt="" /></a>
          <a href="#"><img src="@/assets/icons/twiter.png" alt="" /></a>
          <a href="#"><img src="@/assets/icons/instagram.png" alt="" /></a>
        </div>
      </div>
      <div id="right">
        <div class="link_block">
          <a href="#">Help</a>
          <a href="#">Claims 101</a>
          <a href="#">Blogs</a>
          <a href="#">Case Studies</a>
          <a href="#">Claims Resource Hub</a>
        </div>
        <div class="link_block">
          <a href="#">Jobs</a>
          <a href="#">Webinars</a>
          <a href="#">Security/Compliance</a>
          <a href="#">Partnerships</a>
          <a href="#">Contact Us</a>
        </div>
        <div class="link_block">
          <a href="#">Pricing</a>
          <a href="#">Butfor vs Competitor 1</a>
          <a href="#">Butfor vs Competitor 2</a>
          <a href="#">Butfor vs Competitor 3</a>
        </div>
        <div class="link_block">
          <a href="#">View Demo</a>
          <a href="#">Schedule Demo</a>
        </div>
      </div>
    </div>
    <div id="bottom">
      <div>©2023 Tueri. All rights reserved</div>
      <div id="privacy_terms">
        <a href="#">Privacy & Policy</a>
        <a href="#">Terms & Condition</a>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style lang="postcss" scoped>
#footer {
  @apply h-[480px] bg-black px-[60px] py-20;
  @apply text-white flex flex-col items-center justify-between;
  @apply w-full;
  > #top {
    @apply flex items-center gap-x-16 w-full pb-11;
    @apply border-b-2 border-[#5F5F5F];
    > #left {
      @apply w-[460px] flex flex-col items-start justify-start gap-y-6;

      > #logo {
        @apply h-14;
      }
      > #desc {
        @apply font-medium font-aneklatin;
      }
      > #social_media {
        @apply flex items-center gap-x-5;
        > img {
          @apply h-6;
        }
      }
    }
    > #right {
      @apply h-full flex items-center gap-x-16;
      > .link_block {
        @apply h-full flex flex-col items-start justify-start gap-y-6;
        > a {
          @apply text-white  font-aneklatin;
        }
      }
    }
  }
  > #bottom {
    @apply w-full py-9 flex justify-between items-center;
    > #privacy_terms {
      @apply flex justify-center items-center gap-x-8;
    }
  }
}
</style>
