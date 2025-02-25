import axios from 'axios'

const API_URL = 'http://localhost:3000'

export const fetchProducts = async () => {
  const response = await axios.get(`${API_URL}/products`)
  return response.data
}

export const fetchProductById = async (id: number) => {
  const response = await axios.get(`${API_URL}/products/${id}`)
  return response.data
}

export const addToCart = async (
  userId: number,
  productId: number,
  quantity: number,
) => {
  const response = await axios.post(`${API_URL}/cart`, {
    userId,
    products: [{ productId, quantity }],
  })
  return response.data
}

export const getCart = async (userId: number) => {
  const response = await axios.get(`${API_URL}/cart?userId=${userId}`)
  return response.data
}
