<template>
  <section class="bg-forest text-cream py-20 sm:py-24">
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <p class="text-[0.65rem] tracking-tag uppercase text-gold">Oklahoma coverage</p>
      <div class="mt-3 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
        <h2 class="font-display text-3xl sm:text-5xl max-w-xl leading-tight">
          Seven offices. Tulsa at the center.
        </h2>
        <p class="max-w-sm text-cream/70 text-sm leading-relaxed">
          Large-firm reach across the state. The same counsel when you call from Tulsa, Oklahoma City, or a county seat in between.
        </p>
      </div>
      <GoldRule class="mt-8" />

      <div class="mt-12 grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        <div class="lg:col-span-7 relative">
          <svg
            viewBox="0 0 200 90"
            class="w-full"
            role="img"
            aria-label="Oklahoma offices of Kania Law"
          >
            <path
              :d="oklahomaPath"
              fill="rgba(244,240,232,0.04)"
              stroke="#C4A36A"
              stroke-width="0.7"
            />
            <g v-for="loc in locations" :key="loc.id">
              <circle
                v-if="active.id === loc.id && !prefersReduced"
                :cx="loc.x"
                :cy="loc.y"
                r="4.8"
                fill="none"
                stroke="#C4A36A"
                stroke-width="0.4"
                class="pin-ring"
              />
              <circle
                :cx="loc.x"
                :cy="loc.y"
                :r="loc.id === 'tulsa' ? 2.4 : 1.7"
                :fill="active.id === loc.id ? '#C4A36A' : '#F4F0E8'"
                class="cursor-pointer"
                @mouseenter="activeId = loc.id"
                @focus="activeId = loc.id"
                tabindex="0"
                role="button"
                :aria-label="loc.name"
              />
            </g>
          </svg>
          <p class="mt-3 text-[0.65rem] tracking-tag uppercase text-gold/80">Select a city</p>
        </div>

        <div class="lg:col-span-5">
          <p class="text-[0.65rem] tracking-tag uppercase text-gold">{{ active.role }}</p>
          <h3 class="font-display text-4xl mt-2">{{ active.name }}</h3>
          <p v-if="active.address" class="mt-4 text-cream/75 text-sm leading-relaxed">{{ active.address }}</p>
          <a :href="active.href" class="inline-block mt-5 border border-gold px-4 py-2 text-xs tracking-tag uppercase text-gold hover:bg-gold hover:text-ink transition-colors">
            {{ active.phone }}
          </a>
        </div>
      </div>

      <ol class="mt-14 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-px bg-gold/30 border border-gold/30">
        <li v-for="loc in locations" :key="`rail-${loc.id}`">
          <button
            type="button"
            class="w-full h-full text-left px-3 py-4 transition-colors"
            :class="active.id === loc.id ? 'bg-gold text-ink' : 'bg-forest hover:bg-forest/80'"
            @click="activeId = loc.id"
            @mouseenter="activeId = loc.id"
          >
            <span class="block text-[0.6rem] tracking-tag uppercase opacity-70">{{ loc.role }}</span>
            <span class="block font-display text-lg mt-1 leading-snug">{{ loc.name }}</span>
          </button>
        </li>
      </ol>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import { locations } from '../../content/locations.js'
import GoldRule from '../ui/GoldRule.vue'
import { usePrefersReducedMotion } from '../../composables/usePrefersReducedMotion.js'

const oklahomaPath =
  'M4 42 H40 V26 H196 V76 C168 82 118 84 78 80 C58 78 44 72 40 64 V54 H4 Z'

const activeId = ref('tulsa')
const active = computed(() => locations.find((l) => l.id === activeId.value) ?? locations[0])
const { prefersReduced } = usePrefersReducedMotion()
</script>

<style scoped>
.pin-ring {
  transform-origin: center;
  transform-box: fill-box;
  animation: pin-pulse 2.4s ease-out infinite;
}

@keyframes pin-pulse {
  from {
    opacity: 0.9;
    transform: scale(0.7);
  }
  to {
    opacity: 0;
    transform: scale(1.6);
  }
}

@media (prefers-reduced-motion: reduce) {
  .pin-ring {
    animation: none;
  }
}
</style>
