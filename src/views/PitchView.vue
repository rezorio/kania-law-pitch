<template>
  <article class="mx-auto max-w-6xl px-4 sm:px-6 py-16">
    <p class="text-[0.65rem] tracking-tag uppercase text-sage">The pitch</p>
    <h1 class="font-display text-4xl sm:text-6xl mt-2">Their site. Then this one.</h1>
    <GoldRule class="mt-6" />
    <p class="mt-6 max-w-2xl text-ink/75 leading-relaxed">
      Open this page first in the meeting. Same firm, same colors, same slogan — a layout a client would actually use on a phone.
    </p>

    <div class="mt-12 grid lg:grid-cols-2 gap-8">
      <figure>
        <p class="text-[0.65rem] tracking-tag uppercase text-ink/50 mb-3">Live — kanialaw.com</p>
        <img
          src="/before-kanialaw.jpg"
          alt="Current Kania Law Office website"
          class="w-full border border-ink/10 object-cover object-top max-h-[70vh]"
        />
        <figcaption class="mt-3 text-sm text-ink/60">Fixed-width WordPress, clipart, and a homepage that reads like a sitemap.</figcaption>
      </figure>
      <figure>
        <p class="text-[0.65rem] tracking-tag uppercase text-ink/50 mb-3">Concept — this demo</p>
        <img
          :src="after"
          alt="Concept redesign homepage hero"
          class="w-full border border-ink/10 object-cover object-top max-h-[70vh]"
        />
        <figcaption class="mt-3 text-sm text-ink/60">
          Forest, gold, In Your Corner — rebuilt. <router-link to="/" class="text-sage underline">Enter the site</router-link>
        </figcaption>
      </figure>
    </div>
  </article>
</template>

<script setup>
import GoldRule from '../components/ui/GoldRule.vue'
import after from '../assets/images/tulsa-aerial.jpg'
</script>
