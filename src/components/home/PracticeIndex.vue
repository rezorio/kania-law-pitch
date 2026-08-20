<template>
  <section class="mx-auto max-w-6xl px-4 sm:px-6 py-20">
    <p class="text-[0.65rem] tracking-tag uppercase text-sage">Fields of practice</p>
    <h2 class="font-display text-3xl sm:text-5xl mt-2 max-w-xl">The work we take personally.</h2>
    <GoldRule class="mt-6" />

    <div class="mt-10 grid lg:grid-cols-2 gap-10 items-start">
      <ol class="divide-y divide-ink/10">
        <li v-for="(p, i) in practices" :key="p.slug">
          <router-link
            :to="p.hasPage ? p.href : '/practice'"
            class="group flex items-baseline justify-between gap-4 py-4"
            @mouseenter="active = i"
            @focus="active = i"
          >
            <span
              class="font-display text-2xl sm:text-4xl leading-tight transition-colors"
              :class="active === i ? 'text-forest' : 'text-ink/40 group-hover:text-forest'"
            >
              {{ p.name }}
            </span>
            <span class="hidden sm:block h-px flex-1 bg-gold/0 group-hover:bg-gold transition-colors" />
          </router-link>
        </li>
      </ol>

      <div class="relative min-h-[280px] lg:min-h-[520px] lg:sticky lg:top-28">
        <img
          :src="imageSrc(practices[active].image)"
          :alt="practices[active].name"
          class="h-full w-full object-cover grayscale-[30%]"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-forest/80 via-transparent to-transparent" />
        <p class="absolute bottom-0 left-0 right-0 p-6 text-cream font-display text-xl sm:text-2xl leading-snug">
          {{ practices[active].line }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { practices } from '../../content/practices.js'
import GoldRule from '../ui/GoldRule.vue'
import tulsaStreet from '../../assets/images/tulsa-street.jpg'
import tulsaAerial from '../../assets/images/tulsa-aerial.jpg'
import tulsaDusk from '../../assets/images/tulsa-dusk.jpg'

const files = {
  'tulsa-street.jpg': tulsaStreet,
  'tulsa-aerial.jpg': tulsaAerial,
  'tulsa-dusk.jpg': tulsaDusk,
}

const active = ref(0)
const imageSrc = (name) => files[name]
</script>
