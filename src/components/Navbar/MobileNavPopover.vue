<template>
  <div id="popover" v-if="open" v-on-click-outside="close">
    <div class="popover_item">
      <Disclosure v-slot="{ open }">
        <DisclosureButton>
          Solutions
          <arrow :class="{ 'rotate-90': open, 'rotate-90': !open }"> </arrow>
        </DisclosureButton>
        <DisclosurePanel>
          <div class="col">
            <div class="heading">BY CLAIM TYPE</div>
            <div class="content">
              <RouterLink
                v-for="solution in solutionLinks.claim"
                :to="solution.link"
                class="menu_row"
              >
                <div class="img">
                  <img :src="solution.icon" alt="" />
                </div>
                <div class="name">{{ solution.name }}</div>
              </RouterLink>
            </div>
          </div>
          <div class="col">
            <div class="heading">BY COMPANY TYPE</div>
            <div class="content">
              <RouterLink
                v-for="solution in solutionLinks.company"
                :to="solution.link"
                class="menu_row"
              >
                <div class="img">
                  <img :src="solution.icon" alt="" />
                </div>
                <div class="name">{{ solution.name }}</div>
              </RouterLink>
            </div>
          </div>
          <div class="col">
            <div class="heading">BY ROLE</div>
            <div class="content">
              <RouterLink
                v-for="solution in solutionLinks.role"
                :to="solution.link"
                class="menu_row"
              >
                <div class="img">
                  <img :src="solution.icon" alt="" />
                </div>
                <div class="name">{{ solution.name }}</div>
              </RouterLink>
            </div>
          </div>
        </DisclosurePanel>
      </Disclosure>
    </div>

    <div class="popover_item">
      <Disclosure v-slot="{ open }">
        <DisclosureButton>
          Products
          <arrow :class="{ 'rotate-90': open, 'rotate-90': !open }"> </arrow>
        </DisclosureButton>
        <DisclosurePanel>
          <div class="col w-[200px]">
            <div class="heading">OVERVIEW</div>
            <div class="flex h-full flex-col justify-around">
              <div class="pb-4">Get to know the <br />Butfor platform</div>
              <button
                class="h-[28px] w-[78px] rounded-lg bg-[#598392] font-aneklatin text-xs text-white"
              >
                Learn More
              </button>
            </div>
          </div>
          <div class="col">
            <div class="heading">PREVIEW</div>
            <div class="content">
              <RouterLink to="/product/?feature=1" class="menu_row">
                <div class="img">
                  <img src="@/assets/icons/manage_accounts.png" alt="" />
                </div>
                <div class="name">Customer & Claim Management</div>
              </RouterLink>
              <RouterLink
                to="/product/?feature=2"
                class="menu_row"
                @click="close"
              >
                <div class="img">
                  <img src="@/assets/icons/bar_chart_4_bars.png" alt="" />
                </div>
                <div class="name">Reporting & Analytics</div>
              </RouterLink>
              <RouterLink
                to="/product/?feature=3"
                class="menu_row"
                @click="close"
              >
                <div class="img">
                  <img src="@/assets/icons/done.png" alt="" />
                </div>
                <div class="name">Approval Chains</div>
              </RouterLink>
              <RouterLink
                to="/product/?feature=4"
                class="menu_row"
                @click="close"
              >
                <div class="img">
                  <img src="@/assets/icons/edit_document.png" alt="" />
                </div>
                <div class="name">Claims Customization</div>
              </RouterLink>

              <RouterLink
                to="/product/?feature=5"
                class="menu_row"
                @click="close"
              >
                <div class="img">
                  <img src="@/assets/icons/magic_button.png" alt="" />
                </div>
                <div class="name">Find the Best Baseline</div>
              </RouterLink>
              <RouterLink
                to="/product/?feature=6"
                class="menu_row"
                @click="close"
              >
                <div class="img">
                  <img src="@/assets/icons/handshake.png" alt="" />
                </div>
                <div class="name">Collaboration</div>
              </RouterLink>
              <RouterLink
                to="/product/?feature=7"
                class="menu_row"
                @click="close"
              >
                <div class="img">
                  <img src="@/assets/icons/lock.png" alt="" />
                </div>
                <div class="name">Centralized & Secure</div>
              </RouterLink>
              <RouterLink
                to="/product/?feature=8"
                class="menu_row"
                @click="close"
              >
                <div class="img">
                  <img src="@/assets/icons/database.png" alt="" />
                </div>
                <div class="name">Data Standardization</div>
              </RouterLink>
            </div>
          </div>
        </DisclosurePanel>
      </Disclosure>
    </div>
    <div class="popover_item">
      <Disclosure v-slot="{ open }">
        <DisclosureButton>
          Resources
          <arrow :class="{ 'rotate-90': open, 'rotate-90': !open }"> </arrow
        ></DisclosureButton>
        <DisclosurePanel>
          <div class="col">
            <div class="content">
              <RouterLink
                v-for="resourcesLink in resourcesLinks"
                :to="resourcesLink.link"
                class="menu_row"
              >
                <div class="img">
                  <img :src="resourcesLink.icon" alt="" />
                </div>
                <div class="name">{{ resourcesLink.name }}</div>
              </RouterLink>
            </div>
          </div>
        </DisclosurePanel>
      </Disclosure>
    </div>
    <div class="popover_item">
      <button>
        <RouterLink to="/integrations"> Integrations </RouterLink>
      </button>
    </div>
  </div>
</template>
<script setup>
import {
  Menu,
  MenuButton,
  MenuItems,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  MenuItem,
} from "@headlessui/vue";
import { vOnClickOutside } from "@vueuse/components";
import arrow from "@/components/icons/arrow.vue";
import { RouterLink } from "vue-router";

const props = defineProps({
  open: Boolean,
  solutionLinks: Object,
  resourcesLinks: Object,
});
const $emit = defineEmits(["close"]);
const close = () => {
  $emit("close");
};
</script>

<style lang="postcss" scoped>
#popover {
  @apply w-screen bg-white !p-0;
  @apply z-30 flex flex-col gap-y-0;
  @apply absolute right-0 top-18;
  > .popover_item {
    @apply w-full;
    > button {
      @apply flex h-16 w-full items-center justify-between;
      @apply bg-primary px-8 text-white;
      @apply cursor-pointer;
      > img {
        @apply fill-white;
      }
    }
    > div {
      @apply border border-blue-600;
      @apply p-2 px-8;
      @apply flex flex-wrap justify-between gap-y-2;

      > .col {
        @apply flex flex-col;
        @apply w-40;
        > .heading {
          @apply text-base font-medium text-primaryDark;
          @apply mb-2;
        }
        > .content {
          @apply flex flex-col gap-y-2;
          > .more_types {
            @apply rounded-xl bg-primary font-aneklatin text-sm font-medium text-white;
            @apply px-4 py-1;
          }
          > .menu_row {
            @apply flex items-center justify-start gap-1;
            > .img {
              @apply h-6 w-6;
              > img {
                @apply h-full w-full;
              }
            }
            > .name {
              @apply font-aneklatin text-sm text-primary;
            }
          }
        }
      }
    }
  }
}
</style>
