import Vue from 'vue/dist/vue.esm.js';
import Router from 'vue-router';
import Swiper from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
import './assets/less/reset.less';
// 移动端适配
import 'amfe-flexible/index.min.js';
// store必须小写，否则首字母大写访问会state:state
import store from './store/store';
import Index from './components/index';
import Login from './components/login';
import Register from './components/register';

Vue.config.productionTip = false;

Vue.use(Router);
Vue.use(Swiper);

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