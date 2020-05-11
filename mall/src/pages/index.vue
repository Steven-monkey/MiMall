<template>
    <div class="index">
        <div class="contaniner">
            <div class="swiper-box">
                <div class="nav-menu">
                    <ul class="menu-wrap">
                        <li class="menu-item">
                            <a href="javascript:;">手机 电话卡</a>
                            <div class="children"></div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">电视 盒子</a>
                            <div class="children"></div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">笔记本 显示器 平板</a>
                            <div class="children"></div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">家电 插线板</a>
                            <div class="children"></div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">出行 穿戴</a>
                            <div class="children"></div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">智能 路由器</a>
                            <div class="children"></div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">电源 配件</a>
                            <div class="children"></div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">健康 儿童</a>
                            <div class="children"></div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">耳机 音响</a>
                            <div class="children"></div>
                        </li>
                        <li class="menu-item">
                            <a href="javascript:;">生活 箱包</a>
                            <div class="children"></div>
                        </li>
                    </ul>
                </div>
                <swiper :options='swiperOption'>
                    <swiper-slide v-for="(item, index) in slideList" :key="index">
                        <a :href="'/#/product/'+item.id">
                            <img :src="item.img">
                        </a>
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                    <div class="swiper-button-prev"></div><!--左箭头。如果放置在swiper-container外面，需要自定义样式。-->
                    <div class="swiper-button-next"></div><!--右箭头。如果放置在swiper-container外面，需要自定义样式。-->
                </swiper>
            </div>
            <div class="ads-box"></div>
            <div class="banner"></div>
            <div class="product-box"></div>
        </div>
       <service-bar></service-bar>
    </div>
</template>
<script>
 import ServiceBar from './../components/ServiceBar'
 import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
 import 'swiper/css/swiper.css'
export default {
    name:'index',
    components:{
        Swiper,
        SwiperSlide,
        ServiceBar
    },
    data() {
        return {
            swiperOption:{
                autoplay:true,
                loop:true,
                effect:'fade',
                fadeEffect: {
                    crossFade: true,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable:true
                },
                navigation: { 
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            },
            slideList:[
                {
                    id:'42',
                    img:'/imgs/slider/slide-1.jpg'
                },
                {
                    id:'45',
                    img:'/imgs/slider/slide-2.jpg'
                },
                {
                    id:'46',
                    img:'/imgs/slider/slide-3.jpg'
                },
                {
                    id:'42',
                    img:'/imgs/slider/slide-4.jpg'
                },
                {
                    id:'42',
                    img:'/imgs/slider/slide-5.jpg'
                }
            ]
        }
    },
}
</script>
<style lang="scss">
@import '@/assets/sass/config.scss';
@import '@/assets/sass/mixin.scss';
.index{
    .swiper-box{
        position: relative;
        .nav-menu{
            position: absolute;
            width: 264px;
            height: 451px;
            z-index: 9;
            padding: 26px 0;
            background-color: #55585a6e;
            box-sizing: border-box;
            .menu-item{
                height: 40px;
                line-height: 40px;
                a{
                    position: relative;
                    display: block;
                    font-size: 16px;
                    color: $colorG;
                    padding-left: 30px;
                    &:after{
                        position: absolute;
                        right: 30px;
                        top:10.5px;
                        content: '';
                        @include bgImg(10px,15px,'/imgs/icon-arrow.png')
                    }
                    &:hover{
                        background-color: $colorA;
                    }
                }
            }
        }
        .swiper-container{
            height: 451px;
            --swiper-theme-color: #FF6600;/* 设置Swiper风格 */
            --swiper-navigation-color: #999999;/* 单独设置按钮颜色 */
            --swiper-navigation-size: 41px;/* 设置按钮大小 */
            .swiper-button-prev{
                left: 274px;
            }
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
} 
</style>