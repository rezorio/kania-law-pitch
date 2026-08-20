<template>
  <div ref="el" class="gold-rule w-16 mb-6" :style="{ transform: drawn ? 'scaleX(1)' : 'scaleX(0)' }" />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { usePrefersReducedMotion } from '../../composables/usePrefersReducedMotion.js'

const el = ref(null)
const drawn = ref(false)
const { prefersReduced } = usePrefersReducedMotion()

onMounted(() => {
  if (prefersReduced.value) {
    drawn.value = true
    return
  }
  const io = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) drawn.value = true
    },
    { threshold: 0.4 },
  )
  if (el.value) io.observe(el.value)
})
</script>
