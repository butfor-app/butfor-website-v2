<template>
  <div id="wrapper">
    <template v-for="faq in faqs">
      <Disclosure v-slot="{ open }">
        <div id="faq" :class="open ? 'bg-[#59839205]' : 'bg-[#598392]'">
          <DisclosureButton
            id="disclosure-button"
            :class="open ? 'border-b-2' : ''"
          >
            <span class="question" :class="open ? 'text-black' : ''">{{
              faq.question
            }}</span>
            <!-- <ChevronUpIcon
            :class="open ? 'rotate-180 transform' : ''"
            class="h-5 w-5 text-purple-500"
            /> -->
            <img v-if="open" src="@/assets/icons/minus.svg" alt="" />
            <img v-else src="@/assets/icons/plus.svg" alt="" />
          </DisclosureButton>
          <DisclosurePanel id="disclosure-panel">
            {{ faq.answer }}
          </DisclosurePanel>
        </div>
      </Disclosure>
    </template>
  </div>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
// import { ChevronUpIcon } from "@heroicons/vue/20/solid";

const faqs = [
  {
    question: "How does Tueri work?",
    answer:
      "Simply upload your financial data into the software and [Product Name] will do the rest. It will automatically calculate your losses based on a range of factors, including revenue, expenses, and payroll. You can then generate detailed reports that you can use to file your claim with your insurance provider.",
  },
  {
    question: "Do I need any special software or hardware to use Tueri?",
    answer: "No.",
  },
  {
    question: "Is Tueri easy to use?",
    answer: "No.",
  },
  {
    question: "How accurate are the calculations provided by Tueri?",
    answer: "No.",
  },
];
</script>
<style lang="postcss" scoped>
#wrapper {
  @apply flex flex-col;
  @apply w-full rounded-2xl bg-white;
  > #faq {
    @apply pl-9 pr-8  mb-6 rounded-3xl;
    > #disclosure-button {
      @apply flex justify-between items-center w-full h-20  rounded-lg   focus:outline-none focus-visible:ring focus-visible:ring-opacity-75;
      @apply text-white;
      .question {
        @apply text-[28px] font-semibold font-aneklatin;
      }
    }
    #disclosure-panel {
      @apply text-[#598392] text-sm py-6;
    }
  }
}
</style>
