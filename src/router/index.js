import { createRouter, createWebHistory } from 'vue-router'
import homePage from '../views/homePage.vue'
import dynamicCategoryOrProduct from '../views/dynamicCategoryOrProduct.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component:homePage
  },
  {
    path: '/:mainUrlKey/:childUrlKey?',
    name: 'categoryList',
    component: dynamicCategoryOrProduct
  },
  {
    path: '/:productUrlKey',
    name: 'productDetail',
    component: dynamicCategoryOrProduct
  }
]
const router = createRouter({
    history: createWebHistory(),
    routes
  })

  export default router