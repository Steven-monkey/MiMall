<template>
  <div class="order-list">
    <order-header title="订单列表">
    </order-header>
    <div class="wrapper">
      <div class="container">
        <div class="order-box">
            <loading v-if="loading"></loading>
          <div class="order" v-for="(item, index) in list" :key="index">
            <div class="order-title">
              <div class="item-info fl">
                {{item.createTime}}
                <span>|</span>
                {{item.receiverName}}
                <span>|</span>
                {{item.orderNo}} 
                <span>|</span>
                {{item.paymentTypeDesc}}
              </div>
              <div class="item-money fr">
                <span>应付金额：</span>
                <span class="money">{{item.payment}}</span>
                <span>元</span>
              </div>
            </div>
            <div class="order-content clearfix">
              <div class="good-box fl">
                <div class="good-list" v-for="(item, key) in item.orderItemVoList" :key="key">
                  <div class="good-img">
                    <img v-lazy="item.productImage">
                  </div>
                  <div class="good-name">
                    <div class="p-name">{{item.productName}}</div>
                    <div class="p-money">{{item.totalPrice+'×'+item.quantity}}元</div>
                  </div>
                </div>
              </div>
              <div class="good-state fr" v-if="item.status==20">
                <a href="javascript:;" >{{item.statusDesc}}</a>
              </div>
              <div class="good-state fr" v-else>
                <a href="javascript:;" @click="goPay(item.orderNo)" >{{item.statusDesc}}</a>
              </div>
         
            </div>
          </div>
           <el-pagination
            v-if='true'
            class="pagination"
            background
            layout="prev, pager, next"
            :total="total"
            :pageSize="pageSize"
            @current-change="handleCurrentChange"
            :hide-on-single-page="value">
          </el-pagination>
        <div class="load-more" v-if="false">
              <el-button type="primary" :loading="loading" @click="loadMore">加载更多</el-button>
        </div>
        <div 
        class="scroll-more" 
        v-infinite-scroll="loadScrollMore" 
        infinite-scroll-disabled="busy" 
        infinite-scroll-distance="410"
        v-if="true">
            <img src="/imgs/loading-svg/loading-spinning-bubbles.svg" alt="" v-show="loading">
        </div>
        </div>
        <no-data v-if="!loading && list.length==0"></no-data>
      </div>
    </div>
  </div>
</template>
<script>
  import OrderHeader from './../components/OrderHeader';
  import Loading from './../components/Loading';
  import NoData from './../components/NoData';
  import { Pagination,Button } from 'element-ui';
  import infiniteScroll from 'vue-infinite-scroll';
  export default { 
    name:'order-list',
    components:{
      OrderHeader,
      Loading,
      NoData,
      [Pagination.name]:Pagination,
      [Button.name]:Button
    },
    directives: {infiniteScroll},
    data() {
        return {
            list:[],
            loading:true,
            pageSize:10,
            pageNum:1,
            total:0,
            value:false,
            showNextPage:true,
            busy:false ,//是否滚动触发加载
        }
    },
    mounted() {
        this.getOrderList()
    },
    methods: {
        getOrderList(){
            this.loading=true;
            this.busy=true;
            this.axios.get('/orders',{
                params:{
                    pageNum:this.pageNum 
                }
            }).then((res)=>{
                this.loading=false;
                //数据拼接在一起
                this.list=res.list.concat(res.list);
                this.total=res.total;
                this.showNextPage=res.hasNextPage;
                this.busy=false;
            }).catch(()=>{
                this.loading=false
            })
        },
        //显示更多内容
        
        //三种路由跳转方式
        goPay(orderNo){
            // this.$router.push('/order/list')
            // this.$router.push({
            //     name:'order-list',
            //     query:{
            //         orderNo
            //     }
            // })
            this.$router.push({
                path:'/order/pay',
                //query传参直接将参数也添加到了地址栏
                //params 传参
                query:{
                    orderNo
                }
            })
        },
        //第一张：分页器
        handleCurrentChange(pageNum){
            this.pageNum=pageNum;
            this.getOrderList();
        },
        //第二种方法：分页器
        loadMore(){
            this.pageNum++;
            this.getOrderList()
        },
        //第三种滚动加载，通过npm插件
        loadScrollMore(){
            this.busy=true;
            setTimeout(() => {
                this.pageNum++;
                this.getList()
            }, 500);
        },
        //专门给滚动加载用
        getList(){
            this.loading=true
            this.axios.get('/orders',{
                params:{
                    pageNum:this.pageNum 
                }
            }).then((res)=>{
                this.list=res.list.concat(res.list);
                this.loading=false;
                if (res.hasNextPage) {
                    this.busy=false
                }else{
                    this.busy=true
                }
            })
        },
    },
  }
</script>
<style lang="scss">
  @import '@/assets/sass/config.scss';
  @import '@/assets/sass/mixin.scss';
  .order-list{
    .wrapper{
      background-color:$colorJ;
      padding-top:33px;
      padding-bottom:110px;
      .order-box{
        .order{
          @include border();
          background-color:$colorG;
          margin-bottom:31px;
          &:last-child{
            margin-bottom:0;
          }
          .order-title{
            @include height(74px);
            background-color:$colorK;
            padding:0 43px;
            font-size:16px;
            color:$colorC;
            .item-info{
              span{
                margin:0 9px;
              }
            }
            .money{
              font-size:26px;
              color:$colorB;
            }
          }
          .order-content{
            padding:0 43px;
            .good-box{
              width:88%;
              .good-list{
                display: flex;
                align-items: center;
                height:145px;
                .good-img{
                  width:112px;
                  img{
                    width:100%;
                  }
                }
                .good-name{
                  font-size:20px;
                  color:$colorB;
                }
              }
            }
            .good-state{
              @include height(145px);
              font-size: 20px;
              color:$colorA;
              a{
                color:$colorA;
              }
            }
          }
        }
        .pagination{
          text-align:right;
        }
        .el-pagination.is-background .el-pager li:not(.disabled).active{
          background-color: #FF6600;
        }
        .el-button--primary{
          background-color: #FF6600;
          border-color: #FF6600;
        }
        .load-more,.scroll-more{
          text-align:center;
        }
      }
    }
  }
</style>