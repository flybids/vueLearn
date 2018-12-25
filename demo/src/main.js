// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store/index' 
import '../static/css/common.less'
import '../static/js/rem'


import routes from './router/index'


// import ajax from './config/ajax'
// import './config/rem'

Vue.use(VueRouter)
const router = new VueRouter({
	routes
})
//Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	router,
	store,
}).$mount('#app')

// new Vue({
//   el: '#app',
//   router,
//   store,
// })
