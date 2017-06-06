// The following line loads the standalone build of Vue instead of the runtime-only build,
// so you don't have to do: import Vue from 'vue/dist/vue'
// This is done with the browser options. For the config, see package.json
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import Menu from './components/Menu.vue'
import Login from './components/Login.vue'

Vue.use(VueRouter);

const router = new VueRouter({
    routes : [
      {
        name: 'Home',
        path:"/",
        component:Home
      },
      {
        name: 'Menu',
        path:'/menu',
        component:Menu
      },
      {
        name: 'Login',
        path:'/login',
        component:Login
      }
    ],
    mode: 'history'
})

new Vue({ // eslint-disable-line no-new
  router,
  render: (h) => h(App)
}).$mount('#app');
