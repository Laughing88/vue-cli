<template>
  <div class="main">    
    <swiper :options='swiperOptions' :auto-update="true">
        <swiper-slide class="swiper-slide" v-for="(item,index) in carousel" :key="index">
            <img :src="item.icon" class="swiperImg"/>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import Vue from 'vue';
import { mapState } from "vuex";
import { banner } from '../js/request/api';
import { shareLink } from '../js/public.js';
Vue.prototype.public = {shareLink};
export default {
  name: "index",
  data() {
    return {
        swiperOptions: {
            //显示分页
            pagination: {
              el: '.swiper-pagination',
              clickable: true //允许分页点击跳转
            },
            direction: 'horizontal',
            //自动轮播
            autoplay: {
              disableOnInteraction: false,
              delay: 1000,
            },
        },
        carousel: [],
    }
  },
  computed: {
      ...mapState({
      count: (state) => state.count,
      }),
  },
  created(){
      
  },
  mounted(){
      let that = this;
          that.banner();
  },
  methods:{
      banner(){
          let that = this;
          banner({
              showIndex:16
          }).then(res=>{
              that.carousel = res.data;
          }).catch(error=>{
              console.log(error);
          })
      },
  }
};
</script>

<style lang="less" scoped>
  .swiperImg{
    width: 100%;
  }
</style>