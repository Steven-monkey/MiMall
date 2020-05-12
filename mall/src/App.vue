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
   
    
  },
}
</script>

<style lang='scss'>
@import './assets/sass/reset.scss';
@import './assets/sass/button.scss';
</style>
