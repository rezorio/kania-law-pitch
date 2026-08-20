<template>
  <article class="mx-auto max-w-3xl px-4 sm:px-6 py-16">
    <p class="text-[0.65rem] tracking-tag uppercase text-sage">About the firm</p>
    <h1 class="font-display text-4xl sm:text-6xl mt-2">A one-stop approach to Oklahoma law.</h1>
    <GoldRule class="mt-6" />
    <p class="mt-8 leading-relaxed text-ink/80">
      From bankruptcy, personal injury, and workers’ compensation to criminal law, family law, immigration, and civil litigation, our Tulsa attorneys offer complete legal solutions. Although our reputation is aggressive representation, the goal is to solve the legal issue — when possible — without costly litigation. We offer the resources of a large Oklahoma firm and the personal attention of a small one.
    </p>

    <h2 class="font-display text-3xl mt-14">Tulsa headquarters</h2>
    <p class="mt-4 leading-relaxed">
      {{ firm.address.line1 }}<br />
      {{ firm.address.city }}<br />
      {{ firm.phone }} · {{ firm.email }}
    </p>

    <h2 class="font-display text-3xl mt-14">Regional offices</h2>
    <ul class="mt-4 space-y-3">
      <li v-for="loc in locations.filter((l) => l.id !== 'tulsa')" :key="loc.id">
        <span class="font-medium">{{ loc.name }}</span>
        — {{ loc.phone }}
      </li>
    </ul>

    <router-link to="/attorneys" class="inline-block mt-10 text-sage underline underline-offset-4">Meet the attorneys</router-link>
  </article>
</template>

<script setup>
import { firm } from '../content/firm.js'
import { locations } from '../content/locations.js'
import GoldRule from '../components/ui/GoldRule.vue'
</script>
