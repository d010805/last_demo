<template>
  <div>
    <div class="buy_header">
      <span>购物车</span>
      <div class="tips">
        <span>领券</span>
      </div>
    </div>
    <div class="car_content">
      <div class="service">
        <span>30天无忧退货</span>
        <span>48小时无忧退款</span>
        <span>满88元免邮费</span>
      </div>

      <div class="did_not_login">
        <img src="https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png" alt="ShopCar">
        <p>去添加点什么吧</p>
        <button @click="$router.replace('/person')">登录</button>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .buy_header
    position fixed
    top 0
    left 0
    width 100%
    height 88px
    background #fff
    display flex
    align-items center
    justify-content center
    span 
      display flex
      align-items center
      justify-content center
      font-size 36px
    .tips
      position absolute
      right 60px
      top 10px
      transform translateY(50%)
      font-size 30px
      color #b4282d
      span 
        font-size 30px
  .car_content
      width 100%
      height 100%
      padding-top 30px
      background #f4f4f4
      .service
        margin-top 88px
        font-size 24px
        color #666
        display flex
        align-items center
        justify-content space-around
      .did_not_login
        text-align center
        img
          display block
          width 248px
          height 248px
          margin 375px auto 0
        p
          font-size 28px
          color #999
        button
          width 480px
          height 92px
          margin 50px auto 450px
          font-size 30px
          color #fff
          background-color #b4282d
 
</style>
