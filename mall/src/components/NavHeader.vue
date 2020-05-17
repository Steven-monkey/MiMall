<template>
    <div class="header">
        <div class="nav-topbar">
            <div class="contaniner">
                <div class="topbanr-menu">
                    <a href="javascript:;">小米商城</a>
                    <a href="javascript:;">MIUI</a>
                    <a href="javascript:;">IoT</a>
                    <a href="javascript:;">云服务</a>
                    <a href="javascript:;">金融</a>
                    <a href="javascript:;">有品</a>
                </div>
                <div class="topbanr-user">
                    <a href="javascript:;" v-if="username">{{username}}</a>
                     <a href="javascript:;" v-if="!username" @click="login">登录</a>
                     <a href="javascript:;" v-if="username" @click="loginout">退出</a>
                    <a href="/#/order/list" v-if="username" >我的订单</a>
                    <a href="javascript:;" class="my-cart" @click="goToCart">
                        <span class="icon-cart"></span>
                        购物车({{cartCount}})
                    </a>
                </div>
            </div>
        </div>
        <div class="nav-header">
            <div class="contaniner">
                <div class="header-logo">
                    <a href="/#/index"></a>
                </div>
                <div class="header-menue">
                    <div class="item-menue">
                        <span>小米手机</span>
                        <div class="children">
                            <ul>
                                <li class="product" v-for="(item, index) in phoneList" :key="index">
                                    <a :href="'/#/product/'+item.id" target="_blank">
                                        <div class="pro-img">
                                            <img v-lazy="item.mainImage" :alt="item.subtitle">
                                        </div>
                                        <div class="pro-name">{{item.name}}</div>
                                        <div class="img-price">{{item.price | currency}}</div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="item-menue">
                        <span>RedMi手机</span>
                        <div class="children"></div>
                    </div>
                     <div class="item-menue">
                        <span>电视</span>
                        <div class="children"></div>
                    </div>
                </div>
                <div class="header-search">
                    <div class="wrapper">
                        <input type="text" name="keyword">
                        <a href="javascript:;"></a>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
import {mapState} from 'vuex'
import {Message} from 'element-ui'
export default {
    name:'nav-header',
    data() {
        return {
            phoneList:[]
        }
    },
    computed: {
    //     username(){
    //         return this.$store.state.username
    //     },
    //     cartCount(){
    //         return this.$store.state.cartCount
    //     }
    // },
    ...mapState(['username','cartCount']),
    },
    filters:{
        currency(val){
            if(!val) return '0.00';
            return '￥'+val.toFixed(2)+'元'
        }
    },
    mounted() {
      this.getProductList();
      let params=this.$route.params;
      if(params&&params.from=='login'){
        this.getCartCount()
      }
      
    },
    methods: {
        login(){
            this.$router.push('/login');
        },
        getCartCount(){
            this.axios.get('/carts/products/sum').then((res=0)=>{
            //to-do 保存到vuex里面
            this.$store.dispatch('saveCartCount',res)
            })
        },
        loginout(){
            this.axios.post('/user/logout').then(()=>{
                Message.success('退出成功');
                this.$cookie.set('userId','',{expires:'-1'});
                this.$store.dispatch('saveUserName','')
                this.$store.dispatch('saveCartCount','')
            })
        },
        getProductList(){
            this.axios.get('/products',{
                params:{
                    categoryId:'100012',
                    //最大显示的值
                    pageSize:6
                }
            }).then((res)=>{
                    this.phoneList=res.list;
            })
        },
        goToCart(){
            this.$router.push('/cart');
        }
    },
}
</script>
<style lang="scss" scope="this api replaced by slot-scope in 2.5.0+">
@import '@/assets/sass/base.scss';
@import '@/assets/sass/mixin.scss';
@import '@/assets/sass/config.scss';
.header {
    .nav-topbar{
        height: 39px;
        line-height: 39px;
        background-color: #333333;
        color: #b0b0b0;
        .contaniner{
            @include flex();
            a{
                display: inline-block;
                color: #b0b0b0;
                margin-left: 17px;
            }
            .my-cart{
                width: 110px;
                background-color: #FF6600;
                text-align: center;
                color: #ffffff;
                .icon-cart{
                    @include bgImg(16px,12px,'/imgs/icon-cart-checked.png')
                }
            }
        }
    }
     .nav-header{
         .contaniner{
             position: relative;
             height: 112px;
             @include flex();
            .header-menue{
                display:inline-block;
                width: 643px;
                padding-left: 209px;
                .item-menue{
                    display: inline-block;
                    color: #333333;
                    font-weight: 700;
                    font-size: 16px;
                    line-height: 112px;
                    margin-right: 20px;
                    span{
                        cursor: pointer;
                    }
                    &:hover{
                        color:$colorA;
                        .children{
                            height: 220px;
                            opacity: 1;
                        }
                    }
                    .children{
                        position: absolute;
                        top: 112px;
                        left: 0;
                        width: 1226px;
                        height: 0px;
                        opacity: 0;
                        overflow: hidden;
                        border: 1px solid #e5e5e5;
                        box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
                        z-index: 10;
                        transition: all .5s;
                        background-color: #ffffff;
                        .product{
                            position: relative;
                            float: left;
                            width: 16.6%;
                            height: 220px;
                            font-size: 12px;
                            line-height: 12px;
                            text-align: center;
                            a{
                                display: inline-block;
                            }
                            img{
                                height: 111px;
                                width: auto;
                                margin-top: 26px;
                            }
                             &:before{
                            content: '';
                            position: absolute;
                            top: 45px;
                            right: 0;
                            border-left: 1px solid $colorF;
                            height: 100px;
                            width: 1px;
                            }
                            &:last-child:before{
                                display: none;
                            }
                            .pro-img{
                                height: 137px;
                            }
                            .pro-name{
                                font-weight: bolder;
                                margin-top: 19px;
                                margin-bottom: 8px;
                                color: $colorB;
                            }
                            .img-price{
                                color: $colorA;
                            }
                        }
                    }
                }
            }
            .header-search{
                width: 319px;
                .wrapper{
                    height: 50px;
                    border:1px solid #e0e0e0 ;
                    display: flex;
                    align-items: center;
                    input{
                        border:none;
                        border-right: 1px solid #e0e0e0;
                        width: 264px;
                        height: 50px;
                        padding-left: 14px;
                        box-sizing: border-box;
                    }
                    a{
                        @include bgImg(18px,18px,'/imgs/icon-search.png');
                        margin-left: 17px;
                    }
                }
            }
        }
    }
}
</style>