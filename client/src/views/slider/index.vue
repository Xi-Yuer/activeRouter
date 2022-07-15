<!--  -->
<template>
  <div class="side">
    <div class="logo" @click="JumpHome">
      <img src="http://112.124.28.77:1019/img/logo.dc60b56c.svg" alt="" />
      <span v-if="!isFold" class="title">动态路由</span>
    </div>
    <nav-menu
      :menuList="currentUserRoute"
      :isFold="isFold"
      :defaultActive="defaultActive"
    />
  </div>
</template>
<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from '@/store'

import NavMenu from './components/nav-menu/index.vue'

const router = useRouter()
const store = useStore()
const currentUserRoute = store.userRoutes

const isFold = computed(() => store.breadCrumbIsFold)
const defaultActive = ref('2')
const width = computed(() => (isFold.value ? '60px' : '200px'))

const JumpHome = () => {
  router.push('/')
}
</script>
<style scoped>
.side {
  height: 100%;
  box-sizing: border-box;
  background-color: #001529;
  overflow: hidden;
  transition: all 0.3s;
  width: v-bind(width);
}
img {
  height: 100%;
  margin: 0 10px;
}
.logo {
  cursor: pointer;
  display: flex;
  height: 48px;
  padding: 12px 10px 8px 5px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.title {
  font-size: 16px;
  font-weight: 700;
  color: white;
}
</style>
