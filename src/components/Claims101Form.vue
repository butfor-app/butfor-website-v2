<template>
  <div v-if="submitted" class="py-4 text-center">
    <div class="text-lg font-semibold text-primary">You're registered!</div>
    <p class="mt-1 text-sm text-gray-500">Check your email for details.</p>
  </div>

  <form v-else @submit.prevent="handleSubmit" class="flex flex-col gap-y-3" novalidate>
    <div class="grid grid-cols-2 gap-3">
      <div class="flex flex-col gap-y-1">
        <label class="text-xs font-semibold text-gray-600 uppercase tracking-wide">
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
        <label class="text-xs font-semibold text-gray-600 uppercase tracking-wide">
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

    <div class="flex flex-col gap-y-1">
      <label class="text-xs font-semibold text-gray-600 uppercase tracking-wide">
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

    <div class="flex flex-col gap-y-1">
      <label class="text-xs font-semibold text-gray-600 uppercase tracking-wide">
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

    <div class="flex flex-col gap-y-1">
      <label class="text-xs font-semibold text-gray-600 uppercase tracking-wide">
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

    <p v-if="submitError" class="text-xs text-red-500 text-center">{{ submitError }}</p>

    <button
      type="submit"
      :disabled="loading"
      class="mt-1 w-full rounded-lg bg-primary py-2.5 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-primaryDark disabled:cursor-not-allowed disabled:opacity-50"
    >
      <span v-if="loading" class="flex items-center justify-center gap-x-2">
        <svg class="h-4 w-4 animate-spin text-white" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
        </svg>
        Registering...
      </span>
      <span v-else>Register Now</span>
    </button>
  </form>
</template>

<script setup>
import { ref } from 'vue';

const FORM_ID = '79e72c6d-a330-48c4-9366-6fe0d1f8c02f';
const PORTAL_ID = '245822077';

function getVisitorId() {
  const match = document.cookie.match(/(?:^|; )bf_vid=([^;]*)/);
  return match ? decodeURIComponent(match[1]) : '';
}

const FREE_DOMAINS = new Set([
  'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com',
  'aol.com', 'icloud.com', 'me.com', 'mac.com',
]);

const form = ref({ firstname: '', lastname: '', email: '', company: '', jobtitle: '' });
const fieldErrors = ref({ firstname: '', lastname: '', email: '', company: '', jobtitle: '' });
const loading = ref(false);
const submitted = ref(false);
const submitError = ref('');

function fieldClass(error) {
  const base = 'w-full rounded-md border px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 transition-colors';
  return error
    ? `${base} border-red-400 focus:border-red-400 focus:ring-red-300`
    : `${base} border-gray-300 focus:border-primary focus:ring-primary`;
}

function validateEmail() {
  const val = form.value.email.trim();
  if (!val) { fieldErrors.value.email = 'Email is required.'; return false; }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
    fieldErrors.value.email = 'Please enter a valid email address.'; return false;
  }
  if (FREE_DOMAINS.has(val.split('@')[1].toLowerCase())) {
    fieldErrors.value.email = 'Please use your work email — personal inboxes are not accepted.'; return false;
  }
  fieldErrors.value.email = '';
  return true;
}

function validateAll() {
  let valid = true;
  const required = { firstname: 'First name', lastname: 'Last name', company: 'Company name', jobtitle: 'Job title' };
  for (const [key, label] of Object.entries(required)) {
    if (!form.value[key].trim()) {
      fieldErrors.value[key] = `${label} is required.`;
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
    const res = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${FORM_ID}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fields: [
            { objectTypeId: '0-1', name: 'firstname', value: form.value.firstname.trim() },
            { objectTypeId: '0-1', name: 'lastname',  value: form.value.lastname.trim() },
            { objectTypeId: '0-1', name: 'email',     value: form.value.email.trim() },
            { objectTypeId: '0-1', name: 'company',   value: form.value.company.trim() },
            { objectTypeId: '0-1', name: 'jobtitle',  value: form.value.jobtitle.trim() },
            { objectTypeId: '0-1', name: 'visitor_id', value: getVisitorId() },
          ],
          context: {
            pageUri: window.location.href,
            pageName: 'Claims 101',
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
  } catch {
    submitError.value = 'Something went wrong — please try again or email us at hello@butfor.co.';
  } finally {
    loading.value = false;
  }
}
</script>
