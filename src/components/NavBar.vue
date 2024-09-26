<template>
  <div id="navbar">
    <div id="navbar_top">
      <div>
        <div class="flex items-center">
          <div id="msg" class="block cursor-pointer px-4 text-white">
            <RouterLink to="/webinars/5" class="flex items-center gap-2">
              <button
                class="h-8 cursor-pointer rounded-2xl bg-white px-4 text-black"
              >
                Live
              </button>
              <p class="hidden lg:inline">
                CrowdStrike &amp; Business Interruption Fireside - Sept 26th,
                3pm EST
              </p>
            </RouterLink>
          </div>
        </div>
        <div>
          <RouterLink to="/contact" id="contact" class="!hidden lg:flex">
            Contact Sales
          </RouterLink>
          <RouterLink to="/book_demo">Contact Sales</RouterLink>
        </div>
      </div>
    </div>
    <div id="navbar_bottom">
      <div>
        <div id="left">
          <RouterLink to="/"
            ><img id="logo" src="@/assets/BFlogo.svg" alt="logo"
          /></RouterLink>
          <div id="popover_group_wrapper">
            <Menu
              as="div"
              class="relative inline-block text-left"
              v-slot="{ open, close }"
            >
              <MenuButton id="menu_button">
                Solutions
                <img src="@/assets/icons/arrow.svg" alt="" />
              </MenuButton>

              <transition
                enter-active-class="transition duration-100 ease-out"
                enter-from-class="transform scale-95 opacity-0"
                enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-75 ease-in"
                leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0"
              >
                <MenuItems
                  id="menu"
                  class="relative h-[350px] max-h-[calc(100vh_-_140px)] w-[660px] overflow-y-auto"
                  style="padding-bottom: 0"
                >
                  <div
                    class="absolute left-0 top-[65px] z-0 mx-6 w-[591px] border-b-2 border-gray-200"
                  ></div>
                  <div class="col">
                    <div class="heading">BY CLAIM TYPE</div>
                    <div class="content">
                      <RouterLink
                        v-for="solution in solutionLinks.claim"
                        :to="solution.link"
                        class="menu_row"
                        @click="close"
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
                        @click="close"
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
                        @click="close"
                      >
                        <div class="img">
                          <img :src="solution.icon" alt="" />
                        </div>
                        <div class="name">{{ solution.name }}</div>
                      </RouterLink>
                    </div>
                  </div>
                </MenuItems>
              </transition>
            </Menu>
            <Menu
              as="div"
              class="relative inline-block text-left"
              v-slot="{ open, close }"
            >
              <MenuButton id="menu_button">
                Products
                <img src="@/assets/icons/arrow.svg" alt="" />
              </MenuButton>

              <transition
                enter-active-class="transition duration-100 ease-out"
                enter-from-class="transform scale-95 opacity-0"
                enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-75 ease-in"
                leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0"
              >
                <MenuItems id="menu" class="h-[238px] w-[656px]">
                  <div
                    class="absolute left-0 top-[65px] z-0 mx-6 w-[608px] border-b-2 border-gray-200"
                  ></div>
                  <MenuItem as="div" class="col w-[150px]">
                    <div class="heading uppercase">Subscription</div>
                    <div class="flex h-full flex-col justify-around">
                      <div class="pb-4">
                        Most affordable claim prep coverage in the world
                      </div>
                      <RouterLink
                        to="/subscription"
                        class="flex w-fit items-center justify-center rounded-lg bg-[#598392] px-3 py-1 font-aneklatin text-xs text-white"
                        @click="close"
                      >
                        Subscription Details
                      </RouterLink>
                    </div>
                  </MenuItem>
                  <div class="col">
                    <div class="heading" style="visibility: hidden">.</div>
                    <div class="content">
                      <RouterLink
                        to="/product/?feature=1"
                        class="menu_row"
                        @click="close"
                      >
                        <div class="img">
                          <img
                            src="@/assets/icons/manage_accounts.png"
                            alt=""
                          />
                        </div>
                        <div class="name">Customer &amp; Claim Management</div>
                      </RouterLink>
                      <RouterLink
                        to="/product/?feature=2"
                        class="menu_row"
                        @click="close"
                      >
                        <div class="img">
                          <img
                            src="@/assets/icons/bar_chart_4_bars.png"
                            alt=""
                          />
                        </div>
                        <div class="name">Reporting &amp; Analytics</div>
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
                    </div>
                  </div>
                  <div class="col">
                    <div class="heading" style="visibility: hidden">.</div>
                    <div class="content">
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
                        <div class="name">Centralized &amp; Secure</div>
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
                </MenuItems>
              </transition>
            </Menu>
            <Menu
              as="div"
              class="relative inline-block text-left"
              v-slot="{ open, close }"
            >
              <MenuButton id="menu_button">
                Resources
                <img src="@/assets/icons/arrow.svg" alt="" />
              </MenuButton>

              <transition
                enter-active-class="transition duration-100 ease-out"
                enter-from-class="transform scale-95 opacity-0"
                enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-75 ease-in"
                leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0"
              >
                <MenuItems id="menu" class="w-[216px]">
                  <div class="col">
                    <div class="content">
                      <RouterLink
                        v-for="resource in resourcesLinks"
                        :to="resource.link"
                        class="menu_row"
                        @click="close"
                      >
                        <div class="img">
                          <img :src="resource.icon" alt="" />
                        </div>
                        <div class="name">{{ resource.name }}</div>
                      </RouterLink>
                    </div>
                  </div>
                </MenuItems>
              </transition>
            </Menu>
            <RouterLink
              to="/integrations"
              class="mr-1 flex h-full cursor-pointer items-center gap-x-2 border-none px-4 font-medium text-primary outline-none hover:bg-[#f3f3f3]"
              >Integrations</RouterLink
            >
          </div>
          <div id="mobile_popover_group_wrapper">
            <button
              aria-label="open menu"
              v-if="mobile_popover_open === false"
              @click="mobile_popover_open = true"
            >
              <img src="@/assets/icons/icon-menu.svg" alt="" />
            </button>
            <button
              v-if="mobile_popover_open === true"
              @click="mobile_popover_open = false"
            >
              <img src="@/assets/icons/cross.png" alt="" />
            </button>
            <MobileNavPopover
              @close="mobile_popover_open = false"
              :open="mobile_popover_open"
              :solutionLinks="solutionLinks"
              :resourcesLinks="resourcesLinks"
            />
          </div>
        </div>
        <RouterLink to="/book_demo">Book Demo</RouterLink>
      </div>
    </div>
  </div>
</template>
<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import MobileNavPopover from "@/components/Navbar/MobileNavPopover.vue";
import { ref, watch } from "vue";
import { RouterLink, useRoute } from "vue-router";
import { useGeneralData } from "@/stores/useGeneralData";
const generalData = useGeneralData();
const mobile_popover_open = ref(false);
const route = useRoute();
watch(
  () => route.path,
  (oldValue, newValue) => {
    console.log("Route changed", newValue);
    mobile_popover_open.value = false;
    // const
  },
);
// const handleHover = ($event, open) => {
//   if (!open) {
//     $event.target.click();
//   }
// };
// const handleLeave = ($event) => {
//   $event.target.children[0].click();
// };
const resourcesLinks = [
  {
    name: "FAQs",
    link: "/?faq=true",
    icon: new URL("/src/assets/icons/help.png", import.meta.url).href,
  },
  {
    name: "Claims 101",
    link: "/claims-101",
    icon: new URL("/src/assets/icons/quick_reference.svg", import.meta.url)
      .href,
  },
  {
    name: "Policy Analyzer",
    link: "/policy-analyzer",
    icon: new URL("/src/assets/icons/fact_check.svg", import.meta.url).href,
  },
  {
    name: "Articles",
    link: "/articles",
    icon: new URL("/src/assets/icons/edit_note.png", import.meta.url).href,
  },
  {
    name: "Case Studies",
    link: "/case-studies",
    icon: new URL("/src/assets/icons/menu_book.png", import.meta.url).href,
  },
  {
    name: "Fire Side Chats",
    link: "/fireside-chats",
    icon: new URL("/src/assets/icons/fireside_chats.svg", import.meta.url).href,
  },
  // {
  //   name: "Claims Resource Hub",
  //   link: "/",
  //   icon: new URL("/src/assets/icons/hub.png", import.meta.url).href,
  // },
  {
    name: "Webinars",
    link: "/webinars",
    icon: new URL("/src/assets/icons/live_tv.png", import.meta.url).href,
  },
  {
    name: "Contact Us",
    link: "/",
    icon: new URL("/src/assets/icons/call.png", import.meta.url).href,
  },
  // {
  //   name: "Partnership",
  //   link: "/",
  //   icon: new URL("/src/assets/icons/handshake.png", import.meta.url).href,
  // },
];
const solutionLinks = {
  claim: [
    {
      name: "Natural Disasters",
      link: "/solutions/natural-disasters",
      icon: new URL("/src/assets/icons/flood.svg", import.meta.url).href,
    },
    {
      name: "Fire or Explosion",
      link: "/solutions/fire-or-explosion",
      icon: new URL("/src/assets/icons/fire_extinguisher.svg", import.meta.url)
        .href,
    },
    {
      name: "Equipment Breakdown",
      link: "/solutions/equipment-breakdown",
      icon: new URL("/src/assets/icons/construction.svg", import.meta.url).href,
    },
    {
      name: "Power Outages",
      link: "/solutions/power-outages",
      icon: new URL("/src/assets/icons/power_off.svg", import.meta.url).href,
    },
    {
      name: "Construction or Renovation",
      link: "/solutions/faulty-construction",
      icon: new URL("/src/assets/icons/foundation.svg", import.meta.url).href,
    },
    {
      name: "Cyber Attacks",
      link: "/solutions/cyber-attacks",
      icon: new URL("/src/assets/icons/cyberattacks.svg", import.meta.url).href,
    },
    {
      name: "City Shutdowns",
      link: "/solutions/city-shutdowns",
      icon: new URL("/src/assets/icons/city_shutdown.svg", import.meta.url)
        .href,
    },
    {
      name: "Pandemics",
      link: "/solutions/pandemics",
      icon: new URL("/src/assets/icons/pandemics.svg", import.meta.url).href,
    },
  ],
  company: [
    {
      name: "Enterprise",
      link: "/solutions/enterprise",
      icon: new URL("/src/assets/icons/apartment.svg", import.meta.url).href,
    },
    {
      name: "Insurance Companies",
      link: "/solutions/insurance-companies",
      icon: new URL(
        "/src/assets/icons/approval_delegation.svg",
        import.meta.url,
      ).href,
    },
    {
      name: "Insurance Brokers",
      link: "/solutions/insurance-brokers",
      icon: new URL("/src/assets/icons/real_estate_agent.svg", import.meta.url)
        .href,
    },
    {
      name: "Consulting Firms",
      link: "/solutions/consulting-firms",
      icon: new URL("/src/assets/icons/consultant.svg", import.meta.url).href,
    },
    {
      name: "Law Firms",
      link: "/solutions/law-firms",
      icon: new URL("/src/assets/icons/gavel.svg", import.meta.url).href,
    },
  ],
  role: [
    {
      name: "Risk & Compliance",
      link: "/solutions/risk-compliance",
      icon: new URL("/src/assets/icons/fact_check.svg", import.meta.url).href,
    },
    {
      name: "Claims Managers",
      link: "/solutions/claim-managers",
      icon: new URL("/src/assets/icons/quick_reference.svg", import.meta.url)
        .href,
    },
    {
      name: "Finance Analysts",
      link: "/solutions/finance-analysts",
      icon: new URL("/src/assets/icons/attach_money.svg", import.meta.url).href,
    },
    {
      name: "Forensic Accountants",
      link: "/solutions/forensic-accountants",
      icon: new URL("/src/assets/icons/account_balance.svg", import.meta.url)
        .href,
    },
    {
      name: "Executive Teams",
      link: "/solutions/executive-teams",
      icon: new URL("/src/assets/icons/group.svg", import.meta.url).href,
    },
  ],
};
</script>

<style lang="postcss" scoped>
#navbar {
  @apply top-0 z-50;
  @screen md {
    @apply sticky;
  }
  > #navbar_top {
    @apply bg-primaryDark;
    > div {
      /* changing height from 75px to 60px */
      @apply mx-auto h-16 max-w-[1200px] px-5;
      @apply flex items-center justify-between;
      @screen sm {
        @apply px-10;
      }
      @screen lg {
        @apply px-18;
      }
      > :nth-child(2) {
        @apply flex h-9 items-center gap-x-2;
        @screen lg {
          @apply gap-x-4;
        }
        > a {
          @apply flex items-center justify-center;
          @apply h-full min-w-[90px] cursor-pointer px-3;
          @apply rounded-2xl bg-white text-primaryDark;
          @apply transition-all duration-300 hover:bg-gray-300;
        }
      }
    }
  }
  > #navbar_bottom {
    @apply relative bg-white;
    > div {
      @apply flex items-center justify-between;
      /* changing height from 96px to 80px */
      @apply mx-auto h-20 max-w-[1200px] px-5;
      @screen sm {
        @apply px-10;
      }
      @screen lg {
        @apply px-18;
      }
      > #left {
        @apply flex h-full w-full items-center justify-between;
        @screen lg {
          @apply justify-start gap-x-12;
        }
        > #logo {
          @apply h-14;
        }
        > #mobile_popover_group_wrapper {
          @apply flex flex-col items-center justify-between;
          @screen lg {
            @apply hidden;
          }
        }
        > #popover_group_wrapper {
          @apply hidden h-full;
          @screen lg {
            @apply flex items-center justify-between;
          }
          > a {
            @apply font-medium text-primary;
          }
          > div {
            @apply flex h-full items-center;
            > button {
              @apply mr-1 h-full px-4 font-medium text-primary;
              @apply flex cursor-pointer items-center gap-x-2;
              @apply hover:bg-[#f3f3f3];
              @apply border-none outline-none;
              > img {
                @apply h-2 w-4;
              }
            }
            > #menu {
              @apply absolute left-0 top-[75px] rounded-b-2xl bg-white p-6 shadow-sm shadow-gray-300;
              @apply z-20 flex flex-wrap gap-x-4 outline-none;
              > .col {
                @apply flex flex-col justify-start;
                > .heading {
                  @apply pb-8 text-lg font-medium text-primary;
                }
                > .content {
                  @apply flex flex-col items-start justify-center gap-y-2;
                  > .menu_row {
                    @apply flex items-center gap-x-2;
                    > .img {
                      @apply h-6 w-6 text-primary;
                      > img {
                        @apply h-full w-full;
                      }
                    }
                    > .name {
                      @apply font-aneklatin font-medium text-[#598392];
                    }
                  }
                  > .more_types {
                    @apply flex h-[28px] w-[127px] items-center justify-center rounded-md bg-[#598392] font-aneklatin text-xs font-medium text-white;
                  }
                }
              }
            }
          }
        }
      }
      > a {
        @apply hidden;
        @screen lg {
          @apply flex h-10 w-32 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-white;
          @apply cursor-pointer;
        }
      }
    }
  }
}
</style>
