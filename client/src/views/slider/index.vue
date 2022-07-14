<!--  -->
<template>
  <div class="side">
    <div class="logo" @click="JumpHome">
      <img src="http://112.124.28.77:1019/img/logo.dc60b56c.svg" alt="" />
      <span v-if="!isFold" class="title">动态路由</span>
    </div>
    <el-menu
      :collapse="isFold"
      :default-active="defaultActive"
      backgroundColor="#001529"
      textColor="#b7bdc3"
      acticve-text-color="#0a60bd"
    >
      <template v-for="item in currentUserRoute" :key="item.id">
        <!-- 一级路由 -->
        <template v-if="item.pid === 0">
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <i :class="`iconfont ${item.icon}`"></i>
              <span>{{ item.title }}</span>
            </template>
            <template v-for="subItem in item.children" :key="subItem.id">
              <el-menu-item
                :index="subItem.id + ''"
                @click="handleItemClick(subItem)"
              >
                <template #title>
                  <i :class="`iconfont ${subItem.icon}`"></i>
                  <span>{{ subItem.title }}</span>
                </template>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script setup>
import { useRouter, onBeforeRouteUpdate } from 'vue-router'
import { useStore } from '@/store'
import { computed, ref, watch } from 'vue'

import routerData from './data/router.js'

const router = useRouter()
const store = useStore()

const currentUserRoute = store.userRoutes

const currentBreadCrumbs = ref([])
const defaultActive = ref(2)

const isFold = computed(() => store.breadCrumbIsFold)
const width = computed(()=> isFold.value ? '60px' : '200px')

const handleItemClick = item => {
  router.push(item.path)
}
onBeforeRouteUpdate(to => {
  currentBreadCrumbs.value = []
  to.path.split('/').forEach(p => {
    if (p) {
      currentBreadCrumbs.value.push(p)
    }
  })
  store.changeBreadCrumb(currentBreadCrumbs.value)
})

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
i {
  margin-right: 5px;
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
.el-menu--collapse {
  width: 100%;
}
.el-menu {
  border: none;
}
</style>
