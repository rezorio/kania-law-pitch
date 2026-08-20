<template>
  <span class="inline-flex items-center gap-3 min-w-0">
    <span
      class="relative grid h-11 w-11 shrink-0 place-items-center border border-gold bg-gold text-ink"
      aria-hidden="true"
    >
      <span class="absolute inset-[3px] border border-forest/25 pointer-events-none" />
      <span class="font-display text-[1.55rem] leading-none font-semibold">K</span>
    </span>
    <span v-if="showWordmark" class="flex flex-col min-w-0 leading-none">
      <span class="font-display text-[0.95rem] sm:text-lg tracking-[0.12em] uppercase">Kania Law Office</span>
      <span class="mt-1 text-[0.62rem] tracking-tag uppercase text-gold">In Your Corner</span>
    </span>
  </span>
</template>

<script setup>
defineProps({
  showWordmark: { type: Boolean, default: true },
})
</script>
