<!--  -->
<template>
  <div class="page">
    <div class="breadcrumb">
      <el-icon class="el-icon" @click="foldBreadCrumb" v-if="isFold"
        ><Expand
      /></el-icon>
      <el-icon class="el-icon" @click="foldBreadCrumb" v-else><Fold /></el-icon>
      <breadcrumb :breadCrumb="store.breadCrumb" />
    </div>
    <router-view />
  </div>
</template>

<script setup>
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'
import Breadcrumb from '../../components/breadcrumb/index.vue'
import { useStore } from '../../store'

const store = useStore()

const isFold = ref(false)
const foldBreadCrumb = () => {
  isFold.value = !isFold.value
  store.changeBreadCrumbIsFold(isFold.value)
}
</script>
<style scoped>
.page {
  padding: 20px;
}
.breadcrumb {
  display: flex;
  width: 100%;
  height: 40px;
  align-items: center;
  font-size: 25px;
  background-color: #fff;
}
.el-icon {
  cursor: pointer;
}
</style>
