<template>
  <div class="main">
    <div class="login-top">
        <header class="title">
            <ul>
                <li></li>
                <li>柒星社区</li>
                <li>
                  <img :src="mineImg" @click="goLogin"/>
                </li>
            </ul>
        </header>
    </div>     
    <swiper :options='swiperOptions' :auto-update="true">
        <swiper-slide v-for="(item,index) in carousel" :key="index">
            <img :src="item.icon" class="swiperImg"/>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
    <Loading/>
  </div>
</template>

<script>
import Vue from 'vue';
import { mapState } from "vuex";
import { banner } from '../js/request/api';
import { shareLink } from '../js/public.js';
import mineImg from '../assets/img/mine.png';
import Loading from '../components/loading';

Vue.prototype.public = {shareLink};

export default {
  name: "index",
  components:{
    Loading
  },
  data() {
    return {
      mineImg: mineImg,
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
      carousel: [
        {
          icon: require('../assets/img/banner01.png')
        },
        {
          icon: require('../assets/img/banner02.png')
        },
        {
          icon: require('../assets/img/banner03.png')
        },
        {
          icon: require('../assets/img/banner04.png')
        }
      ],
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
          // that.banner();
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
      goLogin(){
        let that = this;
            that.$router.push('/login');
      }
  }
};
</script>

<style lang="less" scoped>
.main{
  &>.login-top {
    height: 50px;
    line-height: 50px;
    background: linear-gradient(-52deg, #5ed1e1, #bfc2fe, #e8bddb);

    &>header>ul{
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-between;
      align-items: center;

      &>li{
        width: 33%;
      }

      &>li:first-child{
        margin-left: 15px;
      }

      &>li:nth-child(2){
        color: #fff;
        font-size: 16px;
        letter-spacing: 1px;
        text-align: center;
      }

      &>li:last-child{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-right: 15px;
        &>img{
          width: 24px;
          height: 24px;
        }
      }
    }
  }

  & .swiperImg{
    width: 100%;
  }
}
</style>