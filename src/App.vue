<template>
  <p v-if="error">
    Something went wrong...
  </p>
  <p v-if="loading">
    Loading...
  </p>
  <p
    v-for="character in result.data.results"
    v-else
    :key="character.id"
  >
    {{ character.name }}
  </p>
  <div />
</template>

<script>
import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'

const CHARACTERS_QUERY = gql`
query {
  categories {
    total_count
    items {
      children {
        uid
        level
        name
        path
        children_count
        children {
          uid
          level
          name
          path
        }
      }
    }
  }
}
`

export default {
  name: 'App',
  setup () {
    const { result, loading, error } = useQuery(CHARACTERS_QUERY);
    return {
      result,
      loading, 
      error
    }
  }
}

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