<template>
  <article class="mx-auto max-w-6xl px-4 sm:px-6 py-16">
    <p class="text-[0.65rem] tracking-tag uppercase text-sage">Our attorneys</p>
    <h1 class="font-display text-4xl sm:text-6xl mt-2">Tulsa counsel, in your corner.</h1>
    <GoldRule class="mt-6" />

    <section v-if="charles" class="mt-12 grid lg:grid-cols-3 gap-10 bg-white/50 border border-ink/5 p-6 sm:p-10">
      <img
        v-if="charles.photo"
        :src="charlesPhoto"
        :alt="charles.name"
        class="h-40 w-40 object-cover object-top grayscale-[15%]"
      />
      <Monogram v-else :initials="charles.initials" size="lg" />
      <div class="lg:col-span-2">
        <h2 class="font-display text-3xl">{{ charles.name }}</h2>
        <p class="text-sage mt-1">{{ charles.role }}</p>
        <p class="mt-4 leading-relaxed text-ink/80">{{ charles.bio }}</p>
        <h3 class="font-display text-xl mt-8">Bar admissions</h3>
        <ul class="mt-2 text-sm space-y-1 text-ink/75">
          <li v-for="a in charles.admissions" :key="a">{{ a }}</li>
        </ul>
        <h3 class="font-display text-xl mt-6">Education</h3>
        <ul class="mt-2 text-sm space-y-1 text-ink/75">
          <li v-for="e in charles.education" :key="e">{{ e }}</li>
        </ul>
      </div>
    </section>

    <div class="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div v-for="a in attorneys.filter((x) => !x.featured)" :key="a.slug" class="border border-ink/10 p-5">
        <Monogram :initials="a.initials" />
        <p class="mt-3 font-display text-lg">{{ a.name }}</p>
        <p class="text-sm text-ink/60">{{ a.role }}</p>
      </div>
    </div>

    <h2 class="font-display text-3xl mt-16">Office staff</h2>
    <ul class="mt-4 space-y-2">
      <li v-for="s in staff" :key="s.name">
        <span class="font-medium">{{ s.name }}</span>
        <span class="text-ink/60"> — {{ s.role }}</span>
      </li>
    </ul>
  </article>
</template>

<script setup>
import { computed } from 'vue'
import { attorneys, staff } from '../content/attorneys.js'
import GoldRule from '../components/ui/GoldRule.vue'
import Monogram from '../components/ui/Monogram.vue'
import charlesPhoto from '../assets/images/charles-kania.jpg'

const charles = computed(() => attorneys.find((a) => a.featured))
</script>
