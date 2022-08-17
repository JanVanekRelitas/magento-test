<template>
  <p v-if="error">
    Something went wrong...
  </p>
  <p v-if="loading">
    Loading...
  </p>
  <div
    v-else
  >
    <router-link
      v-for="category in result.categoryList[0].children"
      :key="category.uid"
      :to="category.url_path"
    >
      <button>{{ category.name }}</button>
    </router-link>
  </div>
</template>

<script setup>
import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'

const CHARACTERS_QUERY = gql`
query {
  categoryList {
    children_count
    children {
      uid
      level
      name
      path
      url_path
      url_key
      children {
        uid
        level
        name
        path
        url_path
        url_key
      }
    }
  }
}
`



    const { result, loading, error } = useQuery(CHARACTERS_QUERY);


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