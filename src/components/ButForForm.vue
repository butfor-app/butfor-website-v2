<template>
  <div
    v-if="!bare"
    id="contact_form"
    class="py-16 bg-[url('@/assets/images/contact-hero-bg.png')] bg-no-repeat bg-cover bg-center"
  >
    <div class="max-w-2xl w-[90%] md:w-1/2 mx-auto px-2 md:px-12 py-12 bg-white rounded-2xl">
      <div class="mb-10 text-[46px] text-primary font-extrabold text-center">
        {{ title }}
      </div>

      <!-- Success state -->
      <div v-if="submitted" class="mx-auto w-[90%] text-center py-6">
        <div class="text-2xl font-extrabold text-primary mb-3">You're all set!</div>
        <p class="text-gray-500 text-base">Thanks for reaching out — we'll be in touch shortly.</p>
      </div>

      <!-- Form -->
      <form
        v-else
        @submit.prevent="handleSubmit"
        class="mx-auto w-[90%] flex flex-col gap-y-4"
        novalidate
      >
        <!-- First / Last -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="flex flex-col gap-y-1">
            <label class="text-xs font-semibold uppercase tracking-wide text-primaryDark">
              First Name <span class="text-red-500">*</span>
            </label>
            <input
              v-model="form.firstname"
              type="text"
              placeholder="Jane"
              :class="fieldClass(fieldErrors.firstname)"
            />
            <p v-if="fieldErrors.firstname" class="text-xs text-red-500">{{ fieldErrors.firstname }}</p>
          </div>
          <div class="flex flex-col gap-y-1">
            <label class="text-xs font-semibold uppercase tracking-wide text-primaryDark">
              Last Name <span class="text-red-500">*</span>
            </label>
            <input
              v-model="form.lastname"
              type="text"
              placeholder="Smith"
              :class="fieldClass(fieldErrors.lastname)"
            />
            <p v-if="fieldErrors.lastname" class="text-xs text-red-500">{{ fieldErrors.lastname }}</p>
          </div>
        </div>

        <!-- Work Email -->
        <div class="flex flex-col gap-y-1">
          <label class="text-xs font-semibold uppercase tracking-wide text-primaryDark">
            Work Email <span class="text-red-500">*</span>
          </label>
          <input
            v-model="form.email"
            type="email"
            placeholder="jane@company.com"
            :class="fieldClass(fieldErrors.email)"
            @blur="validateEmail"
          />
          <p v-if="fieldErrors.email" class="text-xs text-red-500">{{ fieldErrors.email }}</p>
        </div>

        <!-- Company -->
        <div class="flex flex-col gap-y-1">
          <label class="text-xs font-semibold uppercase tracking-wide text-primaryDark">
            Company Name <span class="text-red-500">*</span>
          </label>
          <input
            v-model="form.company"
            type="text"
            placeholder="Acme Corp"
            :class="fieldClass(fieldErrors.company)"
          />
          <p v-if="fieldErrors.company" class="text-xs text-red-500">{{ fieldErrors.company }}</p>
        </div>

        <!-- Job Title / Phone -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="flex flex-col gap-y-1">
            <label class="text-xs font-semibold uppercase tracking-wide text-primaryDark">
              Job Title <span class="text-red-500">*</span>
            </label>
            <input
              v-model="form.jobtitle"
              type="text"
              placeholder="Claims Manager"
              :class="fieldClass(fieldErrors.jobtitle)"
            />
            <p v-if="fieldErrors.jobtitle" class="text-xs text-red-500">{{ fieldErrors.jobtitle }}</p>
          </div>
          <div class="flex flex-col gap-y-1">
            <label class="text-xs font-semibold uppercase tracking-wide text-primaryDark">Phone</label>
            <input
              v-model="form.phone"
              type="tel"
              placeholder="+1 (555) 000-0000"
              :class="fieldClass(null)"
            />
          </div>
        </div>

        <!-- Submit error -->
        <p v-if="submitError" class="text-sm text-red-500 text-center -mb-1">
          {{ submitError }}
        </p>

        <button
          type="submit"
          :disabled="loading"
          class="mt-2 w-full h-12 bg-primary text-white font-bold rounded-full uppercase tracking-widest hover:bg-primaryDark transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span v-if="loading" class="flex items-center justify-center gap-x-2">
            <svg class="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
            </svg>
            Submitting...
          </span>
          <span v-else>Submit</span>
        </button>
      </form>
    </div>
  </div>

  <!-- Bare mode: white card only, no background wrapper -->
  <div v-else class="w-full bg-white rounded-2xl px-6 py-8">
    <div class="mb-8 text-[46px] text-primary font-extrabold text-center">
      {{ title }}
    </div>

    <div v-if="submitted" class="text-center py-6">
      <div class="text-2xl font-extrabold text-primary mb-3">You're all set!</div>
      <p class="text-gray-500 text-base">Thanks for reaching out — we'll be in touch shortly.</p>
    </div>

    <form v-else @submit.prevent="handleSubmit" class="flex flex-col gap-y-4" novalidate>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="flex flex-col gap-y-1">
          <label class="text-xs font-semibold uppercase tracking-wide text-primaryDark">First Name <span class="text-red-500">*</span></label>
          <input v-model="form.firstname" type="text" placeholder="Jane" :class="fieldClass(fieldErrors.firstname)" />
          <p v-if="fieldErrors.firstname" class="text-xs text-red-500">{{ fieldErrors.firstname }}</p>
        </div>
        <div class="flex flex-col gap-y-1">
          <label class="text-xs font-semibold uppercase tracking-wide text-primaryDark">Last Name <span class="text-red-500">*</span></label>
          <input v-model="form.lastname" type="text" placeholder="Smith" :class="fieldClass(fieldErrors.lastname)" />
          <p v-if="fieldErrors.lastname" class="text-xs text-red-500">{{ fieldErrors.lastname }}</p>
        </div>
      </div>
      <div class="flex flex-col gap-y-1">
        <label class="text-xs font-semibold uppercase tracking-wide text-primaryDark">Work Email <span class="text-red-500">*</span></label>
        <input v-model="form.email" type="email" placeholder="jane@company.com" :class="fieldClass(fieldErrors.email)" @blur="validateEmail" />
        <p v-if="fieldErrors.email" class="text-xs text-red-500">{{ fieldErrors.email }}</p>
      </div>
      <div class="flex flex-col gap-y-1">
        <label class="text-xs font-semibold uppercase tracking-wide text-primaryDark">Company Name <span class="text-red-500">*</span></label>
        <input v-model="form.company" type="text" placeholder="Acme Corp" :class="fieldClass(fieldErrors.company)" />
        <p v-if="fieldErrors.company" class="text-xs text-red-500">{{ fieldErrors.company }}</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="flex flex-col gap-y-1">
          <label class="text-xs font-semibold uppercase tracking-wide text-primaryDark">Job Title <span class="text-red-500">*</span></label>
          <input v-model="form.jobtitle" type="text" placeholder="Claims Manager" :class="fieldClass(fieldErrors.jobtitle)" />
          <p v-if="fieldErrors.jobtitle" class="text-xs text-red-500">{{ fieldErrors.jobtitle }}</p>
        </div>
        <div class="flex flex-col gap-y-1">
          <label class="text-xs font-semibold uppercase tracking-wide text-primaryDark">Phone</label>
          <input v-model="form.phone" type="tel" placeholder="+1 (555) 000-0000" :class="fieldClass(null)" />
        </div>
      </div>
      <p v-if="submitError" class="text-sm text-red-500 text-center -mb-1">{{ submitError }}</p>
      <button type="submit" :disabled="loading" class="mt-2 w-full h-12 bg-primary text-white font-bold rounded-full uppercase tracking-widest hover:bg-primaryDark transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed">
        <span v-if="loading" class="flex items-center justify-center gap-x-2">
          <svg class="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
          </svg>
          Submitting...
        </span>
        <span v-else>Submit</span>
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  title: {
    type: String,
    default: "LET'S GO",
  },
  bare: {
    type: Boolean,
    default: false,
  },
  pageName: {
    type: String,
    default: '',
  },
  formId: {
    type: String,
    required: true,
  },
});

function getVisitorId() {
  const match = document.cookie.match(/(?:^|; )bf_vid=([^;]*)/);
  return match ? decodeURIComponent(match[1]) : '';
}

function notifySlack(data) {
  const hook = import.meta.env.VITE_SLACK_FORMS_WEBHOOK;
  fetch(hook, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      text: '*New form submission*'
        + '\n*Name:* ' + data.firstname + ' ' + data.lastname
        + '\n*Email:* ' + data.email
        + '\n*Company:* ' + data.company
        + '\n*Title:* ' + data.jobtitle
        + '\n*Page:* ' + window.location.href
        + '\n*Form:* ' + data.formName,
    }),
  }).catch(() => {});
}

const FREE_DOMAINS = new Set([
  'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com',
  'aol.com', 'icloud.com', 'me.com', 'mac.com',
]);

const form = ref({
  firstname: '',
  lastname: '',
  email: '',
  company: '',
  jobtitle: '',
  phone: '',
});

const fieldErrors = ref({
  firstname: '',
  lastname: '',
  email: '',
  company: '',
  jobtitle: '',
});

const loading = ref(false);
const submitted = ref(false);
const submitError = ref('');

function fieldClass(error) {
  const base = 'border rounded-lg px-4 py-2.5 text-sm w-full focus:outline-none focus:ring-1 transition-colors';
  return error
    ? `${base} border-red-400 focus:border-red-400 focus:ring-red-300`
    : `${base} border-gray-300 focus:border-primary focus:ring-primary`;
}

function validateEmail() {
  const val = form.value.email.trim();
  if (!val) {
    fieldErrors.value.email = 'Email is required.';
    return false;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
    fieldErrors.value.email = 'Please enter a valid email address.';
    return false;
  }
  const domain = val.split('@')[1].toLowerCase();
  if (FREE_DOMAINS.has(domain)) {
    fieldErrors.value.email = 'Please use your work email address — personal inboxes are not accepted.';
    return false;
  }
  fieldErrors.value.email = '';
  return true;
}

function validateAll() {
  let valid = true;
  const required = ['firstname', 'lastname', 'company', 'jobtitle'];
  const labels = {
    firstname: 'First name',
    lastname: 'Last name',
    company: 'Company name',
    jobtitle: 'Job title',
  };
  for (const key of required) {
    if (!form.value[key].trim()) {
      fieldErrors.value[key] = `${labels[key]} is required.`;
      valid = false;
    } else {
      fieldErrors.value[key] = '';
    }
  }
  if (!validateEmail()) valid = false;
  return valid;
}

async function handleSubmit() {
  submitError.value = '';
  if (!validateAll()) return;

  loading.value = true;
  try {
    const fields = [
      { objectTypeId: '0-1', name: 'firstname', value: form.value.firstname.trim() },
      { objectTypeId: '0-1', name: 'lastname',  value: form.value.lastname.trim() },
      { objectTypeId: '0-1', name: 'email',     value: form.value.email.trim() },
      { objectTypeId: '0-1', name: 'company',   value: form.value.company.trim() },
      { objectTypeId: '0-1', name: 'jobtitle',  value: form.value.jobtitle.trim() },
      { objectTypeId: '0-1', name: 'visitor_id', value: getVisitorId() },
    ];
    if (form.value.phone.trim()) {
      fields.push({ objectTypeId: '0-1', name: 'phone', value: form.value.phone.trim() });
    }

    const res = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/245822077/${props.formId}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fields,
          context: {
            pageUri: window.location.href,
            pageName: props.pageName || document.title,
            hutk: document.cookie.split(';').find(c => c.trim().startsWith('hubspotutk='))?.split('=')?.[1] || undefined,
          },
        }),
      }
    );

    if (!res.ok) {
      const body = await res.json().catch(() => ({}));
      throw new Error(body?.message || `Request failed (${res.status})`);
    }

    submitted.value = true;
    notifySlack({ ...form.value, formName: 'Contact / Demo' });
  } catch (err) {
    submitError.value =
      'Something went wrong — please try again or email us directly at hello@butfor.co.';
  } finally {
    loading.value = false;
  }
}
</script>
