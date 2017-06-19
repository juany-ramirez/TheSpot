// The following line loads the standalone build of Vue instead of the runtime-only build,
// so you don't have to do: import Vue from 'vue/dist/vue'
// This is done with the browser options. For the config, see package.json
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import Menu from './components/Menu.vue'
import Login from './components/Login.vue'
import Ordenes from './components/Ordenes.vue'
import Register from './components/Register.vue'
import Admin from './components/Admin.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.http.options.credentials = true;

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
        name: 'Admin',
        path:'/admin',
        component:Admin
      },
      {
        name: 'Ordenes',
        path:"/ordenes",
        component:Ordenes
      },
      {
        name: 'Register',
        path:"/registrar",
        component:Register
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
