<template>
  <div>
    <div class="content_box">
      <div class="login_logo">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>
      <div class="phone_number">
        <input type="text" placeholder="请输入邮箱">
      </div>
      <div class="password">
        <input type="text" placeholder="请输入密码">
      </div>
      <div class="login_help">
        <span>遇到问题?</span>
        <span>使用密码验证登录</span>
      </div>
      <div class="login_btn">登录</div>
      <div class="other_btn" @click="$router.replace('/person')">其他登录方式</div>
      <div class="register_btn">注册账号></div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .content_box
    margin-top 88px
    display flex
    flex-direction column
    justify-content center
    align-items center
    .login_logo
      margin 56px 0 135px 0
      img 
        width 192px
        height 64px
        margin 0 auto
    .phone_number
      width 675px 
      height 90px
      margin 30px auto
      input 
        display block
        width 100%
        height 100%
        outline none
        border 0 none
        border-bottom 1px solid #bdbdbd
        font-size 30px
        line-height 45px
    .password
      width 675px 
      height 90px
      margin 30px auto
      position relative
      input 
        display block
        width 100%
        height 100%
        outline none
        border 0 none
        border-bottom 1px solid #bdbdbd
        font-size 30px
        line-height 45px
    .login_help
      width 90%
      font-size 28px
      line-height 45px
      margin-bottom 64px
      display flex
      justify-content space-between
      align-items center
    .login_btn
      margin-top 32px
      width 90%
      height 96px
      color #fff
      background-color #b4282d
      display flex
      justify-content center
      align-items center
      font-size 28px
    .other_btn
      margin-top 32px
      width 90%
      height 96px
      color #b4282d
      background-color #fff
      display flex
      justify-content center
      align-items center
      border 1px solid #b4282d
      font-size 28px
    .register_btn
      margin-top 32px
      font-size 28px
      line-height 40px
      color #333
      text-align center
</style>
