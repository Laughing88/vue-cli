<template>
    <div>
        <div class="loading"></div>
        <i class="icon-loading iconfont"></i>
    </div>
</template>

<script>

export default {
    name: 'login',
    data(){
        return{
            msg: '头部'
        }
    }
}
</script>

<style scoped>
    @import '//at.alicdn.com/t/font_1575167_fhkjha67w17.css';
    
    .loading{
        width: 30px;
        height: 30px;
        display: inline-block;
        border: 3px solid #f3f3f3;
        border-top: 3px solid red; 
        border-radius: 50%; 
        animation: loading-360 0.8s infinite linear;
    }

    @keyframes loading-360 {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    .icon-loading {
        display: inline-block;
        font-size: 30px; 
        color: grey;
        animation: rotating 2s infinite linear;
    }

    .icon-loading::before {
        content: "\e66d";
    }

    @keyframes rotating {
        0% {
            transform: rotate(0deg)
        }

        to {
            transform: rotate(1turn)
        }
    }
</style>