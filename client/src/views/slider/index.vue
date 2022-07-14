<!--  -->
<template>
  <div class="side">
    <div class="logo">
      <!-- 随机Logo -->
      <img src="http://112.124.28.77:1019/img/logo.dc60b56c.svg" alt="" />
      <span v-if="!props.isCollaps" class="title">动态路由管理系统</span>
    </div>
    <el-menu
      :collapse="props.isCollaps"
      class="el-menu-vertical-demo"
      default-active="2"
      text-color="#fff"
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
import { useRouter } from 'vue-router'
import { useStore } from '@/store'
import { computed } from 'vue';

const router = useRouter()
const store = useStore()

const width = computed(()=>props.isCollaps ? '100px' : '199px')

const currentUserRoute = store.userRoutes

const props = defineProps({
  isCollaps: {
    type: Boolean,
    default: false,
  },
})

const handleItemClick = item => {
  router.push(item.path)
}
</script>
<style scoped>
.side {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  height: 100%;
  padding-top: 60px;
  box-sizing: border-box;
  background-color: #001529;
  overflow: hidden;
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
  display: flex;
  height: 48px;
  padding: 12px 10px 8px 10px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.title {
  font-size: 16px;
  font-weight: 700;
  color: white;
}
.el-menu--collapse{
  width: 100%;
}
.el-menu {
  border: none;
}
</style>
