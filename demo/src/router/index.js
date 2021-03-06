import App from '../App'


export default [{
  path: '/',
  component: App, 
  children: [{
      path: '',
      component: r => require.ensure([], () => r(require('../pages/home')), 'home')
    },
    {
      path: '/item',
      component: r => require.ensure([], () => r(require('../pages/item')), 'item')
    },
    // {
    //   path: '/score',
    //   component: r => require.ensure([], () => r(require('../pages/score')), 'score')
    // }
  ]
}]
