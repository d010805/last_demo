<template>
  <div class="app-container">
    <HeaderNav v-show="$route.meta.showHeader"/>
    <router-view/>
    <Footer v-show="$route.meta.showFooter"/>
  </div>
</template>

<script type="text/ecmascript-6">
import Buyshop from '../src/pages/Buyshop/Buyshop';
import Category from '../src/pages/Category/Category.vue';
import General from '../src/pages/General/General.vue';
import Home from '../src/pages/Home/Home.vue';
import Person from '../src/pages/Person/Person.vue';
import Footer from './common/Footer/Footer.vue';
import HeaderNav from './common/HeaderNav/HeaderNav';


  export default {
    components:{
      Buyshop,
      Category,
      General,
      Home,
      Person,
      Footer,
      HeaderNav,

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app-container
    height 100%
    
 
</style>
