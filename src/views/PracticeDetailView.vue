<template>
  <article v-if="practice" class="mx-auto max-w-3xl px-4 sm:px-6 py-16">
    <p class="text-[0.65rem] tracking-tag uppercase text-sage">Practice</p>
    <h1 class="font-display text-4xl sm:text-6xl mt-2">{{ practice.name }}</h1>
    <GoldRule class="mt-6" />
    <p class="mt-8 text-lg leading-relaxed text-ink/80">{{ practice.summary }}</p>
    <h2 class="font-display text-2xl mt-12">Matters we handle</h2>
    <ul class="mt-4 space-y-2">
      <li v-for="m in practice.matters" :key="m" class="border-l border-gold pl-4">{{ m }}</li>
    </ul>
    <router-link to="/contact" class="inline-block mt-10 bg-forest text-cream px-5 py-3 text-sm uppercase tracking-wide">
      Ask a lawyer
    </router-link>
  </article>
  <article v-else class="mx-auto max-w-3xl px-4 py-24">
    <p>This practice page is not in the concept demo.</p>
    <router-link to="/practice" class="text-sage underline">Back to practices</router-link>
  </article>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { practices } from '../content/practices.js'
import GoldRule from '../components/ui/GoldRule.vue'

const route = useRoute()
const practice = computed(() => {
  const found = practices.find((p) => p.slug === route.params.slug)
  return found?.hasPage ? found : null
})
</script>
