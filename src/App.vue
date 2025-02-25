<template>
  <Header />
  <main class="main">
    <router-view v-slot="{Component}">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
</template>

<script setup lang="ts">
import Header from '@/components/header/Header.vue'
</script>

<style>
.main {
  width: 100%;
  display: grid;
  grid-template-columns: minmax(0, 3fr) minmax(0, 2fr);
  gap: 15px;
  overflow-x: hidden;
  padding: 0;
  margin: 0 auto;
}
</style>
