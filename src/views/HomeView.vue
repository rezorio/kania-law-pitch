<template>
  <div>
    <section class="relative min-h-[78vh] flex items-end">
      <img
        :src="hero"
        alt="Downtown Tulsa"
        class="absolute inset-0 h-full w-full object-cover"
      />
      <div class="absolute inset-0 bg-forest/55" />
      <div class="relative mx-auto max-w-6xl px-4 sm:px-6 pb-16 pt-32 text-cream">
        <p class="text-[0.7rem] tracking-tag uppercase text-gold">Tulsa lawyers · serving Oklahoma</p>
        <h1 class="hero-line font-display text-4xl sm:text-6xl lg:text-7xl max-w-3xl mt-4 leading-[1.05]">
          When the unexpected happens, put our team in your corner.
        </h1>
        <p class="mt-6 max-w-xl text-cream/85 leading-relaxed">
          Criminal defense, family law, injury, work injuries, bankruptcy, business, immigration, and estate work — one firm, personal attention, trial-ready when it counts.
        </p>
        <div class="mt-8 flex flex-wrap gap-3">
          <router-link
            to="/contact"
            class="bg-gold text-ink px-5 py-3 text-sm tracking-wide uppercase"
          >
            Ask a lawyer
          </router-link>
          <a
            :href="firm.phoneHref"
            class="border border-cream/40 px-5 py-3 text-sm tracking-wide uppercase hover:border-gold hover:text-gold"
          >
            {{ firm.phone }}
          </a>
        </div>
      </div>
    </section>

    <PracticeIndex />
    <ProofRow />

    <section class="mx-auto max-w-6xl px-4 sm:px-6 py-20 grid lg:grid-cols-2 gap-12">
      <div>
        <p class="text-[0.65rem] tracking-tag uppercase text-sage">The firm</p>
        <h2 class="font-display text-3xl sm:text-5xl mt-2">Large-firm resources. Small-firm attention.</h2>
        <GoldRule class="mt-6" />
        <p class="mt-6 text-ink/80 leading-relaxed">
          Our philosophy is a one-stop, total-solution approach to legal needs in Oklahoma. We are known for aggressive representation — and we still aim to solve the issue, when possible, without costly litigation.
        </p>
        <router-link to="/about" class="inline-block mt-6 text-sage underline underline-offset-4">Read about the firm</router-link>
      </div>
      <div class="grid grid-cols-2 gap-3">
        <div v-for="a in attorneys.slice(0, 4)" :key="a.slug" class="bg-white/40 border border-ink/5 p-4">
          <img
            v-if="a.photo"
            :src="charlesPhoto"
            :alt="a.name"
            class="h-24 w-24 object-cover object-top grayscale-[15%]"
          />
          <Monogram v-else :initials="a.initials" />
          <p class="mt-3 font-display">{{ a.name.replace(', Esq.', '') }}</p>
          <p class="text-xs text-ink/60 mt-1">{{ a.role }}</p>
        </div>
      </div>
    </section>

    <CoverageMap />

    <section class="bg-ink text-cream py-16">
      <div class="mx-auto max-w-6xl px-4 sm:px-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div>
          <p class="font-display text-3xl">Need help with your case tonight?</p>
          <p class="text-cream/70 mt-2">Free phone consultation. {{ firm.hours }}.</p>
        </div>
        <a :href="firm.phoneHref" class="bg-gold text-ink px-6 py-3 uppercase tracking-wide text-sm">Call {{ firm.phone }}</a>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import PracticeIndex from '../components/home/PracticeIndex.vue'
import ProofRow from '../components/home/ProofRow.vue'
import CoverageMap from '../components/home/CoverageMap.vue'
import GoldRule from '../components/ui/GoldRule.vue'
import Monogram from '../components/ui/Monogram.vue'
import { firm } from '../content/firm.js'
import { attorneys } from '../content/attorneys.js'
import hero from '../assets/images/tulsa-aerial.jpg'
import charlesPhoto from '../assets/images/charles-kania.jpg'
import { usePrefersReducedMotion } from '../composables/usePrefersReducedMotion.js'

const { prefersReduced } = usePrefersReducedMotion()

onMounted(() => {
  if (prefersReduced.value) return
  gsap.from('.hero-line', { y: 24, opacity: 0, duration: 0.9, ease: 'power2.out' })
})
</script>
