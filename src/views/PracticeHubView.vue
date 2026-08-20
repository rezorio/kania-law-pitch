<template>
  <article class="mx-auto max-w-6xl px-4 sm:px-6 py-16">
    <p class="text-[0.65rem] tracking-tag uppercase text-sage">Fields of practice</p>
    <h1 class="font-display text-4xl sm:text-6xl mt-2">One firm. The matters Oklahomans actually face.</h1>
    <GoldRule class="mt-6" />
    <p class="mt-6 max-w-2xl text-ink/75 leading-relaxed">
      Trial lawyers for criminal defense, family disputes, injury, work injuries, business, bankruptcy, estate planning, immigration, and tax. Three practices are fully designed in this concept; the rest are listed as they would appear in a full build.
    </p>

    <ul class="mt-12 divide-y divide-ink/10">
      <li v-for="p in practices" :key="p.slug" class="py-8 grid md:grid-cols-3 gap-4">
        <h2 class="font-display text-2xl md:text-3xl">{{ p.name }}</h2>
        <p class="md:col-span-2 text-ink/75">
          {{ p.line }}
          <router-link v-if="p.hasPage" :to="p.href" class="ml-2 text-sage underline underline-offset-4">Read the overview</router-link>
        </p>
      </li>
    </ul>
  </article>
</template>

<script setup>
import { practices } from '../content/practices.js'
import GoldRule from '../components/ui/GoldRule.vue'
</script>
