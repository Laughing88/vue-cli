import Vue from 'vue/dist/vue.esm.js';
import Router from 'vue-router';
import Swiper from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
import './assets/less/reset.less';
// 移动端适配
import 'amfe-flexible/index.js';
// store必须小写，否则首字母大写访问会state:state
import store from './store/store';
import router from './router/router';

Vue.config.productionTip = false;

Vue.use(Router);
Vue.use(Swiper);



new Vue({
    el:"#app",
    router,
    store
})