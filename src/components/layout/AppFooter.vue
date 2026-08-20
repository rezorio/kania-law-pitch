<template>
  <footer class="bg-forest text-cream mt-16 pb-24 lg:pb-10">
    <div class="mx-auto max-w-6xl px-4 sm:px-6 py-14 grid gap-10 md:grid-cols-3">
      <div>
        <BrandMark />
        <p class="mt-5 text-sm text-cream/75 max-w-xs leading-relaxed">
          Oklahoma trial lawyers. Large-firm reach, small-firm attention.
        </p>
      </div>
      <div>
        <p class="text-[0.65rem] tracking-tag uppercase text-gold mb-3">Practice</p>
        <ul class="space-y-2 text-sm text-cream/80">
          <li v-for="p in practices" :key="p.slug">
            <router-link :to="p.hasPage ? p.href : '/practice'" class="hover:text-gold">{{ p.name }}</router-link>
          </li>
        </ul>
      </div>
      <div>
        <p class="text-[0.65rem] tracking-tag uppercase text-gold mb-3">Tulsa office</p>
        <p class="text-sm leading-relaxed text-cream/80">
          {{ firm.address.line1 }}<br />
          {{ firm.address.city }}<br />
          <a :href="firm.phoneHref" class="text-gold hover:underline">{{ firm.phone }}</a>
        </p>
      </div>
    </div>
    <div class="border-t border-cream/10 mx-auto max-w-6xl px-4 sm:px-6 py-5 text-[0.7rem] text-cream/50 flex flex-wrap gap-4 justify-between">
      <span>© {{ year }} Kania Law Office. Concept redesign for pitch use.</span>
      <router-link to="/pitch" class="hover:text-gold">Before &amp; after</router-link>
    </div>
  </footer>
</template>

<script setup>
import BrandMark from '../ui/BrandMark.vue'
import { firm } from '../../content/firm.js'
import { practices } from '../../content/practices.js'

const year = new Date().getFullYear()
</script>
