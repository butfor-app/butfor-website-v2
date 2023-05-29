<template>
  <div id="wrapper">
    <template v-for="faq in faqs">
      <Disclosure v-slot="{ open }">
        <div class="faq" :class="open ? 'bg-[#59839205]' : 'bg-[#598392]'">
          <DisclosureButton
            class="disclosure-button"
            :class="open ? 'border-b-2' : ''"
          >
            <span class="question" :class="open ? 'text-black' : ''">{{
              faq.question
            }}</span>

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
  @apply flex flex-col w-full rounded-2xl bg-white;
  @apply px-4;

  @screen lg {
    @apply px-18;
  }
  > .faq {
    @apply px-4  mb-6 rounded-3xl;
    @screen lg {
      @apply px-9;
    }
    > .disclosure-button {
      @apply flex justify-between items-center w-full h-18 rounded-lg   focus:outline-none focus-visible:ring focus-visible:ring-opacity-75;
      @apply text-white;
      @screen lg {
        @apply h-20;
      }
      .question {
        @apply text-xl text-left font-semibold font-aneklatin;
        @screen lg {
          @apply text-[28px];
        }
      }
    }
    #disclosure-panel {
      @apply text-[#598392] text-sm py-6;
    }
  }
}
</style>
