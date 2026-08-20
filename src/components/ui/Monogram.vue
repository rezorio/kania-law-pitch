<template>
  <div
    class="grid place-items-center bg-forest text-gold font-display"
    :class="sizeClass"
    aria-hidden="true"
  >
    {{ initials }}
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  initials: { type: String, required: true },
  size: { type: String, default: 'md' },
})

const sizeClass = computed(() =>
  props.size === 'lg' ? 'h-40 w-40 text-4xl' : 'h-24 w-24 text-2xl',
)
</script>
