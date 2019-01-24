// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router';
import News from './components/News';
import Newsdetail from './components/Newsdetail';
import Home from './components/Home';
import VueResource from 'vue-resource';
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.config.productionTip = false;
//引入公共的CSS在main.js中
import './css/basic.less';
const routes = [
  { path: '/home', component: Home },
  { path: '/news', component: News },
  { path: '/newsdetail/:aid', component: Newsdetail },
  // 默认加载的时候显示的是首页的组件
  { path: '*',redirect: '/home'}
]
const router = new VueRouter({
  routes 
});

//4、创建和挂载路由实例
const app = new Vue({
  router
}).$mount('#app');
//5、在根组件App.vue中放入 <router-view></router-view>
//作为动态加载路由的出口



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
