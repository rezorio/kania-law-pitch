<template>
  <section class="bg-forest text-cream py-16 sm:py-20">
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <p class="text-[0.65rem] tracking-tag uppercase text-gold mb-8">From the firm’s own words</p>
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="item in proof" :key="item.label">
          <p class="font-display text-3xl sm:text-4xl text-gold">{{ item.value }}</p>
          <p class="mt-2 text-sm text-cream/70 leading-snug">{{ item.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { proof } from '../../content/firm.js'
</script>
