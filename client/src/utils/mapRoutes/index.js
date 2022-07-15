import { defineAsyncComponent } from 'vue'
function formatRouterTree(routes) {
  // ---------------------------------------------------------------
  // 获取到的路由数据结构（其中pid为0的时候表示该路由为以及菜单，其余的pid对应的是他的父级菜单）
  // 0: {id: 2, pid: 0, path: '/course', name: 'Curriculum', title: '课程管理', …}
  // 1: {id: 3, pid: 2, path: 'operate', name: 'Operation', link: '/course/operate', …}
  // 2: {id: 4, pid: 3, path: 'info', name: 'Info', title: '课程信息', …}

  // ---------------------------------------------------------------
  let parents = routes.filter(route => route.pid === 0) // 一级菜单
  // 0: {id: 2, pid: 0, path: '/course', name: 'Curriculum', title: '课程管理', …}
  // 1: {id: 6, pid: 0, path: '/user', name: 'User', title: '学生管理', …}
  // 2: {id: 10, pid: 0, path: 'teacher', name: 'Teacher', title: '教师管理', …}

  // ---------------------------------------------------------------
  let children = routes.filter(route => route.pid !== 0) // 子菜单
  // 0: {id: 3, pid: 2, path: 'operate', name: 'Operation', link: '/course/operate', …}
  // 1: {id: 4, pid: 3, path: 'info', name: 'Info', title: '课程信息', …}

  function routeTree(parents, children) {
    parents.map(p => {
      p.children = []
      children.map((c, i) => {
        if (c.pid === p.id) {
          // 将children复制一份出来
          let _c = JSON.parse(JSON.stringify(children))
          // 删除
          _c.splice(i, i)
          if (p.children) {
            p.children.push(c)
          } else {
            p.children = [c]
          }
          routeTree([c], _c)
        }
      })
    })
    return parents
  }
  routeTree(parents, children)
  return parents
}

function generateRouter(userRoutes) {
  const newRouters = userRoutes.map(r => {
    let routes = {
      path: r.path,
      name: r.name,
      meta: {
        title: r.title,
      },
      component:
        r.children.length
          ? ''
          : () =>
              import(
                /* @vite-ignore */ `../../views/main-pages${r.path}/index.vue`
              ),
    }
    if (r.children) {
      routes.children = generateRouter(r.children)
    }
    return routes
  })
  return newRouters
}

export { formatRouterTree, generateRouter }
