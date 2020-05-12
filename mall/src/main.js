import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyload from 'vue-lazyload'
import VueCookie from 'vue-cookie'
// import env from './env'

//设置一个mock的开关
const mock=true
if (mock) {
  require('./mock/api')
}
axios.defaults.baseURL='/api';
axios.defaults.timeout=8000;
//根据环境变量获取不用的请求地址
// axios.defaults.baseURL=env.baseURL;

//接口错误拦截
axios.interceptors.response.use(function(response){
  let res=response.data;
  if(res.status==0){
    return res.data;
  }else if(res.status==10){
    window.location.href='/#/login'
  }else{
    alert(res.msg)
  }
})
Vue.use(VueAxios,axios)
Vue.use(VueCookie)
Vue.use(VueLazyload,{
  loading:'/imgs/loading-svg/loading-bars.svg'
})
//生产环境的提示
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
