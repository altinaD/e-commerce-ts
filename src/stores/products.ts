import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { fetchProducts } from '@/api'

interface Product {
  id: number
  name: string
  description: string
  category: string
  image: string
  price: number
  stock: number
}

export const useProductStore = defineStore(
  'productStore',
  () => {
    const products = ref<Product[]>([])
    const selectedCategory = ref<string | null>(null)

    const fetchAllProducts = async () => {
      try {
        products.value = await fetchProducts()
      } catch (error) {
        console.log('Error fetching products: ', error)
      }
    }

    const categories = computed(() => {
      return Array.from(
        new Set(products.value.map(product => product.category)),
      )
    })

    const filteredProducts = computed(() => {
      if (!selectedCategory.value) return products.value
      return products.value.filter(
        product => product.category === selectedCategory.value,
      )
    })

    const filterProducts = (category: string | null) => {
      selectedCategory.value = category
      console.log(selectedCategory.value)
    }

    return {
      products,
      categories,
      filteredProducts,
      fetchAllProducts,
      selectedCategory,
      filterProducts,
    }
  },
  {
    persist: true,
  },
)
