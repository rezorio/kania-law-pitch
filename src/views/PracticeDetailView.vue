<template>
  <article v-if="practice" class="mx-auto max-w-6xl px-4 sm:px-6 py-16">
    <div class="grid lg:grid-cols-12 gap-10 lg:gap-16">
      <div class="lg:col-span-7">
        <p class="text-[0.65rem] tracking-tag uppercase text-sage">Practice</p>
        <h1 class="font-display text-4xl sm:text-6xl mt-2">{{ practice.name }}</h1>
        <GoldRule class="mt-6" />
        <p class="mt-8 text-lg leading-relaxed text-ink/80">{{ practice.summary }}</p>
        <router-link
          to="/contact"
          class="inline-block mt-10 bg-forest text-cream px-5 py-3 text-sm uppercase tracking-wide"
        >
          Ask a lawyer
        </router-link>
      </div>
      <div class="lg:col-span-5">
        <h2 class="font-display text-2xl">Matters we handle</h2>
        <ul class="mt-6 space-y-0 divide-y divide-ink/10 border-y border-ink/10">
          <li v-for="m in practice.matters" :key="m" class="py-3 border-l-0 pl-0 flex gap-3">
            <span class="mt-2 h-px w-4 shrink-0 bg-gold" aria-hidden="true" />
            <span>{{ m }}</span>
          </li>
        </ul>
      </div>
    </div>
  </article>
  <article v-else class="mx-auto max-w-6xl px-4 sm:px-6 py-24">
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
