<template>
  <div class="FooterContainer">
    <ul>
       <li :class="{active: $route.path === '/home' || $route.path.indexOf('/home') !== -1}" @click="goto('/home')">
      <div class="footer-icon">
        <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png" alt="icon">
      </div>
      <span>首页</span>
    </li>
    <li :class="{active: $route.path === '/category' || $route.path.indexOf('/category') !== -1}" @click="goto('/category')">
      <div class="footer-icon" >
      <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png" alt="icon">
      </div>
      <span>分类</span>
    </li>
    <li :class="{active: $route.path === '/general' || $route.path.indexOf('/general') !== -1}" @click="goto('/general')">
      <div class="footer-icon">
      <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png" alt="icon">
      </div>
      <span>识物</span>
    </li>
    <li :class="{active: $route.path === '/buyshop'}" @click="goto('/buyshop')">
      <div class="footer-icon">
      <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png" alt="icon">
      </div>
      <span>购物车</span>
    </li>
    <li :class="{active: $route.path === '/person'}" @click="goto('/person')">
      <div class="footer-icon">
      <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png" alt="icon">
      </div>
      <span>个人</span>
    </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name :'Footer',
    methods:{
      goto(path){
        this.$router.replace(path )
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../stylus/mixins.styl"
  .FooterContainer
    position fixed
    left 0
    bottom 0
    height 80px
    width 100%
    z-index 2
    ul
      display flex
      justify-content space-around
      height 80px
      width 100%
      font-size 24px
      background-color #eee
      margin-bottom -100px
      li
        display flex
        flex-direction column
        justify-content space-around
        align-items center
        margin-top 10px
        .footer-icon
          position relative
          width 40px
          height 40px
          overflow hidden
          img
            position absolute
            left 0
            top 0
            width 40px
            height 490px
        &:nth-of-type(1)
          img
            top -250px
        &:nth-of-type(2)
          img
            top -150px
        &:nth-of-type(3)
          img
            top -350px
        &:nth-of-type(4)
          img
            top -47px
        &:nth-of-type(5)
          img
            top -450px
        &.active
          color $red
          img
            transform translateY(49px)
</style>
