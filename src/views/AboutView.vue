<template>
  <article class="mx-auto max-w-6xl px-4 sm:px-6 py-16">
    <div class="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end">
      <div class="lg:col-span-7">
        <p class="text-[0.65rem] tracking-tag uppercase text-sage">About the firm</p>
        <h1 class="font-display text-4xl sm:text-6xl mt-2 leading-tight">
          A one-stop approach to Oklahoma law.
        </h1>
        <GoldRule class="mt-6" />
      </div>
      <p class="lg:col-span-5 text-ink/75 leading-relaxed lg:pb-2">
        From bankruptcy, personal injury, and workers’ compensation to criminal law, family law, immigration, and civil litigation, our Tulsa attorneys offer complete legal solutions.
      </p>
    </div>

    <div class="mt-14 grid lg:grid-cols-12 gap-10 lg:gap-16">
      <div class="lg:col-span-7 space-y-6 text-ink/80 leading-relaxed">
        <p>
          Although our reputation is aggressive representation, the goal is to solve the legal issue — when possible — without costly litigation. We offer the resources of a large Oklahoma firm and the personal attention of a small one.
        </p>
        <p>
          That means one team for the matters Oklahomans actually face: injury and work injuries, family disputes, criminal defense, business and bankruptcy, estate planning, immigration, and tax — with trial counsel when the courtroom is required.
        </p>
        <router-link
          to="/attorneys"
          class="inline-flex mt-2 border border-forest px-5 py-3 text-sm uppercase tracking-wide text-forest hover:bg-forest hover:text-cream transition-colors"
        >
          Meet the attorneys
        </router-link>
      </div>

      <aside class="lg:col-span-5 bg-forest text-cream p-6 sm:p-8">
        <p class="text-[0.65rem] tracking-tag uppercase text-gold">Headquarters</p>
        <h2 class="font-display text-3xl mt-2">Tulsa</h2>
        <p class="mt-5 text-cream/80 leading-relaxed">
          {{ firm.address.line1 }}<br />
          {{ firm.address.city }}
        </p>
        <a :href="firm.phoneHref" class="block mt-5 text-gold hover:underline">{{ firm.phone }}</a>
        <p class="mt-6 text-sm text-cream/60">{{ firm.hours }} · Free phone consultation</p>
      </aside>
    </div>

    <section class="mt-20">
      <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <p class="text-[0.65rem] tracking-tag uppercase text-sage">Regional offices</p>
          <h2 class="font-display text-3xl sm:text-4xl mt-2">Across Oklahoma</h2>
        </div>
        <p class="text-sm text-ink/60 max-w-xs">
          Same firm standards in every market we serve.
        </p>
      </div>
      <GoldRule class="mt-6" />

      <ul class="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/10 border border-ink/10">
        <li
          v-for="loc in regional"
          :key="loc.id"
          class="bg-cream p-5 sm:p-6"
        >
          <p class="text-[0.65rem] tracking-tag uppercase text-sage">Regional</p>
          <p class="font-display text-2xl mt-2">{{ loc.name }}</p>
          <p v-if="loc.address" class="mt-3 text-sm text-ink/65 leading-relaxed">{{ loc.address }}</p>
          <a :href="loc.href" class="inline-block mt-4 text-sm text-forest hover:text-sage">{{ loc.phone }}</a>
        </li>
      </ul>
    </section>
  </article>
</template>

<script setup>
import { computed } from 'vue'
import { firm } from '../content/firm.js'
import { locations } from '../content/locations.js'
import GoldRule from '../components/ui/GoldRule.vue'

const regional = computed(() => locations.filter((l) => l.id !== 'tulsa'))
</script>
