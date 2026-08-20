<template>
  <header
    :class="[
      'sticky top-0 z-40 border-b transition-all duration-300',
      compact ? 'border-gold/20 bg-forest/95 backdrop-blur py-2' : 'border-transparent bg-forest py-4',
    ]"
  >
    <div class="mx-auto max-w-6xl px-4 sm:px-6 flex items-center justify-between gap-4">
      <router-link to="/" class="text-cream hover:opacity-90">
        <BrandMark />
      </router-link>

      <nav class="hidden lg:flex items-center gap-7 text-sm text-cream/85">
        <router-link
          v-for="item in links"
          :key="item.to"
          :to="item.to"
          class="hover:text-gold transition-colors"
          :class="{ 'text-gold': isActive(item.to) }"
        >
          {{ item.label }}
        </router-link>
      </nav>

      <a
        :href="firm.phoneHref"
        class="hidden sm:inline-flex items-center gap-2 border border-gold px-3 py-2 text-xs tracking-tag uppercase text-gold hover:bg-gold hover:text-ink transition-colors"
      >
        <Phone :size="14" />
        {{ firm.phone }}
      </a>

      <button
        type="button"
        class="lg:hidden text-cream p-2"
        aria-label="Open menu"
        @click="open = !open"
      >
        <Menu v-if="!open" :size="22" />
        <X v-else :size="22" />
      </button>
    </div>

    <div v-if="open" class="lg:hidden border-t border-gold/20 bg-forest px-4 py-4 space-y-3">
      <router-link
        v-for="item in links"
        :key="item.to"
        :to="item.to"
        class="block text-cream"
        @click="open = false"
      >
        {{ item.label }}
      </router-link>
      <a :href="firm.phoneHref" class="block text-gold">Call {{ firm.phone }}</a>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { Phone, Menu, X } from 'lucide-vue-next'
import BrandMark from '../ui/BrandMark.vue'
import { firm } from '../../content/firm.js'

const route = useRoute()
const isActive = (to) => (to === '/' ? route.path === '/' : route.path.startsWith(to))

const links = [
  { to: '/', label: 'Home' },
  { to: '/practice', label: 'Practice' },
  { to: '/about', label: 'About' },
  { to: '/attorneys', label: 'Attorneys' },
  { to: '/contact', label: 'Ask a Lawyer' },
]

const open = ref(false)
const compact = ref(false)

const onScroll = () => {
  compact.value = window.scrollY > 24
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>
