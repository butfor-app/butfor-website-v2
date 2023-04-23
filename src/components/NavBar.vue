<template>
  <div id="navbar">
    <div id="navbar_top">
      <div>
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
    </div>
    <div id="navbar_bottom">
      <div>
        <div id="left">
          <img id="logo" src="@/assets/BFlogo.png" alt="logo" />
          <div id="popover_group_wrapper">
            <Menu
              as="div"
              class="relative inline-block text-left"
              v-slot="{ open }"
              @mouseleave="handleLeave"
            >
              <MenuButton
                id="menu_button"
                @mouseover="handleHover($event, open)"
              >
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
                  class="w-[640px] h-[401px] relative"
                  style="padding-bottom: 0"
                >
                  <div
                    class="absolute left-0 top-[65px] z-0 w-[591px] mx-6 border-b-2 border-gray-200"
                  ></div>
                  <div class="col">
                    <div class="heading">BY CLAIM TYPE</div>
                    <div class="content">
                      <a href="#" class="menu_row">
                        <div class="img">
                          <img src="@/assets/icons/flood.png" alt="" />
                        </div>
                        <div class="name">Natural Disasters</div>
                      </a>
                      <button class="menu_row">
                        <div class="img">
                          <img
                            src="@/assets/icons/fire_extinguisher.png"
                            alt=""
                          />
                        </div>
                        <div class="name">Fire or Explosion</div>
                      </button>
                      <a href="#" class="menu_row">
                        <div class="img">
                          <img src="@/assets/icons/construction.png" alt="" />
                        </div>
                        <div class="name">Equipment Breakdown</div>
                      </a>
                      <a href="#" class="menu_row">
                        <div class="img">
                          <img src="@/assets/icons/power_off.png" alt="" />
                        </div>
                        <div class="name">Power Outages</div>
                      </a>
                      <a href="#" class="menu_row">
                        <div class="img">
                          <img src="@/assets/icons/foundation.png" alt="" />
                        </div>
                        <div class="name">Construction or Renovation</div>
                      </a>
                      <button class="more_types">See More Claim Types</button>
                    </div>
                  </div>
                  <div class="col">
                    <div class="heading">BY COMPANY TYPE</div>
                    <div class="content">
                      <a href="#" class="menu_row">
                        <div class="img">
                          <img src="@/assets/icons/apartment.png" alt="" />
                        </div>
                        <div class="name">Enterprise</div>
                      </a>
                      <a href="#" class="menu_row">
                        <div class="img">
                          <img
                            src="@/assets/icons/approval_delegation.png"
                            alt=""
                          />
                        </div>
                        <div class="name">Insurance Companies</div>
                      </a>
                      <a href="#" class="menu_row">
                        <div class="img">
                          <img src="@/assets/icons/consultant.png" alt="" />
                        </div>
                        <div class="name">Claim Consultants</div>
                      </a>
                      <a href="#" class="menu_row">
                        <div class="img">
                          <img
                            src="@/assets/icons/real_estate_agent.png"
                            alt=""
                          />
                        </div>
                        <div class="name">Insurance Brokers</div>
                      </a>
                      <button class="more_types">See More Claim Types</button>
                    </div>
                  </div>
                  <div class="col">
                    <div class="heading">BY ROLE</div>
                    <div class="content">
                      <a href="#" class="menu_row">
                        <div class="img">
                          <img src="@/assets/icons/fact_check.png" alt="" />
                        </div>
                        <div class="name">Risk & Compliance</div>
                      </a>
                      <a href="#" class="menu_row">
                        <div class="img">
                          <img
                            src="@/assets/icons/quick_reference.png"
                            alt=""
                          />
                        </div>
                        <div class="name">Claims</div>
                      </a>
                      <a href="#" class="menu_row">
                        <div class="img">
                          <img src="@/assets/icons/attach_money.png" alt="" />
                        </div>
                        <div class="name">Finance</div>
                      </a>
                      <a href="#" class="menu_row">
                        <div class="img">
                          <img
                            src="@/assets/icons/account_balance.png"
                            alt=""
                          />
                        </div>
                        <div class="name">Forensic Accounting</div>
                      </a>
                      <a href="#" class="menu_row">
                        <div class="img">
                          <img src="@/assets/icons/group.png" alt="" />
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
              @mouseleave="handleLeave"
            >
              <MenuButton
                id="menu_button"
                @mouseover="handleHover($event, open)"
              >
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
                <MenuItems id="menu" class="w-[686px] h-[288px]">
                  <div
                    class="absolute left-0 top-[65px] z-0 w-[638px] mx-6 border-b-2 border-gray-200"
                  ></div>
                  <div class="col w-[200px]">
                    <div class="heading">OVERVIEW</div>
                    <div class="h-full flex flex-col justify-around">
                      <div class="pb-4">
                        Get to know the <br />Tueri platform
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
                </MenuItems>
              </transition>
            </Menu>
            <Menu
              as="div"
              class="relative inline-block text-left"
              v-slot="{ open }"
              @mouseleave="handleLeave"
            >
              <MenuButton
                id="menu_button"
                @mouseover="handleHover($event, open)"
              >
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
                            src="@/assets/icons/quick_reference.png"
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
        </div>
        <button>Book Demo</button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
const handleHover = ($event, open) => {
  if (!open) {
    $event.target.click();
  }
};
const handleLeave = ($event) => {
  $event.target.children[0].click();
};
</script>
<style lang="postcss" scoped>
#navbar {
  @apply sticky top-0 z-50;
  > #navbar_top {
    @apply bg-primaryDark;
    > div {
      @apply px-5 h-18 mx-auto max-w-[1200px];
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
        @apply flex items-center;
        @screen lg {
          @apply gap-x-12;
        }
        > button {
          @apply text-white;
          @apply px-4;
          @apply cursor-pointer;
        }
      }
    }
  }
  > #navbar_bottom {
    @apply bg-white;
    > div {
      @apply flex items-center justify-between;
      @apply h-24 px-5 max-w-[1200px] mx-auto;
      @screen lg {
        @apply px-18;
      }
      @screen sm {
        @apply px-10;
      }
      > #left {
        @apply w-full h-full flex items-center justify-between gap-x-12;
        @screen lg {
          @apply justify-start;
        }
        > #logo {
          @apply h-14;
        }
        > #popover_group_wrapper {
          @apply hidden h-full;
          @screen md {
            @apply flex items-center justify-between;
          }
          /* @screen lg {
            @apply flex items-center gap-x-12;
          } */
          > a {
            @apply text-primary font-medium;
          }
          > div {
            @apply h-full flex items-center;
            > button {
              @apply h-2/3 text-primary font-medium  px-4 mr-1;
              @apply cursor-pointer flex items-center gap-x-2;
              @apply hover:bg-[#f3f3f3] rounded-xl;
              @apply outline-none border-none;
              > img {
                @apply h-2 w-4;
              }
              /* @apply inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75; */
            }
            > #menu {
              /* @apply absolute top-[60px] left-0 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none; */
              @apply absolute top-[90px] left-0 p-6 bg-white rounded-b-2xl;
              @apply z-20 flex gap-x-4 flex-wrap;
              > .col {
                @apply flex flex-col justify-start;
                > .heading {
                  @apply pb-8 text-lg font-medium text-primary;
                }
                > .content {
                  @apply flex flex-col justify-center items-start gap-y-3;
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
      > button {
        @apply hidden;
        @screen lg {
          @apply block w-32 h-10 bg-primary text-white text-sm font-medium px-4 rounded-md;
          @apply cursor-pointer;
        }
      }
    }
  }
}
</style>
