<template>
<div>
    <HeaderSlot>
      <span slot="fond">
        <span :class="{active:$route.path==='/general/fond'}" @click="isShow=true;$router.replace('/general/fond')">发现</span>
      </span>
      <span slot="specia_choice" @click="isShow=false;$router.replace('/general/choice')" :class="{active:$route.path==='/general/choice'}">甄选家</span>
    </HeaderSlot>
    <div class="gen_tab" v-show="$route.path==='/general/fond'?true:false">   <!--v-show="isShow?true:false"-->
      <ul>
        <li v-for="(item,index) in nav" :key="index" :class="{active:nav[curtIndex]===item}" @click="goto(index)">{{item.tabName}}</li>
      </ul>
    </div>
    <div class="things-content">
      <router-view></router-view>
    </div>
</div>
</template>

<script type="text/ecmascript-6">
import BScroll from '@better-scroll/core'
// import Found from './Found/Found'
// import Choice from './Choice/Choice'
import { mapState } from 'vuex'
  export default {
    name:"General",
    data(){
      return{
        isShow:true,
        curtIndex:0
      }
    },
    methods:{
      goto(index){
        this.curtIndex=index
      }
    },
    computed:{
      ...mapState({
        nav:state=>state.categoryList.nav
      })
    },
    async mounted(){
      await this.$store.dispatch('getRemmendNav')
    //  const ConentScroll = new BScroll('.forLazy',{
    //   click: true,
    //   scrollY:true
    //  })
    },
    // components:{
    //   Found,
    //   Choice
    // }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" >
  .gen_tab
    width 100%
    position fixed
    top 0
    left 0
    margin-top 88px
    background #eee
    height 76px
    line-height 76px
    z-index 3
    ul
      width 100%
      height 100%
      display flex
      align-items center
      justify-content space-between
      li
        font-size 28px
        padding 0 5px
        &.active
          color #b4282d
          border-bottom 6px solid #b4282d
  .things-content
    width 100%
    padding-top 164px
</style>
