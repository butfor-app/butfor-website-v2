<template>
  <div id="footer">
    <div id="wrapper">
      <div id="top">
        <div id="about">
          <img id="logo" src="@/assets/BFlogo.svg" alt="" />
          <div id="desc">
            Butfor is a software tool designed to automate the process of filing
            business interruption insurance claims. It uses advanced algorithms
            and machine learning technology to calculate your losses and provide
            comprehensive reports in minutes. Use our claim tool or purchase
            subscription coverage for claim prep at a fraction of the cost
            today.
          </div>
          <div id="social_media">
            <a href="https://www.linkedin.com/company/butfor"
              ><img src="@/assets/icons/linkedin.png" alt=""
            /></a>
            <a href="https://www.twitter.com/butforco"
              ><img src="@/assets/icons/twiter.png" alt=""
            /></a>
            <a href="https://www.linkedin.com/company/butfor"
              ><img src="@/assets/icons/youtube.png" alt=""
            /></a>
          </div>
        </div>
        <div id="links">
          <div class="link_block">
            <RouterLink to="/?faq=true">FAQs</RouterLink>
            <a href="https://butfor.co/claims-101">Claims 101</a>
            <RouterLink to="/articles">Articles</RouterLink>
            <a href="https://butfor.co/case-studies">Case Studies</a>

            <a href="https://www.butfor.co/policy-analyzer">Policy Analyzer</a>
            <a href="https://www.butfor.co/subscription"
              >Claim Prep Subscription</a
            >
          </div>
          <div class="link_block">
            <a href="/contact4">Jobs</a>
            <!-- <a href="#">Webinars</a> -->
            <RouterLink to="/webinars">Webinars</RouterLink>
            <a href="https://butfor.co/privacy-policy" class="lg:hidden"
              >Security/<br />Compliance</a
            >
            <a href="https://butfor.co/privacy-policy" class="hidden lg:block"
              >Security/Compliance</a
            >
            <a href="/contact4">Partnerships</a>
            <a href="/contact4">Contact Us</a>
          </div>
          <div class="link_block">
            <a href="https://www.butfor.co/pricing">Pricing</a>
            <RouterLink to="/butfor-vs-consultants">
              Butfor vs Consultants
            </RouterLink>
            <RouterLink to="/butfor-vs-excel"> Butfor vs Excel </RouterLink>
            <RouterLink to="/butfor-vs-internal">
              Butfor vs Internal Org Claim Prep
            </RouterLink>
          </div>
          <div class="link_block">
            <a href="/contact5">View Demo</a>
            <a href="/contact5">Schedule Demo</a>
          </div>
        </div>
      </div>
      <div id="bottom">
        <div>©2024 Butfor. All rights reserved</div>
        <div id="privacy_terms">
          <a href="https://butfor.co/privacy-policy">Privacy Policy</a>
          <a href="https://butfor.co/terms-and-conditions"
            >Terms & Conditions</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { RouterLink } from "vue-router";
</script>
<style lang="postcss" scoped>
#footer {
  @apply bg-black px-4 py-10;
  @apply flex flex-col items-center justify-between text-white;
  @apply w-full;
  @screen lg {
    @apply min-h-[480px] px-0 py-20;
  }
  #wrapper {
    @apply w-full max-w-[1200px];
    @screen lg {
      @apply px-18;
    }
    > #top {
      @apply flex w-full flex-col items-start gap-y-10 pb-11;
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
          @apply font-aneklatin font-medium;
        }
        > #social_media {
          @apply flex items-center gap-x-5;
          > img {
            @apply h-6;
          }
        }
      }
      > #links {
        @apply flex h-full w-full items-start justify-between;
        @screen lg {
          @apply flex-nowrap items-start justify-between;
        }
        > .link_block {
          @apply flex flex-col items-start justify-start gap-y-2;
          @apply font-aneklatin text-sm text-white;
          @screen lg {
            @apply gap-y-2 text-base;
          }
          > :nth-child(1) {
            @apply font-bold;
          }
          > a {
            @apply w-20 bg-[#000000] hover:bg-[#111111];
            @screen md {
              @apply w-full rounded-md p-2 pl-4 text-base;
            }
          }
        }
      }
    }
    > #bottom {
      @apply flex w-full flex-col items-center justify-between py-9;
      @screen lg {
        @apply flex-row;
      }
      > #privacy_terms {
        @apply mt-4 flex w-full items-center justify-between;
        @screen lg {
          @apply m-0 w-auto justify-normal gap-x-8;
        }
        > a {
          @apply rounded-md bg-[#000000] p-2 hover:bg-[#111111];
        }
      }
    }
  }
}
</style>
