<template>
<div>
    <HeaderSlot>
      <span slot="fond">
        <span :class="{active:isShow}" @click="isShow=true;$router.replace('/general/fond')">发现</span>
      </span>
      <span slot="specia_choice" @click="isShow=false;$router.replace('/general/choice')" :class="{active:!isShow}">甄选家</span>
    </HeaderSlot>
    <div class="gen_tab" v-show="isShow?true:false">
      <ul>
        <li class="active">推荐</li>
        <li>好货内部价</li>
        <li>晒单</li>
        <li>选购指南</li>
        <li>回购榜</li>
        <li>达人</li>
        <li>Home</li>
      </ul>
    </div>
    <router-view/>
</div>
</template>

<script type="text/ecmascript-6">
import BScroll from '@better-scroll/core'
import Found from './Found/Found'
import Choice from './Choice/Choice'
  export default {
    data(){
      return{
        isShow:true
      }
    },
    mounted(){
     const ConentScroll = new BScroll('.gen_content',{
      click: true,
      scrollY:true
     })
    },
    components:{
      Found,
      Choice
    }
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
        height 100%
        padding 0 10px
        &.active
          color #b4282d
          border-bottom 6px solid #b4282d
</style>
