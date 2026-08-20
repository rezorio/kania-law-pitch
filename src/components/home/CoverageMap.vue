<template>
  <section class="bg-forest text-cream py-20 sm:py-24">
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <p class="text-[0.65rem] tracking-tag uppercase text-gold">State of Oklahoma</p>
      <div class="mt-3 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
        <h2 class="font-display text-3xl sm:text-5xl max-w-xl leading-tight">
          Offices across Oklahoma — Tulsa at the center.
        </h2>
        <p class="max-w-sm text-cream/70 text-sm leading-relaxed">
          From the Central Corridor to Northeast Oklahoma, the same firm standards in every market we serve.
        </p>
      </div>
      <GoldRule class="mt-8" />

      <div class="mt-12 grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        <div class="lg:col-span-8">
          <div class="relative border border-gold/25 bg-forest/40 p-3 sm:p-5">
            <div class="absolute top-3 left-3 sm:top-4 sm:left-4 z-10">
              <p class="text-[0.6rem] tracking-tag uppercase text-gold">Map of Oklahoma</p>
              <p class="font-display text-xl sm:text-2xl leading-none mt-0.5">OKLAHOMA</p>
            </div>

            <svg
              viewBox="0 0 240 110"
              class="w-full mt-8 sm:mt-4"
              role="img"
              aria-label="Map of Oklahoma showing Kania Law offices by region"
            >
              <!-- Soft land plate -->
              <path :d="stateOutline" fill="rgba(244,240,232,0.03)" />

              <!-- Differentiated regions -->
              <path
                v-for="region in regions"
                :key="region.id"
                :d="region.path"
                :fill="regionFill(region.id)"
                :stroke="active.region === region.id ? '#C4A36A' : 'rgba(196,163,106,0.35)'"
                :stroke-width="active.region === region.id ? 1.1 : 0.5"
                class="transition-all duration-300"
              />

              <!-- Outer Oklahoma silhouette (panhandle = unmistakable) -->
              <path
                :d="stateOutline"
                fill="none"
                stroke="#C4A36A"
                stroke-width="1.2"
              />

              <!-- Region names on the map -->
              <text
                v-for="region in regions"
                :key="`label-${region.id}`"
                :x="region.labelX"
                :y="region.labelY"
                text-anchor="middle"
                fill="rgba(196,163,106,0.75)"
                font-size="4.5"
                letter-spacing="0.18em"
                font-family="Figtree, sans-serif"
                class="uppercase"
              >
                {{ region.name }}
              </text>

              <!-- City pins + labels -->
              <g v-for="loc in locations" :key="loc.id">
                <circle
                  v-if="active.id === loc.id && !prefersReduced"
                  :cx="loc.x"
                  :cy="loc.y"
                  r="5.5"
                  fill="none"
                  stroke="#C4A36A"
                  stroke-width="0.45"
                  class="pin-ring"
                />
                <circle
                  :cx="loc.x"
                  :cy="loc.y"
                  :r="loc.id === 'tulsa' ? 2.6 : 1.9"
                  :fill="active.id === loc.id ? '#C4A36A' : '#F4F0E8'"
                  class="cursor-pointer"
                  tabindex="0"
                  role="button"
                  :aria-label="`${loc.name}, ${regionName(loc.region)}`"
                  @mouseenter="activeId = loc.id"
                  @focus="activeId = loc.id"
                  @click="activeId = loc.id"
                />
                <text
                  :x="loc.x + loc.labelDx"
                  :y="loc.y + loc.labelDy"
                  :text-anchor="loc.labelDx < 0 ? 'end' : 'start'"
                  :fill="active.id === loc.id ? '#C4A36A' : 'rgba(244,240,232,0.88)'"
                  font-size="3.6"
                  font-family="Figtree, sans-serif"
                  class="pointer-events-none"
                >
                  {{ loc.name }}
                </text>
              </g>
            </svg>

            <!-- Legend -->
            <ul class="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-[0.65rem] tracking-tag uppercase text-cream/65">
              <li v-for="region in regions" :key="`legend-${region.id}`" class="inline-flex items-center gap-2">
                <span
                  class="h-2.5 w-2.5 border border-gold/50"
                  :style="{ background: regionFill(region.id) }"
                />
                {{ region.name }}
                <span v-if="region.id === 'panhandle'" class="normal-case tracking-normal text-cream/40">(shape)</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="lg:col-span-4">
          <p class="text-[0.65rem] tracking-tag uppercase text-gold">{{ active.role }} · {{ regionName(active.region) }} Oklahoma</p>
          <h3 class="font-display text-4xl mt-2">{{ active.name }}</h3>
          <p v-if="active.address" class="mt-4 text-cream/75 text-sm leading-relaxed">{{ active.address }}</p>
          <a
            :href="active.href"
            class="inline-block mt-5 border border-gold px-4 py-2 text-xs tracking-tag uppercase text-gold hover:bg-gold hover:text-ink transition-colors"
          >
            {{ active.phone }}
          </a>
          <p class="mt-8 text-sm text-cream/55 leading-relaxed">
            Select a city on the map or below. Pins mark every Kania Law office in Oklahoma.
          </p>
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
            <span class="block text-[0.55rem] tracking-tag uppercase opacity-70">{{ regionName(loc.region) }}</span>
            <span class="block font-display text-lg mt-1 leading-snug">{{ loc.name }}</span>
          </button>
        </li>
      </ol>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import { locations, regions } from '../../content/locations.js'
import GoldRule from '../ui/GoldRule.vue'
import { usePrefersReducedMotion } from '../../composables/usePrefersReducedMotion.js'

/** Classic Oklahoma silhouette: panhandle west + main body. */
const stateOutline = 'M10 50 H52 V36 H230 V92 H52 V64 H10 Z'

const regionColors = {
  panhandle: 'rgba(196,163,106,0.12)',
  central: 'rgba(63,107,88,0.45)',
  northeast: 'rgba(244,240,232,0.12)',
}

const activeId = ref('tulsa')
const active = computed(() => locations.find((l) => l.id === activeId.value) ?? locations[0])
const { prefersReduced } = usePrefersReducedMotion()

function regionFill(id) {
  return regionColors[id] ?? 'rgba(244,240,232,0.06)'
}

function regionName(id) {
  return regions.find((r) => r.id === id)?.name ?? id
}
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
