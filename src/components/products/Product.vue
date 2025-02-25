<template>
  <div class="product">
    <div class="image-wrapper" :style="{ backgroundColor: randomColor }"></div>
    <div class="detail">
      <h3 class="name">{{ product.name }}</h3>
      <span class="description">{{ product.description }}</span>
      <span class="price">${{ product.price }}</span>
      <span class="cat">{{ product.category }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Product {
  id: number
  name: string
  description: string
  category: string
  image: string
  price: number
}

const props = defineProps({
  product: {
    type: Object as () => Product,
    required: true,
  },
})

const randomColor = computed(() => {
  const randomValue = () => Math.floor(Math.random() * 256)
  return `rgb(${randomValue()}, ${randomValue()}, ${randomValue()})`
})
</script>

<style scoped lang="scss">
.product {
  height: 100%;
  padding: 15px;
  &:hover {
    .image-wrapper {
      transform: scale(1.125);
    }
  }
  .image-wrapper {
    width: 100%;
    height: 50%;
    background-color: red;
    overflow: hidden;
    transition: transform 0.3s ease-in-out;
  }
  .detail {
    overflow: hidden;
    h3 {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: calc(100% + 1vw);
      font-family: sans-serif;
      padding: 1rem;
      text-align: center;
    }
    .description,
    .cat {
      font-family: sans-serif;
      font-size: 0.85rem;
      text-align: center;
      display: block;
    }
    .price {
      margin-top: 10px;
      text-align: center;
      display: block;
      color: #b04848;
    }
    .cat {
      margin-top: 5px;
      color: #b4b2b2;
    }
  }
}
</style>
