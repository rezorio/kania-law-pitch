<template>
  <section class="mx-auto max-w-6xl px-4 sm:px-6 py-20">
    <p class="text-[0.65rem] tracking-tag uppercase text-sage">Oklahoma coverage</p>
    <h2 class="font-display text-3xl sm:text-5xl mt-2">Tulsa at the center. The state in reach.</h2>
    <GoldRule class="mt-6" />

    <div class="mt-10 grid lg:grid-cols-2 gap-12 items-center">
      <svg viewBox="0 0 100 70" class="w-full text-forest" role="img" aria-label="Map of Oklahoma with Kania Law office cities">
        <!-- Simplified Oklahoma outline including panhandle -->
        <path
          fill="#1E3A32"
          fill-opacity="0.92"
          d="M8 28 H28 V22 H92 V58 H28 V50 H8 Z"
        />
        <path fill="none" stroke="#C4A36A" stroke-width="0.6" d="M8 28 H28 V22 H92 V58 H28 V50 H8 Z" />
        <g v-for="loc in locations" :key="loc.id">
          <circle :cx="loc.x" :cy="loc.y" r="1.6" fill="#C4A36A" />
          <text :x="loc.x + 2.2" :y="loc.y + 1.2" fill="#F4F0E8" font-size="3.2" font-family="Figtree, sans-serif">
            {{ loc.name }}
          </text>
        </g>
      </svg>

      <ul class="space-y-4">
        <li v-for="loc in locations" :key="loc.id" class="border-l border-gold pl-4">
          <p class="text-[0.65rem] tracking-tag uppercase text-sage">{{ loc.role }}</p>
          <p class="font-display text-xl">{{ loc.name }}</p>
          <a :href="loc.href" class="text-sm text-forest hover:text-sage">{{ loc.phone }}</a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { locations } from '../../content/locations.js'
import GoldRule from '../ui/GoldRule.vue'
</script>
