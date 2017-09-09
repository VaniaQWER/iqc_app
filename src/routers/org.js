export default {
  path: '/org/orgInfo',//机构信息列表
  getComponent: (nextState, cb) => {
    require.ensure([], (require) => {
      cb(null, require('container/org').default)
    })
  },
  childRoutes: [
    {
      path: '/org/orgInfo/:id',//机构信息详情
      getComponent: (nextState, cb) => {
        require.ensure([], (require) => {
          cb(null, require('container/org').default)
        })
      }
    },
    {
      path: '/org/add',//新增机构
      getComponent: (nextState, cb) => {
        require.ensure([], (require) => {
          cb(null, require('container/org/add').default)
        })
      }
    }
  ]
}