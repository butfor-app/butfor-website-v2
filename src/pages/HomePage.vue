<template>
  <div id="app_wrapper">
    <div id="navbar">
      <div id="navbar_top">
        <div>
          <button>New</button>
          <div id="msg">
            Automate your California Pay Report with Pequity by March 27 >
          </div>
        </div>
        <div>
          <button id="contact">Contact Sales</button>
          <button id="login">Login</button>
        </div>
      </div>
      <div id="navbar_bottom">
        <div id="left">
          <img id="logo" src="@/assets/BFlogo.png" alt="logo" />
          <div id="popover_group_wrapper">
            <div>Solutions <img src="@/assets/icons/arrow.svg" alt="" /></div>
            <div>Product <img src="@/assets/icons/arrow.svg" alt="" /></div>
            <div>Resources <img src="@/assets/icons/arrow.svg" alt="" /></div>
            <div>
              Integrations <img src="@/assets/icons/arrow.svg" alt="" />
            </div>
          </div>
        </div>
        <button>Book Demo</button>
      </div>
    </div>
    <div id="heading">
      <div id="bg">
        <img src="@/assets/images/laptop.png" alt="" />
      </div>
      <div id="gradient"></div>
      <div id="content">
        <div id="heading">SIMPLIFYING COMPLEX CLAIMS</div>
        <div id="subheading">
          Tueri automates business interruption insurance claims.<br />
          Calculate your losses & build comprehensive reports in a fraction of
          the time.
        </div>
        <div id="buttons">
          <button id="productVid">See Product Video</button>
          <button id="demo">Book Demo</button>
        </div>
      </div>
    </div>
    <div id="clients">
      <div id="heading">Solving compensation for leading brands</div>
      <CompaniesSlider />
    </div>
  </div>
</template>

<script setup>
import CompaniesSlider from "@/components/CompaniesSlider.vue";
</script>

<style lang="postcss" scoped>
#app_wrapper {
  @apply w-[1440px] mx-auto;
  > #navbar {
    > #navbar_top {
      @apply px-18 h-18 bg-primaryDark;
      @apply flex items-center justify-between;
      > :nth-child(1) {
        @apply flex items-center;
        > button {
          @apply h-8 bg-white text-black px-4 rounded-2xl;
          @apply cursor-pointer;
        }
        > #msg {
          @apply text-white;
          @apply px-4;
          @apply cursor-pointer;
        }
      }
      > :nth-child(2) {
        @apply flex items-center gap-x-12;
        > button {
          @apply text-white;
          @apply px-4;
          @apply cursor-pointer;
        }
      }
    }
    > #navbar_bottom {
      @apply h-24 px-18;
      @apply flex items-center justify-between;
      > #left {
        @apply flex items-center justify-start gap-x-12;
        > #logo {
          @apply h-14;
        }
        > #popover_group_wrapper {
          @apply flex items-center gap-x-12;
          > div {
            @apply text-primary font-medium;
            @apply cursor-pointer flex items-center gap-x-2;
            > img {
              @apply h-2 w-4;
            }
          }
        }
      }
      > button {
        @apply h-10 bg-primary text-white text-sm font-medium px-4 rounded-md;
        @apply cursor-pointer;
      }
    }
  }
  > #heading {
    @apply relative w-full h-[690px] pt-56 px-[360px];
    > #bg {
      @apply h-96 -z-20 bg-primary absolute top-0 left-0;
      > img {
        @apply h-[690px];
      }
    }
    > #gradient {
      @apply h-full w-full -z-10 absolute top-0 left-0;
      @apply bg-gradient-to-t from-primary to-primaryDark opacity-60;
    }
    > #content {
      @apply w-full h-full;
      @apply flex items-center justify-center flex-col;
      > #heading {
        @apply text-[46px] text-center font-extrabold text-white;
      }
      > #subheading {
        @apply text-white text-center;
        @apply px-2 mt-6 mb-9;
        @apply font-medium;
      }
      > #buttons {
        @apply flex items-center gap-x-8;

        > button {
          @apply h-11 w-[168px] font-medium rounded-full;
          @apply cursor-pointer px-6 py-2;
        }
        > #productVid {
          @apply bg-primary text-white;
        }
        > #demo {
          @apply bg-white text-primary;
        }
      }
    }
  }
  > #clients {
    @apply h-[260px] py-16;
    > #heading {
      @apply text-black text-center font-semibold text-2xl mb-9;
    }
  }
}
</style>
