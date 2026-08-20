<template>
  <footer class="bg-forest text-cream mt-16 pb-24 lg:pb-0">
    <!-- Closing statement -->
    <div class="border-b border-gold/25">
      <div class="mx-auto max-w-6xl px-4 sm:px-6 py-14 sm:py-20">
        <p class="text-[0.65rem] tracking-tag uppercase text-gold">Kania Law Office</p>
        <div class="mt-4 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <h2 class="font-display text-4xl sm:text-6xl lg:text-7xl leading-[0.95] max-w-2xl">
            In your corner.<br />
            <span class="text-gold">Across Oklahoma.</span>
          </h2>
          <div class="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              :href="firm.phoneHref"
              class="inline-flex items-center justify-center gap-2 bg-gold text-ink px-5 py-3 text-sm uppercase tracking-wide hover:bg-cream transition-colors"
            >
              <Phone :size="15" />
              {{ firm.phone }}
            </a>
            <router-link
              to="/contact"
              class="inline-flex items-center justify-center border border-cream/35 px-5 py-3 text-sm uppercase tracking-wide hover:border-gold hover:text-gold transition-colors"
            >
              Ask a lawyer
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- Columns -->
    <div class="mx-auto max-w-6xl px-4 sm:px-6 py-12 sm:py-14">
      <div class="grid gap-12 lg:grid-cols-12">
        <div class="lg:col-span-4">
          <BrandMark />
          <p class="mt-5 text-sm text-cream/70 max-w-xs leading-relaxed">
            Oklahoma trial lawyers. Large-firm reach, small-firm attention. Available 24/7 for a free phone consultation.
          </p>
          <p class="mt-6 text-sm text-cream/80 leading-relaxed">
            {{ firm.address.line1 }}<br />
            {{ firm.address.city }}
          </p>
        </div>

        <div class="lg:col-span-5">
          <p class="text-[0.65rem] tracking-tag uppercase text-gold mb-4">Practice</p>
          <ul class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5 text-sm">
            <li v-for="p in practices" :key="p.slug">
              <router-link
                :to="p.hasPage ? p.href : '/practice'"
                class="group inline-flex items-baseline gap-2 text-cream/80 hover:text-gold transition-colors"
              >
                <span class="h-px w-3 bg-gold/50 group-hover:w-5 transition-all" aria-hidden="true" />
                {{ p.name }}
              </router-link>
            </li>
          </ul>
        </div>

        <div class="lg:col-span-3">
          <p class="text-[0.65rem] tracking-tag uppercase text-gold mb-4">Navigate</p>
          <ul class="space-y-2.5 text-sm text-cream/80">
            <li v-for="link in nav" :key="link.to">
              <router-link :to="link.to" class="hover:text-gold transition-colors">{{ link.label }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Bottom bar -->
    <div class="border-t border-cream/10">
      <div class="mx-auto max-w-6xl px-4 sm:px-6 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[0.7rem] text-cream/45">
        <span>© {{ year }} Kania Law Office. Concept redesign for pitch use.</span>
        <div class="flex flex-wrap gap-5">
          <router-link to="/pitch" class="hover:text-gold transition-colors">Before &amp; after</router-link>
          <span class="text-cream/25" aria-hidden="true">·</span>
          <span class="tracking-tag uppercase text-gold/70">In Your Corner</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Phone } from 'lucide-vue-next'
import BrandMark from '../ui/BrandMark.vue'
import { firm } from '../../content/firm.js'
import { practices } from '../../content/practices.js'

const year = new Date().getFullYear()

const nav = [
  { to: '/', label: 'Home' },
  { to: '/practice', label: 'Fields of practice' },
  { to: '/about', label: 'About the firm' },
  { to: '/attorneys', label: 'Our attorneys' },
  { to: '/contact', label: 'Ask a lawyer' },
  { to: '/pitch', label: 'Pitch comparison' },
]
</script>
