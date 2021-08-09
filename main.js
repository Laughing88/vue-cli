import Vue from 'vue/dist/vue.esm.js';
import Router from 'vue-router';
import Swiper from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
import './src/assets/less/reset.less';
// 移动端适配
import 'amfe-flexible/index.js';
// store必须小写，否则首字母大写访问会state:state
import store from './src/store/store';
import router from './src/router/router';

Vue.config.productionTip = false;

Vue.use(Router);
Vue.use(Swiper);

if (module.hot) {
  module.hot.accept();
}

new Vue({
    el:"#app",
    router,
    store
})