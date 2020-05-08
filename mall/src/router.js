import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home'
import Index from './pages/index'
import Product from './pages/product'
import Detail from './pages/detail' 
import Cart from './pages/cart'
import Order from './pages/order'
import OrderConfrim from './pages/orderConfrim'
import OrderList from './pages/orderList'
import OrderPay from './pages/orderPay'
import AliPay  from './pages/alipay'

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
                    component:Index
                },
                {
                    path:'product/:id',
                    name:'product',
                    component:Product
                },
                {
                    path:'detail/:id',
                    name:'detail',
                    component:Detail
                }
            ]
        },
        {
            path:'/cart',
            name:'cart',
            component:Cart
        },
        {
            path:'/order',
            name:'order',
            component:Order,
            children:[
                {
                    path:'list',
                    name:'order-list',
                    component:OrderList
                },
                {
                    path:'confrim',
                    name:'order-confrim',
                    component:OrderConfrim
                },
                {
                    path:'pay',
                    name:'order-pay',
                    component:OrderPay
                },
                {
                    path:'alipay',
                    name:'alipay',
                    component:AliPay
                }
            ]
        }
    ]
})