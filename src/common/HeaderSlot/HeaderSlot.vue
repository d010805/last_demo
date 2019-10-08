<template>
    <div class="gen_header">
      <div class="left_box" @click="$router.replace('/home')">
        <i class="iconfont icon-shouye"></i>
      </div>
      <div class="center_box">
        <slot name="netease"></slot><!--<div slot="netease"><span class="netease">网易严选</span></div>-->
        <slot name="fond"></slot><!-- 发现 -->
        <slot name="specia_choice"></slot>
      </div>
      <div class="right_box">
        <i class="iconfont icon-sousuo" @click="$router.push('/search')"></i>
        <i class="iconfont icon-gouwuche"  @click="$router.replace('/buyshop')"></i>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .gen_header
    position fixed
    top 0 
    left 0
    width 100%
    height 88px
    border-bottom 1px solid #eee
    display flex
    align-items center
    justify-content space-between
    z-index 3
    background #fff
    .left_box
      display flex
      margin-left 24px
      i
        font-size 51px
    .center_box
      width 60%
      margin-left 36px
      font-size 28px
      display flex
      justify-content center
      align-items center
      .netease
        font-size 40px
        font-weight 700
        color #000
      span:first-child
        text-align center
      span:last-child
        margin-left 36px
      span.active
        font-size 36px
        font-weight 700
        color #b4282d
    .right_box
      width 20%
      display flex
      i
        font-size 51px
        margin-right 24px
  
 
</style>
