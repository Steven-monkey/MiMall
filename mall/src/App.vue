<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      res:{}
    }
  },
  components: {
  },
  mounted() {
    this.getUser();
    this.getCartCount()
  },
  methods: {
    getUser(){
      this.axios.get('/user').then((res)=>{
        //to-do 保存到vuex里面
        this.$store.dispatch('saveUserName',res.username)
      })
    },
    getCartCount(){
      this.axios.get('/carts/products/sum').then((res)=>{
        //to-do 保存到vuex里面
        this.$store.dispatch('saveCartCount',res)
      })
    }
  },
}
</script>

<style lang='scss'>
@import './assets/sass/reset.scss';
@import './assets/sass/button.scss';
</style>
