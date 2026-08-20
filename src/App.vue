<template>
  <div class="min-h-screen flex flex-col">
    <PitchBanner />
    <AppHeader />
    <main class="flex-1">
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <AppFooter />
    <StickyConsult />
  </div>
</template>

<script setup>
import PitchBanner from './components/layout/PitchBanner.vue'
import AppHeader from './components/layout/AppHeader.vue'
import AppFooter from './components/layout/AppFooter.vue'
import StickyConsult from './components/layout/StickyConsult.vue'
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.28s ease;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}

@media (prefers-reduced-motion: reduce) {
  .page-enter-active,
  .page-leave-active {
    transition: none;
  }
}
</style>
