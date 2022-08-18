import {createRouter, createWebHistory} from 'vue-router'
import categoryList from '../views/categoryList.vue'
const routes=[{
  path: '/:mainUrlKey/:childUrlKey?',
  name: 'categoryList',
  component: categoryList
}]
const router = createRouter({
    history: createWebHistory(),
    routes
  })

  export default router