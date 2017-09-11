import React from 'react';
import {
  Router, hashHistory
} from 'react-router';
// import deparment from './department';
// import quality from './quality';
// import user from './user';
// import org from './org';
// import deptCheck from './deptCheck';
// import qualityCheck from './qualityCheck';
const routes = {
  childRoutes: [
    {
      path: '/',
      onEnter: () => {
        window.location.href = 'http://www.ysynet.com';
      }
    },
    // {
    //   path: 'login',
    //   getComponent: (nextState, cb) => {
    //     require.ensure([], (require) => {
    //       cb(null, require('container/login').default)
    //     })
    //   }
    // }, {
    //   path: 'hospital',
    //   getComponent: (nextState, cb) => {
    //     require.ensure([], (require) => {
    //       cb(null, require('container/register/hospital').default)
    //     })
    //   }
    // }, {
    //   path: 'register',
    //   getComponent: (nextState, cb) => {
    //     require.ensure([], (require) => {
    //       cb(null, require('container/register').default)
    //     })
    //   }
    // }, 
    // {
    //   path: 'home',
    //   getComponent: (nextState, cb) => {
    //     require.ensure([], (require) => {
    //       cb(null, require('container/home').default)
    //     })
    //   },
    //   childRoutes: [
    //     user, org, deptCheck, qualityCheck, deparment, quality, 
    //   ]
    // }, 
    {
      path: '*',
      getComponent: (nextState, cb) => {
        require.ensure([], (require) => {
          cb(null, require('container/error').default)
        }, 'error')
      }  
    }
  ]
}

const HubRoute = () => (
  <Router 
    history={hashHistory}
    routes={routes}
  >
  </Router>
)

export default HubRoute;