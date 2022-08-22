<template>
  <div>
    <p v-if="error">
      Something went wrong...
    </p>
    <p v-if="loading">
      Loading...
    </p>
    <template v-else>
      <div
        v-if="product"
        class="productContainer"
      >
        <img
          :src="product.small_image.url"
          :alt="product.small_image.label"
          class="productImage"
        >
        <h4>
          {{ product.name }}
        </h4>
      </div>
      <div v-else>
        <h4>
          Looks like the page you were hoping to find doesn't exist. Sorry about that.
        </h4>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, toRefs, computed } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import { PRODUCT_DETAIL } from '../graphql'

const props = defineProps({
  queryVariable: {type:String, required:true}
})

const { queryVariable:productUrlKey} = toRefs(props); 
const variables = ref({
  productUrlKey
})

const { result, loading, error } = useQuery(PRODUCT_DETAIL,variables)

const product = computed(() => result.value?.products?.items[0] ?? null)


</script>

<style lang="css" scoped>
.productContainer {
  min-width: 400px;
  margin: 12px;
  border-bottom: 4px solid #DEEEFF;
}
.productImage {
  height: 400px
}
</style>