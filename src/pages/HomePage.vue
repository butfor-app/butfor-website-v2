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
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style lang="postcss" scoped>
#app_wrapper {
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
}
</style>
