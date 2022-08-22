<template>
  <component
    :is="dynamicComponent"
    :query-variable="queryVariable"
  />
</template>

<script setup>
import { toRefs, computed } from 'vue'
import categoryList from '../components/categoryList.vue'
import productDetail from '../components/productDetail.vue'

const dynamicCoomponentMap = {
  categoryList,
  productDetail
}

const props = defineProps({
  dynamicComponentName: {type:String, required:true},
  queryVariable: {type:String, required:true}
})

const { dynamicComponentName, queryVariable } = toRefs(props); 

const dynamicComponent = computed(() => dynamicCoomponentMap[dynamicComponentName.value])

</script>