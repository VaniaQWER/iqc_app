export default {
  path: '/user',//用户信息列表
  getComponent: (nextState, cb) => {
    require.ensure([], (require) => {
      cb(null, require('container/user').default)
    })
  },
  childRoutes: [
    {
      path: '/user/userInfo',//用户信息审核
      getComponent: (nextState, cb) => {
        require.ensure([], (require) => {
          cb(null, require('container/user/userInfo').default)
        })
      }
    },
    {
      path: '/user/add',//用户信息详情 新增/编辑/详情  公用页面
      getComponent: (nextState, cb) => {
        require.ensure([], (require) => {
          cb(null, require('container/user/details').default)
        })
      }
    }, 
    {
      path: '/user/userInfo/:id',//用户信息详情 新增/编辑/详情  公用页面
      getComponent: (nextState, cb) => {
        require.ensure([], (require) => {
          cb(null, require('container/user/details').default)
        })
      },
      onEnter: (nextState, replace, cb) => {
        if (!nextState.location.state) {
          replace('/user/userInfo')
        }
        cb();
      } 
    }
  ]
}