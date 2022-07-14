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
      breadCrumb: [],
      breadCrumbIsFold: false,
    }
  },
  actions: {
    async changeUserRoutes() {
      // 根据用户输入获取用户路由权限
      const userRoutes = await getUserRoutes(this.uid)
      window.localStorage.setItem('UserRoutes', JSON.stringify(userRoutes))
      // 将用户权限对应的路由格式化为路由树形结构
      const formatUserRoutesResult = formatRouterTree(userRoutes)
      this.userRoutes = formatUserRoutesResult
      // 注册路由
      generateRouter(this.userRoutes).map(route => {
        router.addRoute('Index', route)
      })
    },
    changeBreadCrumb(breadCrumb) {
      this.breadCrumb = breadCrumb
    },
    changeBreadCrumbIsFold(isFold) {
      this.breadCrumbIsFold = isFold
    }
  }
})

export { useStore }
