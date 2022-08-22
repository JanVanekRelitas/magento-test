<template>
  <div class="mainMenu flexRowCenter">
    <router-link
      v-for="mainCategory in menuItems"
      :key="mainCategory.uid"
      :to="{ name: 'categoryList', params: { mainUrlKey: mainCategory.url_key }}"
      class="flexRowCenter"
      @mouseover="showChildCategoryMenu = mainCategory.children.length, selectedMainCategory = mainCategory"
    >
      <a>{{ mainCategory.name }}</a>
      <svg
        v-if="mainCategory.children.length"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ><polyline points="6 9 12 15 18 9" /></svg>
    </router-link>
  </div>

  <div
    v-if="showChildCategoryMenu"
    class="subMenu flexRowCenter"
    @mouseleave="showChildCategoryMenu = false"
  >
    <router-link
      v-for="selectedChildCategory in selectedMainCategory.children"
        
      :key="selectedChildCategory.uid"
      :to="{ name: 'categoryList', params: { mainUrlKey: selectedMainCategory.url_key,childUrlKey:selectedChildCategory.url_key }}"
    >
      <a>{{ selectedChildCategory.name }}</a>
    </router-link>
  </div>
  <div
    v-else
    class="menuNavigation"
  >
    <div class="flexRow">
      <router-link to="/">
        <a> Home</a>
      </router-link>
    </div>
      
    <div class="flexRowCenter">
      <h1>{{ selectedCategoryName }}</h1>
    </div>
  </div>
</template>

<script setup>
import { ref,toRefs } from 'vue'

const props = defineProps({
  menuItems: {type:Object, required:true},
  selectedCategoryName : {type:String,default:""}
})

const { menuItems,selectedCategoryName} = toRefs(props); 

const showChildCategoryMenu = ref(false)
const selectedMainCategory = ref({})

</script>

<style lang="css" scoped>
h1 {
  font-weight: 500
}
.flexRow {
  display: flex;
}
.flexRowCenter {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
.mainMenu {
  position: fixed;
  top: 0;
  background: white;
  border-bottom: 2px solid #DEEEFF;
  box-sizing: border-box;
  width: 100%;
  min-height: 100px;
  padding: 12px;
}
.subMenu {
  min-height: 100px;
  border-top: 2px solid #DEEEFF;
  border-bottom: 4px solid #DEEEFF;
  box-sizing: border-box;
}
.menuNavigation {
  height: 88px;
  padding-top: 12px;
}
a {
    color: #2c3e50;
    text-decoration: none;
    margin-left: 12px;
}
a:hover {
    text-decoration: underline;
}
</style>