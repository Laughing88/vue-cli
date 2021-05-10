<template>
    <div class="main">
        <div>{{msg}}</div>
        <div>{{count}}</div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'index',
    data(){
        return{
            msg: '首页',
        }
    },
    computed:{
        ...mapState({
            count: state=>state.count
        })
    },
    mounted(){

    }    
}
</script>

<style lang="less" scoped>

</style>