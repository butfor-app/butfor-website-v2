<template>
  <div id="footer">
    <div id="top">
      <div id="about">
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
      <div id="links">
        <div class="link_block">
          <div id="heading">Help</div>
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
  /* @apply hidden; */
  @apply bg-black px-4 py-10;
  @apply text-white flex flex-col items-center justify-between;
  @apply w-full;
  @screen lg {
    @apply min-h-[480px] px-[60px] py-20;
  }
  > #top {
    @apply flex flex-col items-start gap-y-10 w-full pb-11;
    @apply border-b-2 border-[#5F5F5F];
    @screen lg {
      @apply flex-row items-center gap-x-16;
    }
    > #about {
      @apply flex flex-col items-start justify-start gap-y-6;
      @screen lg {
        @apply w-[460px];
      }
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
    > #links {
      @apply h-full w-full flex items-start justify-around flex-wrap gap-y-4;
      @screen lg {
        @apply items-center gap-x-16 flex-nowrap;
      }
      > .link_block {
        @apply h-full flex flex-col items-start justify-start gap-y-2;
        @apply text-white text-sm font-aneklatin;
        @screen lg {
          @apply gap-y-6 text-base;
        }
        > :nth-child(1) {
          @apply font-bold;
        }
        > a {
          @screen lg {
            @apply text-base;
          }
        }
      }
    }
  }
  > #bottom {
    @apply w-full py-9 flex flex-col justify-between items-center;
    @screen lg {
      @apply flex-row;
    }
    > #privacy_terms {
      @apply mt-4 w-full flex justify-between  items-center;
      @screen lg {
        @apply m-0 gap-x-8;
      }
    }
  }
}
</style>
