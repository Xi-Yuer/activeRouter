import { defineStore } from 'pinia'
import { getUserRoutes } from '../service'
import { formatRouterTree, generateRouter } from '../utils/mapRoutes'
import router from '../router'
const useStore = defineStore({
  id: 'useStore',
  state: () => {
    return {
      uid: 1,
      userRoutes: [],
    }
  },
  actions: {
    async changeUserRoutes() {
      // 根据用户输入获取用户路由权限
      const userRoutes = await getUserRoutes(this.uid)
      // 将用户权限对应的路由格式化为路由树形结构
      const formatUserRoutesResult = formatRouterTree(userRoutes)
      this.userRoutes = formatUserRoutesResult
      // 注册路由
      // console.log(generateRouter(this.userRoutes))
      generateRouter(this.userRoutes).map(route => {
        console.log(route)
        router.addRoute('Index', route)
      })
      // console.log(router.getRoutes())
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'userRoutes',
        storage: localStorage,
      },
    ],
  },
})

export { useStore }
