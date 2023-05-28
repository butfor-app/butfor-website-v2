<template>
  <div id="navbar">
    <div id="navbar_top">
      <div>
        <div>
          <button>New</button>
          <div id="msg">Webinar on How to Automate Baselines, June 14</div>
        </div>
        <div>
          <a href="/contact" id="contact">Contact Sales</a>
          <a href="#" id="login">Login</a>
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
              v-slot="{ open }"
            >
              <!-- @mouseleave="handleLeave" -->
              <MenuButton id="menu_button">
                <!-- @mouseover="handleHover($event, open)" -->
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
                  class="w-[660px] h-[401px] max-h-[calc(100vh_-_140px)] overflow-y-auto relative"
                  style="padding-bottom: 0"
                >
                  <div
                    class="absolute left-0 top-[65px] z-0 w-[591px] mx-6 border-b-2 border-gray-200"
                  ></div>
                  <div class="col">
                    <div class="heading">BY CLAIM TYPE</div>
                    <div class="content">
                      <RouterLink
                        to="/solutions/natural-disasters"
                        class="menu_row"
                      >
                        <div class="img">
                          <img src="@/assets/icons/flood.svg" alt="" />
                        </div>
                        <div class="name">Natural Disasters</div>
                      </RouterLink>
                      <RouterLink
                        to="/solutions/fire-or-explosion"
                        class="menu_row"
                      >
                        <div class="img">
                          <img
                            src="@/assets/icons/fire_extinguisher.svg"
                            alt=""
                          />
                        </div>
                        <div class="name">Fire or Explosion</div>
                      </RouterLink>
                      <RouterLink to="equipment-breakdown" class="menu_row">
                        <div class="img">
                          <img src="@/assets/icons/construction.svg" alt="" />
                        </div>
                        <div class="name">Equipment Breakdown</div>
                      </RouterLink>
                      <a href="#" class="menu_row">
                        <div class="img">
                          <img src="@/assets/icons/power_off.svg" alt="" />
                        </div>
                        <div class="name">Power Outages</div>
                      </a>
                      <a href="#" class="menu_row">
                        <div class="img">
                          <img src="@/assets/icons/foundation.svg" alt="" />
                        </div>
                        <div class="name">Construction or Renovation</div>
                      </a>
                      <a href="#" class="menu_row">
                        <div class="img">
                          <img src="@/assets/icons/cyberattacks.svg" alt="" />
                        </div>
                        <div class="name">Cyber Attacks</div>
                      </a>
                      <a href="#" class="menu_row">
                        <div class="img">
                          <img src="@/assets/icons/city_shutdown.svg" alt="" />
                        </div>
                        <div class="name">City Shutdowns</div>
                      </a>
                      <a href="#" class="menu_row">
                        <div class="img">
                          <img src="@/assets/icons/pandemics.svg" alt="" />
                        </div>
                        <div class="name">Pandemics</div>
                      </a>
                      <!-- <button class="more_types">See More Claim Types</button> -->
                    </div>
                  </div>
                  <div class="col">
                    <div class="heading">BY COMPANY TYPE</div>
                    <div class="content">
                      <a href="#" class="menu_row">
                        <div class="img">
                          <img src="@/assets/icons/apartment.svg" alt="" />
                        </div>
                        <div class="name">Enterprise</div>
                      </a>
                      <a href="#" class="menu_row">
                        <div class="img">
                          <img
                            src="@/assets/icons/approval_delegation.svg"
                            alt=""
                          />
                        </div>
                        <div class="name">Insurance Companies</div>
                      </a>
                      <a href="#" class="menu_row">
                        <div class="img">
                          <img
                            src="@/assets/icons/real_estate_agent.svg"
                            alt=""
                          />
                        </div>
                        <div class="name">Insurance Brokers</div>
                      </a>
                      <a href="#" class="menu_row">
                        <div class="img">
                          <img src="@/assets/icons/consultant.svg" alt="" />
                        </div>
                        <div class="name">Consulting Firms</div>
                      </a>
                      <a href="#" class="menu_row">
                        <div class="img">
                          <img src="@/assets/icons/consultant.svg" alt="" />
                        </div>
                        <div class="name">Law Firms</div>
                      </a>
                      <!-- <button class="more_types">See More Claim Types</button> -->
                    </div>
                  </div>
                  <div class="col">
                    <div class="heading">BY ROLE</div>
                    <div class="content">
                      <a href="#" class="menu_row">
                        <div class="img">
                          <img src="@/assets/icons/fact_check.svg" alt="" />
                        </div>
                        <div class="name">Risk & Compliance</div>
                      </a>
                      <a href="#" class="menu_row">
                        <div class="img">
                          <img
                            src="@/assets/icons/quick_reference.svg"
                            alt=""
                          />
                        </div>
                        <div class="name">Claims Managers</div>
                      </a>
                      <a href="#" class="menu_row">
                        <div class="img">
                          <img src="@/assets/icons/attach_money.svg" alt="" />
                        </div>
                        <div class="name">Finance Analysts</div>
                      </a>
                      <a href="#" class="menu_row">
                        <div class="img">
                          <img
                            src="@/assets/icons/account_balance.svg"
                            alt=""
                          />
                        </div>
                        <div class="name">Forensic Accountants</div>
                      </a>
                      <a href="#" class="menu_row">
                        <div class="img">
                          <img src="@/assets/icons/group.svg" alt="" />
                        </div>
                        <div class="name">Executive Teams</div>
                      </a>
                    </div>
                  </div>
                  <button
                    id="row"
                    class="w-full border-t-2 border-gray-200 text-[#598392]"
                  >
                    See All Solutions
                  </button>
                </MenuItems>
              </transition>
            </Menu>
            <Menu
              as="div"
              class="relative inline-block text-left"
              v-slot="{ open }"
            >
              <!-- @mouseleave="handleLeave" -->
              <MenuButton id="menu_button">
                <!-- @mouseover="handleHover($event, open)" -->
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
                  <div class="col w-[150px]">
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
                      <a href="/product/?feature=1" class="menu_row">
                        <div class="img">
                          <img
                            src="@/assets/icons/manage_accounts.png"
                            alt=""
                          />
                        </div>
                        <div class="name">Customer & Claim Management</div>
                      </a>
                      <a href="/product/?feature=2" class="menu_row">
                        <div class="img">
                          <img
                            src="@/assets/icons/bar_chart_4_bars.png"
                            alt=""
                          />
                        </div>
                        <div class="name">Reporting & Analytics</div>
                      </a>
                      <a href="/product/?feature=3" class="menu_row">
                        <div class="img">
                          <img src="@/assets/icons/done.png" alt="" />
                        </div>
                        <div class="name">Approval Chains</div>
                      </a>
                      <a href="/product/?feature=4" class="menu_row">
                        <div class="img">
                          <img src="@/assets/icons/edit_document.png" alt="" />
                        </div>
                        <div class="name">Claims Customization</div>
                      </a>
                      <!-- <button class="more_types">See More Claim Types</button> -->
                    </div>
                  </div>
                  <div class="col">
                    <div class="heading" style="visibility: hidden">.</div>
                    <div class="content">
                      <a href="/product/?feature=5" class="menu_row">
                        <div class="img">
                          <img src="@/assets/icons/magic_button.png" alt="" />
                        </div>
                        <div class="name">Find the Best Baseline</div>
                      </a>
                      <a href="/product/?feature=6" class="menu_row">
                        <div class="img">
                          <img src="@/assets/icons/handshake.png" alt="" />
                        </div>
                        <div class="name">Collaboration</div>
                      </a>
                      <a href="/product/?feature=7" class="menu_row">
                        <div class="img">
                          <img src="@/assets/icons/lock.png" alt="" />
                        </div>
                        <div class="name">Centralized & Secure</div>
                      </a>
                      <a href="/product/?feature=8" class="menu_row">
                        <div class="img">
                          <img src="@/assets/icons/database.png" alt="" />
                        </div>
                        <div class="name">Data Standardization</div>
                      </a>
                    </div>
                  </div>
                </MenuItems>
              </transition>
            </Menu>
            <Menu
              as="div"
              class="relative inline-block text-left"
              v-slot="{ open }"
            >
              <!-- @mouseleave="handleLeave" -->
              <MenuButton id="menu_button">
                <!-- @mouseover="handleHover($event, open)" -->
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
                    <!-- <div class="heading">BY CLAIM TYPE</div> -->
                    <div class="content">
                      <a href="#" class="menu_row">
                        <div class="img">
                          <img src="@/assets/icons/help.png" alt="" />
                        </div>
                        <div class="name">Help</div>
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
                </MenuItems>
              </transition>
            </Menu>
            <a href="#">Integrations</a>
          </div>
          <div id="mobile_popover_group_wrapper">
            <button
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
                        <a href="#" class="menu_row">
                          <div class="img">
                            <img src="@/assets/icons/flood.svg" alt="" />
                          </div>
                          <div class="name">Natural Disasters</div>
                        </a>
                        <button class="menu_row">
                          <div class="img">
                            <img
                              src="@/assets/icons/fire_extinguisher.svg"
                              alt=""
                            />
                          </div>
                          <div class="name">Fire or Explosion</div>
                        </button>
                        <a href="#" class="menu_row">
                          <div class="img">
                            <img src="@/assets/icons/construction.svg" alt="" />
                          </div>
                          <div class="name">Equipment Breakdown</div>
                        </a>
                        <a href="#" class="menu_row">
                          <div class="img">
                            <img src="@/assets/icons/power_off.svg" alt="" />
                          </div>
                          <div class="name">Power Outages</div>
                        </a>
                        <a href="#" class="menu_row">
                          <div class="img">
                            <img src="@/assets/icons/foundation.svg" alt="" />
                          </div>
                          <div class="name">Construction or Renovation</div>
                        </a>
                        <a href="#" class="menu_row">
                          <div class="img">
                            <img src="@/assets/icons/cyberattacks.svg" alt="" />
                          </div>
                          <div class="name">Cyber Attacks</div>
                        </a>
                        <a href="#" class="menu_row">
                          <div class="img">
                            <img
                              src="@/assets/icons/city_shutdown.svg"
                              alt=""
                            />
                          </div>
                          <div class="name">City Shutdowns</div>
                        </a>
                        <a href="#" class="menu_row">
                          <div class="img">
                            <img src="@/assets/icons/pandemics.svg" alt="" />
                          </div>
                          <div class="name">Pandemics</div>
                        </a>
                        <!-- <button class="more_types">See More Claim Types</button> -->
                      </div>
                    </div>
                    <div class="col">
                      <div class="heading">BY COMPANY TYPE</div>
                      <div class="content">
                        <a href="#" class="menu_row">
                          <div class="img">
                            <img src="@/assets/icons/apartment.svg" alt="" />
                          </div>
                          <div class="name">Enterprise</div>
                        </a>
                        <a href="#" class="menu_row">
                          <div class="img">
                            <img
                              src="@/assets/icons/approval_delegation.svg"
                              alt=""
                            />
                          </div>
                          <div class="name">Insurance Companies</div>
                        </a>
                        <a href="#" class="menu_row">
                          <div class="img">
                            <img src="@/assets/icons/consultant.svg" alt="" />
                          </div>
                          <div class="name">Claim Consultants</div>
                        </a>
                        <a href="#" class="menu_row">
                          <div class="img">
                            <img
                              src="@/assets/icons/real_estate_agent.svg"
                              alt=""
                            />
                          </div>
                          <div class="name">Insurance Brokers</div>
                        </a>
                        <!-- <button class="more_types">See More Claim Types</button> -->
                      </div>
                    </div>
                    <div class="col">
                      <div class="heading">BY ROLE</div>
                      <div class="content">
                        <a href="#" class="menu_row">
                          <div class="img">
                            <img src="@/assets/icons/fact_check.svg" alt="" />
                          </div>
                          <div class="name">Risk & Compliance</div>
                        </a>
                        <a href="#" class="menu_row">
                          <div class="img">
                            <img
                              src="@/assets/icons/quick_reference.svg"
                              alt=""
                            />
                          </div>
                          <div class="name">Claims</div>
                        </a>
                        <a href="#" class="menu_row">
                          <div class="img">
                            <img src="@/assets/icons/attach_money.svg" alt="" />
                          </div>
                          <div class="name">Finance</div>
                        </a>
                        <a href="#" class="menu_row">
                          <div class="img">
                            <img
                              src="@/assets/icons/account_balance.svg"
                              alt=""
                            />
                          </div>
                          <div class="name">Forensic Accounting</div>
                        </a>
                        <a href="#" class="menu_row">
                          <div class="img">
                            <img src="@/assets/icons/group.svg" alt="" />
                          </div>
                          <div class="name">Executive Teams</div>
                        </a>
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
                          <div class="name">Help</div>
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
} from "@headlessui/vue";
import arrow from "@/components/icons/arrow.vue";
import { vOnClickOutside } from "@vueuse/components";
import { ref } from "vue";

const mobile_popover_open = ref(false);

// const handleHover = ($event, open) => {
//   if (!open) {
//     $event.target.click();
//   }
// };
// const handleLeave = ($event) => {
//   $event.target.children[0].click();
// };
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
      @screen lg {
        @apply px-18;
      }
      @screen sm {
        @apply px-10;
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
        @apply h-full flex items-center;
        @screen lg {
          @apply gap-x-12;
        }
        > a {
          @apply flex items-center justify-center h-full text-white px-4 cursor-pointer;
          @apply hover:bg-[#052f3f] transition-all duration-300;
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
