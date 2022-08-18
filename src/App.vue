<template>
  <p v-if="error">
    Something went wrong...
  </p>
  <p v-if="loading">
    Loading...
  </p>
  <template v-else>
    <div>
      <router-link
        v-for="mainCategory in categoryList"
        :key="mainCategory.uid"
        :to="{ name: 'categoryList', params: { mainUrlKey: mainCategory.url_key, categoryUID: mainCategory.uid }}"
      >
        <button>{{ mainCategory.name }}</button>
      </router-link>
    </div>
    <div v-if="selectedMainCategory">
      <div v-if="selectedMainCategory.children.length">
        <router-link
          v-for="selectedChildCategory in selectedMainCategory.children"
        
          :key="selectedChildCategory.uid"
          :to="{ name: 'categoryList', params: { mainUrlKey: selectedMainCategory.url_key,childUrlKey:selectedChildCategory.url_key, categoryUID: selectedChildCategory.uid }}"
        >
          <button>{{ selectedChildCategory.name }}</button>
        </router-link>
      </div>
      <div>
        {{ selectedMainCategory.name }}
      </div>
    </div>
    <router-view />
  </template>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useQuery } from '@vue/apollo-composable'

import { CATEGORY_LIST_QUERY } from './graphql'

const route = useRoute()

const { result, loading, error } = useQuery(CATEGORY_LIST_QUERY);
const categoryList = computed(() => result && result.value.categoryList.length && result.value.categoryList[0].children || [])
const selectedMainCategory = computed(() => categoryList.value.find((categoryToFind => categoryToFind.url_key === route.params.mainUrlKey)))

    


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>