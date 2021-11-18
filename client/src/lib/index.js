import axios from 'axios'

const BASE_URL = '/products'

export const fetchData = {
  getProducts: () => axios.get(`${BASE_URL}`),
  getProduct: id => axios.get(`${BASE_URL}/${id}`),
}
