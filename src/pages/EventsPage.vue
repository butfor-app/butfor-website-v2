<template>
  <div id="hero_section">
    <div id="bg_gradient"></div>
    <div id="heading">Events & Webinars</div>
    <div id="sub_heading">
      Join us as we hosts the industry's most prominent HR and Talent
      leaders.Want to be hosted by ButFor? We'd love to hear from you.
    </div>
    <button>Learn More</button>
  </div>
  <div id="event_history">
    <div id="heading">Previous Events & Webinars</div>
    <div id="slider_wrapper">
      <Carousel
        :items-to-show="1"
        :wrap-around="true"
        :snapAlign="'center'"
        class="w-screen max-w-[1200px] h-auto"
        v-model="currentSlide"
      >
        <slide v-for="(slideGroup, index) in groupedEvents" :key="index">
          <div
            id="slide_wrapper"
            class="h-full flex flex-wrap items-start justify-around xl:justify-between gap-y-6"
          >
            <EventCard
              class="w-[49%]"
              v-for="slide in slideGroup"
              :name="slide.name"
              :desc="slide.desc"
              :link="slide.link"
            />
          </div>
        </slide>
      </Carousel>
      <div id="pagination">
        <template v-for="(page, index) in groupedEvents.length" :key="index">
          <div
            :class="currentSlide + 1 === page ? 'active' : ''"
            @click="currentSlide = page - 1"
          ></div>
        </template>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useHead } from "@vueuse/head";
import { computed, ref } from "vue";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import EventCard from "@/components/EventCard.vue";
useHead({
  title: "Butfor - Events & Webinars",
  meta: [
    {
      name: "description",
      content:
        "Butfor is a tool that automates business interruption insurance claims. Calculate your losses & build comprehensive reports in a fraction of the time.",
    },
  ],
});
const currentSlide = ref(0);

const events = ref([
  {
    name: "Event 1",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam. Sed euismod, nisl quis lacinia aliquet, nisl nisl ultrices nisl, quis lacinia.",
    link: "#",
  },
  {
    name: "Event 2",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam. Sed euismod, nisl quis lacinia aliquet, nisl nisl ultrices nisl, quis lacinia.",
    link: "#",
  },
  {
    name: "Event 3",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam. Sed euismod, nisl quis lacinia aliquet, nisl nisl ultrices nisl, quis lacinia.",
    link: "#",
  },
  {
    name: "Event 4",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam. Sed euismod, nisl quis lacinia aliquet, nisl nisl ultrices nisl, quis lacinia.",
    link: "#",
  },
  {
    name: "Event 5",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget augue nec massa volutpat aliquam. Sed euismod, nisl quis lacinia aliquet, nisl nisl ultrices nisl, quis lacinia.",
    link: "#",
  },
]);
const groupedEvents = computed(() => {
  const grouped = [];
  for (let i = 0; i < events.value.length; i += 4) {
    grouped.push(events.value.slice(i, i + 4));
  }
  return grouped;
});
console.log(groupedEvents.value);
</script>
<style lang="postcss" scoped>
#hero_section {
  @apply flex flex-col items-center justify-center;
  @apply py-4 h-[calc(100vh)] text-center;
  @screen md {
    @apply h-[calc(100vh_-_171px)];
  }
  @apply bg-[url('@/assets/images/events-hero-bg.png')] bg-no-repeat	bg-cover  bg-top;
  > #heading {
    @apply mb-10 text-[46px] font-extrabold text-white;
  }
  > #sub_heading {
    @apply mb-9 w-2/4 text-xl font-medium font-aneklatin text-white;
  }
  > button {
    @apply w-44 h-11 bg-white rounded-full;
    @apply text-primary  font-semibold font-aneklatin;
  }
}
#event_history {
  @apply flex flex-col;
  > #heading {
    @apply py-16 text-[46px] font-extrabold text-center;
  }
  > #slider_wrapper {
    @apply flex flex-col items-center gap-x-4;
    @apply px-6;
    @apply overscroll-none;
    > .carousel__track {
      /* @apply gap-x-10; */
      /* > .carousel__slide {
        > .slide_wrapper {
          @apply flex flex-wrap;
        }
      } */
    }
    > #pagination {
      @apply flex justify-center;
      @apply mt-10;
      > div {
        @apply w-3 h-3 mx-1;
        @apply bg-gray-400 rounded-full cursor-pointer;
      }
      > .active {
        @apply w-8 bg-primary text-white;
      }
    }
  }
}
</style>
