<template>
  <div class="products-wrapper">
    <TransitionGroup tag="ul" class="products" name="list">
      <li  v-for="product in displayedProducts" :key="product.id">
        <router-link :to="{name: 'product', params: {id: product.id}}">
          <Product :product="product" />
        </router-link>
      </li>
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
import Product from '@/components/products/Product.vue'
import { useProductStore } from '@/stores/products'
import { computed, onMounted } from 'vue'

const productStore = useProductStore()
const { fetchAllProducts } = productStore

onMounted(() => {
  fetchAllProducts()
})

const displayedProducts = computed(() => productStore.filteredProducts)
</script>

<style scoped lang="scss">
.products-wrapper {
  padding: 25px;
  position: relative;
}
.products {
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0;
  li {
    height: 45vh;
    flex: 0 0 calc(25% - 15px);
    margin-left: 15px;
    margin-bottom: 15px;
    width: calc(25% - 15px);
    box-sizing: border-box;
    padding: 15px;
    max-height: 45vh;
    position: relative;
    border: 0.5px solid gray;
    @media (max-width: 1024px) {
      flex: 0 0 calc(33.33% - 15px);
      width: calc(33.33% - 15px);
    }
    @media (max-width: 768px) {
      flex: 0 0 calc(50% - 15px);
      width: calc(50% - 15px);
    }
    @media (max-width: 480px) {
      flex: 0 0 100%;
      width: 100%;
    }
  }
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
