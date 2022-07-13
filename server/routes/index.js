const router = require('koa-router')()
const users = require('../data/user')
const routers = require('../data/router')

router.post('/user_router_auth', async (ctx, next) => {
  const { uid } = ctx.request.body
  if (uid) {
    const authRouterInfo = []
    // 查找用户信息
    const userInfo = users.filter(user => user.id == uid)[0]
    // 遍历用户权限
    userInfo.auth.map(rid => {
      // 遍历路由信息（如果用户权限用包含有路由的id,则将路由保存到该用户的路由表中）
      routers.map(router => {
        if(router.id == rid) {
          authRouterInfo.push(router)
        }
      })
    })
    ctx.body = authRouterInfo
  } else {
    next()
  }
})

module.exports = router
