import Router from 'vue-router';

import Index from '../view/index';
import Login from '../view/login';
import Register from '../view/register';

const router = new Router({
    //mode: 'history',//history || hash 两种模式根据项目需要，history需要后台结合
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

export default router;