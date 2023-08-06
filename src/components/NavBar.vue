<template>
  <div id="navbar">
    <div id="navbar_top">
      <div>
        <div>
          <button>New</button>
          <div id="msg">Webinar on How to Automate Baselines, June 14</div>
        </div>
        <div>
          <RouterLink to="/contact" id="contact">Contact Sales</RouterLink>
          <RouterLink to="/login" id="login">Login</RouterLink>
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
                  class="w-[660px] h-[350px] max-h-[calc(100vh_-_140px)] overflow-y-auto relative"
                  style="padding-bottom: 0"
                >
                  <div
                    class="absolute left-0 top-[65px] z-0 w-[591px] mx-6 border-b-2 border-gray-200"
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
                Product
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
                <MenuItems id="menu" class="w-[656px] h-[238px]">
                  <div
                    class="absolute left-0 top-[65px] z-0 w-[608px] mx-6 border-b-2 border-gray-200"
                  ></div>
                  <MenuItem as="div" class="col w-[150px]">
                    <div class="heading">OVERVIEW</div>
                    <div class="h-full flex flex-col justify-around">
                      <div class="pb-4">
                        Get to know the <br />Butfor platform
                      </div>
                      <RouterLink
                        to="/product/?feature="
                        class="w-[78px] h-[28px] flex items-center justify-center text-xs bg-[#598392] text-white font-aneklatin rounded-lg"
                        @click="close"
                      >
                        Learn More
                      </RouterLink>
                    </div>
                  </MenuItem>
                  <div class="col">
                    <div class="heading">PREVIEW</div>
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
                        <div class="name">Customer & Claim Management</div>
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
            <RouterLink to="/integrations">Integrations</RouterLink>
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
            <div
              id="popover"
              v-if="mobile_popover_open"
              v-on-click-outside="
                () => {
                  mobile_popover_open = false;
                }
              "
            >
              <div class="popover_item">
                <Disclosure v-slot="{ open }">
                  <DisclosureButton>
                    Solutions
                    <arrow :class="{ 'rotate-90': open, 'rotate-90': !open }">
                    </arrow>
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
                    <arrow :class="{ 'rotate-90': open, 'rotate-90': !open }">
                    </arrow>
                  </DisclosureButton>
                  <DisclosurePanel>
                    <div class="col w-[200px]">
                      <div class="heading">OVERVIEW</div>
                      <div class="h-full flex flex-col justify-around">
                        <div class="pb-4">
                          Get to know the <br />Butfor platform
                        </div>
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
                            <img
                              src="@/assets/icons/manage_accounts.png"
                              alt=""
                            />
                          </div>
                          <div class="name">Natural Disasters</div>
                        </a>
                        <a href="#" class="menu_row">
                          <div class="img">
                            <img
                              src="@/assets/icons/bar_chart_4_bars.png"
                              alt=""
                            />
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
                            <img
                              src="@/assets/icons/edit_document.png"
                              alt=""
                            />
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
                    <arrow :class="{ 'rotate-90': open, 'rotate-90': !open }">
                    </arrow
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
                            <img
                              src="@/assets/icons/quick_reference.svg"
                              alt=""
                            />
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
          </div>
        </div>
        <a href="/contact2">Book Demo</a>
      </div>
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
import arrow from "@/components/icons/arrow.vue";
import { vOnClickOutside } from "@vueuse/components";
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
  }
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
    link: "/",
    icon: new URL("/src/assets/icons/quick_reference.svg", import.meta.url)
      .href,
  },
  {
    name: "Articles",
    link: "/articles",
    icon: new URL("/src/assets/icons/edit_note.png", import.meta.url).href,
  },
  {
    name: "Case Studies",
    link: "/",
    icon: new URL("/src/assets/icons/menu_book.png", import.meta.url).href,
  },
  {
    name: "Claims Resource Hub",
    link: "/",
    icon: new URL("/src/assets/icons/hub.png", import.meta.url).href,
  },
  {
    name: "Webinars",
    link: "/events",
    icon: new URL("/src/assets/icons/live_tv.png", import.meta.url).href,
  },
  {
    name: "Contact Us",
    link: "/",
    icon: new URL("/src/assets/icons/call.png", import.meta.url).href,
  },
  {
    name: "Partnership",
    link: "/",
    icon: new URL("/src/assets/icons/handshake.png", import.meta.url).href,
  },
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
        import.meta.url
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
      icon: new URL("/src/assets/icons/consultant.svg", import.meta.url).href,
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
      @apply px-5 h-16 mx-auto max-w-[1200px];
      @apply flex items-center justify-between;
      @screen sm {
        @apply px-10;
      }
      @screen lg {
        @apply px-18;
      }
      > :nth-child(1) {
        @apply flex items-center;
        > button {
          @apply h-8 bg-white text-black px-4 rounded-2xl;
          @apply cursor-pointer;
        }
        > #msg {
          @apply hidden;
          @screen lg {
            @apply block text-white px-4 cursor-pointer;
          }
        }
      }
      > :nth-child(2) {
        @apply h-9 flex items-center gap-x-2;
        @screen lg {
          @apply gap-x-4;
        }
        > a {
          @apply flex items-center justify-center;
          @apply h-full px-3 min-w-[90px]  cursor-pointer;
          @apply bg-white text-primaryDark rounded-2xl;
          @apply hover:bg-gray-300 transition-all duration-300;
        }
      }
    }
  }
  > #navbar_bottom {
    @apply bg-white;
    > div {
      @apply flex items-center justify-between;
      /* changing height from 96px to 80px */
      @apply h-20 px-5 max-w-[1200px] mx-auto;
      @screen sm {
        @apply px-10;
      }
      @screen lg {
        @apply px-18;
      }
      > #left {
        @apply w-full h-full flex  items-center justify-between;
        @screen lg {
          @apply justify-start gap-x-12;
        }
        > #logo {
          @apply h-14;
        }
        > #mobile_popover_group_wrapper {
          @apply relative flex flex-col items-center justify-between;
          @screen lg {
            @apply hidden;
          }
          > #popover {
            @apply w-screen bg-white;
            @apply z-10 flex flex-col gap-y-0;
            @apply absolute top-12 -right-5;
            > .popover_item {
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
        }
        > #popover_group_wrapper {
          @apply hidden h-full;
          @screen lg {
            @apply flex items-center justify-between;
          }
          > a {
            @apply text-primary font-medium;
          }
          > div {
            @apply h-full flex items-center;
            > button {
              @apply h-full text-primary font-medium  px-4 mr-1;
              @apply cursor-pointer flex items-center gap-x-2;
              @apply hover:bg-[#f3f3f3];
              @apply outline-none border-none;
              > img {
                @apply h-2 w-4;
              }
            }
            > #menu {
              @apply absolute top-[75px] left-0 p-6 bg-white rounded-b-2xl;
              @apply z-20 flex gap-x-4 flex-wrap outline-none;
              > .col {
                @apply flex flex-col justify-start;
                > .heading {
                  @apply pb-8 text-lg font-medium text-primary;
                }
                > .content {
                  @apply flex flex-col justify-center items-start gap-y-2;
                  > .menu_row {
                    @apply flex items-center gap-x-2;
                    > .img {
                      @apply h-6 w-6 text-primary;
                      > img {
                        @apply h-full w-full;
                      }
                    }
                    > .name {
                      @apply font-medium font-aneklatin text-[#598392];
                    }
                  }
                  > .more_types {
                    @apply w-[127px] h-[28px] flex items-center justify-center bg-[#598392] text-white text-xs font-aneklatin font-medium  rounded-md;
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
          @apply flex items-center justify-center w-32 h-10 bg-primary text-white text-sm font-medium px-4 rounded-md;
          @apply cursor-pointer;
        }
      }
    }
  }
}
</style>
