<template>
  <div id="footer">
    <div id="wrapper">
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
            <a href="">Help</a>
            <a href="#">Claims 101</a>
            <a href="#">Blogs</a>
            <a href="#">Case Studies</a>

            <a href="#" class="lg:hidden">Claims Hub</a>
            <a href="#" class="hidden lg:block">Claims Resource Hub</a>
          </div>
          <div class="link_block">
            <a href="#">Jobs</a>
            <a href="#">Webinars</a>
            <a href="#" class="lg:hidden">Security/<br />Compliance</a>
            <a href="#" class="hidden lg:block">Security/Compliance</a>
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
  </div>
</template>
<script setup></script>
<style lang="postcss" scoped>
#footer {
  @apply bg-black px-4 py-10;
  @apply text-white flex flex-col items-center justify-between;
  @apply w-full;
  @screen lg {
    @apply min-h-[480px] px-[60px] py-20;
  }
  #wrapper {
    @apply max-w-[1200px];
    > #top {
      @apply flex flex-col items-start gap-y-10 w-full pb-11;
      @apply border-b-2 border-[#5F5F5F];
      @screen sm {
        @apply flex-row gap-x-8;
      }
      @screen md {
        @apply gap-x-16;
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
        @apply h-full w-full flex items-start justify-around;
        @screen lg {
          @apply items-start justify-between gap-x-16 flex-nowrap;
        }
        > .link_block {
          @apply flex flex-col items-start justify-start gap-y-2;
          @apply text-white text-sm font-aneklatin;
          @screen lg {
            @apply gap-y-2 text-base;
          }
          > :nth-child(1) {
            @apply font-bold;
          }
          > a {
            @apply w-20 bg-[#000000] hover:bg-[#111111];
            @screen md {
              @apply w-full p-2 pl-4 rounded-md text-base;
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
          @apply m-0 w-auto justify-normal gap-x-8;
        }
        > a {
          @apply p-2 rounded-md bg-[#000000] hover:bg-[#111111];
        }
      }
    }
  }
}
</style>
