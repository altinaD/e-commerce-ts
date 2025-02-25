<template>
  <header>
    <ul>
      <li v-for="link in links" :key="link">{{ link }}</li>
    </ul>
  </header>
</template>

<script setup lang="ts">
const links: string[] = ['Products']
</script>

<style scoped lang="scss">
ul {
  position: relative;
  display: flex;
  justify-content: center;
  margin: 2rem;
  li {
    font-size: 1.3rem;
    font-family: sans-serif;
  }
}
</style>
