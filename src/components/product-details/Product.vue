<template>
  <div>
    <h1>Product {{ id }}</h1>
    this is product detail
  </div>
</template>


<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute  } from 'vue-router';

const route = useRoute()
const id = ref(parseInt(route.params.id as string, 10) || 0);
watch(() => route.params.id, (newId) => {
  id.value = parseInt(newId as string, 10);
})
console.log(id)
</script>
