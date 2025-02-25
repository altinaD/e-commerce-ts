<template>
  <div class="sidebar">
    <div class="sidebar-caption">Categories</div>
    <ul class="list-wrapper">
      <li
        @click="onCategoryClick(category)"
        v-for="category in categories"
        :key="category"
      >
        {{ category }}
      </li>
      <li @click="onCategoryClick(null)">All categories</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useProductStore } from '@/stores/products'

const productStore = useProductStore()
const { categories, filterProducts } = productStore

function onCategoryClick(category) {
  filterProducts(category)
}
</script>

<style scoped lang="scss">
.sidebar {
  padding: 25px;
  position: relative;
  .sidebar-caption {
    text-align: center;
    font-size: 1.3rem;
    font-family: sans-serif;
  }
  .list-wrapper {
    margin-top: 20px;
    margin-left: 20px;
    li {
      position: relative;
      width: max-content;
      margin-top: 7px;
      font-size: 1.1rem;
      font-family: sans-serif;
      cursor: pointer;
      &:before {
        content: '';
        position: absolute;
        background-color: #000;
        height: 2px;
        width: 0;
        bottom: 0;
        left: 0;
        transition: width 0.6s ease;
      }
      &:hover {
        &::before {
          width: 100%;
        }
      }
    }
  }
}
</style>
