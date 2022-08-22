<template>
  <p v-if="error">
    Something went wrong...
  </p>
  <p v-if="loading">
    Loading...
  </p>
  <template
    v-else
  >
    <category-menu
      :menu-items="categoryListData"
      :selected-category-name="selectedCategory?.name"
    />
    <router-view
      :query-variable="selectedCategory?.uid ?? route.path.split('/').pop()"
      :dynamic-component-name="selectedCategory && 'categoryList' || 'productDetail'"
    />
  </template>
</template>

<script setup>

import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useQuery } from '@vue/apollo-composable'
import { CATEGORY_LIST_QUERY } from './graphql'
import categoryMenu from './components/categoryMenu.vue'

const route = useRoute()

const { result, loading, error } = useQuery(CATEGORY_LIST_QUERY)

const categoryListData = computed(() => result && result.value.categoryList.length && result.value.categoryList[0].children || [])
const selectedCategory = computed(() => categoryListData.value.map(category => [category,...category.children]).flat().find(categoryToFind => `/${categoryToFind.url_path}` === route.path))

</script>

<style lang="css">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 100px;
  min-height: calc(100Vh - 100px);
}

</style>