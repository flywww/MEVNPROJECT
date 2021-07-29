import { createApp } from 'vue'
import Vue from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.vue'

createApp(App).mount('#app')

import VueRouter from 'vue-router';
Vue.use(VueRouter);

Vue.config.productionTip = false

import HomeComponent from './components/HomeComponent.vue';
import CreateComponent from './components/CreateComponent.vue';
import IndexComponent from './components/IndexComponent.vue';
import EditComponent from './components/EditComponent.vue';

const routes = [
  {
      name: 'home',
      path: '/',
      component: HomeComponent
  },
  {
      name: 'create',
      path: '/create',
      component: CreateComponent
  },
  {
      name: 'posts',
      path: '/posts',
      component: IndexComponent
  },
  {
      name: 'edit',
      path: '/edit/:id',
      component: EditComponent
  }
];

const router = new VueRouter({ mode: 'history', base: process.env.BASE_URL,routes: routes});
export default router
new Vue(Vue.util.extend({router}, App)).$mount('#app')

// new Vue({
//     render: h => h(App),
// }).$mount('#app')
