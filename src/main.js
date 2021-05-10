import Vue from 'vue/dist/vue.esm.js';
import Router from 'vue-router';
// store必须小写，否则首字母大写访问会state:state
import store from './store/store';
import Index from './components/index';
import Login from './components/login';
import Register from './components/register';

Vue.use(Router);

const router = new Router({
    mode: '',//history || hash 两种模式根据项目需要，history需要后台结合
    routes:[ 
        {
            path: '/',
            component: Index
        },
        {
            path:'/login', 
            component:Login 
        },
        {
            path:'/register',
            component:Register
        },
    ]
})

new Vue({
    el:"#app",
    router,
    store
})