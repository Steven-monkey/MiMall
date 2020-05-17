import Vue from 'vue'
import Router from 'vue-router'
import Index from './pages/index'
import Home from './pages/home'
Vue.use(Router)
export default new Router({
    routes: [
        {
            path:'/',
            name:'home',
            redirect:'/index',
            component:Home,
            children:[
                {
                    path:'index',
                    name:'index',
                    component:Index,
                },
                {
                    path:'product/:id',
                    name:'product',
                    component:() => import('./pages/product.vue')
                },
                {
                    path:'detail/:id',
                    name:'detail',
                    component:() => import('./pages/detail.vue')
                }
            ]
        },
        {
            path:'/login',
            name:'login',
            component:() => import('./pages/login.vue')
        },
        {
            path:'/cart',
            name:'cart',
            component:() => import('./pages/cart.vue')
        },
        {
            path:'/order',
            name:'order',
            component:() => import('./pages/order.vue'),
            children:[
                {
                    path:'list',
                    name:'order-list',
                    component:() => import('./pages/orderList.vue')
                },
                {
                    path:'confrim',
                    name:'order-confrim',
                    component:() => import('./pages/orderConfrim.vue')
                },
                {
                    path:'pay',
                    name:'order-pay',
                    component:() => import('./pages/orderPay.vue')
                },
                {
                    path:'alipay',
                    name:'alipay',
                    component:() => import('./pages/alipay.vue')
                }
            ]
        }
    ]
})