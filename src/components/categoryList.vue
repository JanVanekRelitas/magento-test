<template>
  <div>
    <p v-if="error">
      Something went wrong...
    </p>
    <p v-if="loading">
      Loading...
    </p>
    <template v-else>
      <div class="categoryListLayout">
        <router-link
          v-for="product in products"
          :key="product.sku"
          class="categoryListProduct"
          :to="{ name: 'productDetail', params: { productUrlKey: product.url_key }}"
        >
          <img
            :src="product.small_image.url"
            :alt="product.small_image.label"
            class="categoryListProductImage"
          >
          <h4>
            {{ product.name }}
          </h4>
          <h3>{{ `${getPrice(product.price_range)} ${getCurrency(product.price_range)}` }}</h3>
          <button class="buttonCart">
            ADD TO CART
          </button>
        </router-link>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, toRefs, computed } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import { PRODUCTS_IN_CATEGORY_QUERY } from '../graphql'

const props = defineProps({
  queryVariable: {type:String, required:true}
})

const { queryVariable:categoryUid} = toRefs(props); 
const variables = ref({
  categoryUid
})

const { result, loading, error } = useQuery(PRODUCTS_IN_CATEGORY_QUERY,variables)

const products = computed(() => result.value?.products?.items ?? [])

const getPrice = (priceRange) => priceRange?.minimum_price?.regular_price?.value ?? 0
const getCurrency = (priceRange) => priceRange?.minimum_price?.regular_price?.currency ?? "CZK"

</script>

<style lang="css" scoped>
.categoryListLayout {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-left: 10%;
  padding-right: 10%;
}
.categoryListProduct {
  min-width: 400px;
  margin: 12px;
  border-bottom: 4px solid #DEEEFF;
}
.categoryListProductImage {
  height: 400px
}
.buttonCart {
	background-color:#2dabf9;
	border-radius:28px;
	border:1px solid #2dabf9;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:17px;
	font-weight:bold;
	padding:16px 31px;
	text-decoration:none;
	text-shadow:0px 1px 0px #263666;
  margin-bottom: 12px;
}
.buttonCart:hover {
	background-color:#0688fa;
}
.buttonCart:active {
	position:relative;
	top:1px;
}
a {
    color: #2c3e50;
    text-decoration: none;
    margin-left: 12px;
}
</style>