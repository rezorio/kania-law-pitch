<template>
  <div class="lg:hidden fixed bottom-0 inset-x-0 z-50 border-t border-gold bg-forest p-3">
    <a
      :href="firm.phoneHref"
      class="flex items-center justify-center gap-2 w-full bg-gold text-ink py-3 text-sm font-medium tracking-wide uppercase"
    >
      <Phone :size="16" />
      Free consult · {{ firm.phone }}
    </a>
  </div>
</template>

<script setup>
import { Phone } from 'lucide-vue-next'
import { firm } from '../../content/firm.js'
</script>
