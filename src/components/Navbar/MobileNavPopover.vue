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
          Product
          <arrow :class="{ 'rotate-90': open, 'rotate-90': !open }"> </arrow>
        </DisclosureButton>
        <DisclosurePanel>
          <div class="col w-[200px]">
            <div class="heading">OVERVIEW</div>
            <div class="h-full flex flex-col justify-around">
              <div class="pb-4">Get to know the <br />Butfor platform</div>
              <button
                class="w-[78px] h-[28px] text-xs bg-[#598392] text-white font-aneklatin rounded-lg"
              >
                Learn More
              </button>
            </div>
          </div>
          <div class="col">
            <div class="heading">PREVIEW</div>
            <div class="content">
              <a href="#" class="menu_row">
                <div class="img">
                  <img src="@/assets/icons/manage_accounts.png" alt="" />
                </div>
                <div class="name">Natural Disasters</div>
              </a>
              <a href="#" class="menu_row">
                <div class="img">
                  <img src="@/assets/icons/bar_chart_4_bars.png" alt="" />
                </div>
                <div class="name">Fire or Explosion</div>
              </a>
              <a href="#" class="menu_row">
                <div class="img">
                  <img src="@/assets/icons/done.png" alt="" />
                </div>
                <div class="name">Equipment Breakdown</div>
              </a>
              <a href="#" class="menu_row">
                <div class="img">
                  <img src="@/assets/icons/edit_document.png" alt="" />
                </div>
                <div class="name">Power Outages</div>
              </a>
              <button class="more_types">See More Claim Types</button>
            </div>
          </div>
          <div class="col">
            <div class="heading" style="visibility: hidden">.</div>
            <div class="content">
              <a href="#" class="menu_row">
                <div class="img">
                  <img src="@/assets/icons/magic_button.png" alt="" />
                </div>
                <div class="name">Enterprise</div>
              </a>
              <a href="#" class="menu_row">
                <div class="img">
                  <img src="@/assets/icons/handshake.png" alt="" />
                </div>
                <div class="name">Insurance Companies</div>
              </a>
              <a href="#" class="menu_row">
                <div class="img">
                  <img src="@/assets/icons/lock.png" alt="" />
                </div>
                <div class="name">Claim Consultants</div>
              </a>
              <a href="#" class="menu_row">
                <div class="img">
                  <img src="@/assets/icons/database.png" alt="" />
                </div>
                <div class="name">Insurance Brokers</div>
              </a>
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
              <a href="#" class="menu_row">
                <div class="img">
                  <img src="@/assets/icons/help.png" alt="" />
                </div>
                <div class="name">FAQs</div>
              </a>
              <a href="#" class="menu_row">
                <div class="img">
                  <img src="@/assets/icons/quick_reference.svg" alt="" />
                </div>
                <div class="name">Claims 101</div>
              </a>
              <a href="#" class="menu_row">
                <div class="img">
                  <img src="@/assets/icons/edit_note.png" alt="" />
                </div>
                <div class="name">Blogs</div>
              </a>
              <a href="#" class="menu_row">
                <div class="img">
                  <img src="@/assets/icons/menu_book.png" alt="" />
                </div>
                <div class="name">Case Studies</div>
              </a>
              <a href="#" class="menu_row">
                <div class="img">
                  <img src="@/assets/icons/hub.png" alt="" />
                </div>
                <div class="name">Claims Resource Hub</div>
              </a>
              <a href="#" class="menu_row">
                <div class="img">
                  <img src="@/assets/icons/live_tv.png" alt="" />
                </div>
                <div class="name">Webinars</div>
              </a>
              <a href="#" class="menu_row">
                <div class="img">
                  <img src="@/assets/icons/call.png" alt="" />
                </div>
                <div class="name">Contact Us</div>
              </a>
              <a href="#" class="menu_row">
                <div class="img">
                  <img src="@/assets/icons/handshake.png" alt="" />
                </div>
                <div class="name">Partnership</div>
              </a>
            </div>
          </div>
        </DisclosurePanel>
      </Disclosure>
    </div>
    <div class="popover_item">
      <button>Integrations</button>
    </div>
  </div>
</template>
<style lang="postcss" scoped>
#popover {
  @apply w-screen bg-white !p-0;
  @apply z-10 flex flex-col gap-y-0;
  @apply absolute top-18 right-0;
  > .popover_item {
    @apply w-full;
    > button {
      @apply w-full h-16 flex justify-between items-center;
      @apply px-8 bg-primary text-white;
      @apply cursor-pointer;
      > img {
        @apply fill-white;
      }
    }
    > div {
      @apply border border-blue-600;
      @apply p-2 px-8;
      @apply flex flex-wrap gap-y-2 justify-between;

      > .col {
        @apply flex flex-col;
        @apply w-40;
        > .heading {
          @apply text-base text-primaryDark font-medium;
          @apply mb-2;
        }
        > .content {
          @apply flex flex-col gap-y-2;
          > .more_types {
            @apply text-sm font-aneklatin font-medium bg-primary text-white rounded-xl;
            @apply px-4 py-1;
          }
          > .menu_row {
            @apply flex items-center justify-start;
            > .img {
              > img {
                @apply w-6 h-6;
              }
              /* > svg {
                          @apply w-6 h-6;
                        } */
            }
            > .name {
              @apply text-sm text-primary font-aneklatin;
            }
          }
        }
      }
    }
  }
}
</style>
