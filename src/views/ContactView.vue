<template>
  <article class="mx-auto max-w-6xl px-4 sm:px-6 py-16 grid lg:grid-cols-2 gap-12">
    <div>
      <p class="text-[0.65rem] tracking-tag uppercase text-sage">Ask a lawyer</p>
      <h1 class="font-display text-4xl sm:text-6xl mt-2">Start with a conversation.</h1>
      <GoldRule class="mt-6" />
      <p class="mt-6 text-ink/75 leading-relaxed">
        Need help with your case? Call {{ firm.phone }} for a free consultation, or send a question. We are experienced Oklahoma counsel and available {{ firm.hours.toLowerCase() }}.
      </p>
      <p class="mt-6">
        {{ firm.address.line1 }}<br />
        {{ firm.address.city }}
      </p>
      <a
        :href="firm.phoneHref"
        class="inline-flex mt-6 bg-gold text-ink px-5 py-3 text-sm uppercase tracking-wide"
      >
        Call {{ firm.phone }}
      </a>

      <iframe
        class="mt-10 w-full h-64 border-0 grayscale"
        title="Map of Kania Law Office in Tulsa"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        src="https://maps.google.com/maps?q=5319%20S.%20Lewis%20Ave%20Suite%20120%20Tulsa%20OK%2074105&z=15&output=embed"
      />
    </div>

    <form class="bg-white/60 border border-ink/10 p-6 sm:p-8 space-y-4" @submit.prevent="submit">
      <p v-if="!formspreeId" class="text-sm bg-cream border border-gold/40 p-3">
        This concept form is a demo. Messages are not delivered. Call
        <a :href="firm.phoneHref" class="underline">{{ firm.phone }}</a>
        to reach the firm.
      </p>
      <label class="block text-sm">
        Name
        <input v-model="form.name" required class="mt-1 w-full border border-ink/15 bg-cream px-3 py-2" />
      </label>
      <label class="block text-sm">
        Email
        <input v-model="form.email" type="email" required class="mt-1 w-full border border-ink/15 bg-cream px-3 py-2" />
      </label>
      <label class="block text-sm">
        Phone
        <input v-model="form.phone" class="mt-1 w-full border border-ink/15 bg-cream px-3 py-2" />
      </label>
      <label class="block text-sm">
        Question
        <textarea v-model="form.question" required rows="5" class="mt-1 w-full border border-ink/15 bg-cream px-3 py-2" />
      </label>
      <button
        type="submit"
        class="bg-forest text-cream px-5 py-3 text-sm uppercase tracking-wide w-full disabled:opacity-50"
        :disabled="status === 'sending'"
      >
        {{ status === 'sending' ? 'Sending…' : 'Ask a lawyer' }}
      </button>
      <p v-if="status === 'sent'" class="text-sm text-sage">Message sent. We will be in touch.</p>
      <p v-if="status === 'error'" class="text-sm text-red-800">Could not send. Please call {{ firm.phone }}.</p>
    </form>
  </article>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { firm } from '../content/firm.js'
import GoldRule from '../components/ui/GoldRule.vue'

const formspreeId = import.meta.env.VITE_FORMSPREE_ID || ''
const status = ref('')
const form = reactive({ name: '', email: '', phone: '', question: '' })

async function submit() {
  if (!formspreeId) {
    status.value = ''
    return
  }
  status.value = 'sending'
  try {
    const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
    status.value = res.ok ? 'sent' : 'error'
  } catch {
    status.value = 'error'
  }
}
</script>
