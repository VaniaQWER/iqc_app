export default {
  path: '/user/userInfo',//用户信息列表
  getComponent: (nextState, cb) => {
    require.ensure([], (require) => {
      cb(null, require('container/user').default)
    })
  },
  childRoutes: [
    {
      path: '/user/userInfo/:id',//用户信息审核
      getComponent: (nextState, cb) => {
        require.ensure([], (require) => {
          cb(null, require('container/user/check').default)
        })
      }
    },
    {
      path: '/user/add',//新增用户
      getComponent: (nextState, cb) => {
        require.ensure([], (require) => {
          cb(null, require('container/user/add').default)
        })
      }
    }
  ]
}