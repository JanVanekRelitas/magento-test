<template>
  <p>{{ currentRoute }}</p>
  <p v-if="error">
    Something went wrong...
  </p>
  <p v-if="loading">
    Loading...
  </p>
  <template v-else>
    {{ result }}
  </template>
</template>

<script setup>
import {  watch, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useQuery } from '@vue/apollo-composable'
import { PRODUCTS_IN_CATEGORY_QUERY } from '../graphql'

const props = defineProps({
  categoryUID: {type:String, default:"Mw=="}
})

const route = useRoute()

const currentRoute = computed(() => route.params)
const { result, loading, error } = useQuery(PRODUCTS_IN_CATEGORY_QUERY,{ variables: { categoryUID: props.categoryUID }})
async function getProductsInCategory () {
    
}

watch(() => route.params.categoryUID, getProductsInCategory)
</script>

<style lang="scss" scoped>

</style>