export default {
  path: '/org',//机构信息列表
  getComponent: (nextState, cb) => {
    require.ensure([], (require) => {
      cb(null, require('container/org').default)
    })
  },
  childRoutes: [
    {
      path: '/org/orgInfo',//用户信息审核
      getComponent: (nextState, cb) => {
        require.ensure([], (require) => {
          cb(null, require('container/org/orgInfo').default)
        })
      }
    },
    {
      path: '/org/orgInfo/details',//机构信息详情
      getComponent: (nextState, cb) => {
        require.ensure([], (require) => {
          cb(null, require('container/org/details').default)
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