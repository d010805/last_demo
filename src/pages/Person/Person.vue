<template>
  <div>
    <HeaderSlot>
      <span slot="netease" class="netease">
        网易严选
      </span>
  </HeaderSlot>
  <div class="content_box" v-if="$route.path==='/person'">
    <div class="top_login">
      <div class="top_logo">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>
      <div class="phone_login" @click="$router.replace('/person/phone')">
        <i class="iconfont icon-shouji"></i>
        <span>手机号码登录</span>
      </div>
      <div class="email_login" @click="$router.replace('/person/email')">
        <i class="iconfont icon-youxiang"></i>
        <span>邮箱账号登录</span>
      </div>
      <div class="email_register" @click="$router.replace('/person/phone')">手机号快捷注册></div>
    </div>
    <ul class="bottom_nav">
      <li>
        <i class="iconfont icon-weixin"></i>
        <span>微信</span>
      </li>
      <li>|</li>
      <li>
        <i class="iconfont icon-qq"></i>
        <span>QQ</span>
      </li>
      <li>|</li>
      <li>
        <i class="iconfont icon-weibo"></i>
        <span>微博</span>
      </li>
    </ul>
  </div>
    <div v-else>
      <router-view></router-view>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Phone from './Phone/Phone.vue'
import Email from './Email/Email.vue'
  export default {
    components:{
      Phone,
      Email
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .content_box
    margin-top 88px
    height 100%
    display flex
    flex-direction column
    justify-content center
    align-items center
    .top_login
      height 100%
      width 677px
      .top_logo
        width 678px 
        height 423px
        display flex
        justify-content center
        align-items center
        img 
          width 268px
          height 90px
      .phone_login
        margin-top 32px
        width 100%
        height 96px
        color #fff
        background-color #b4282d
        display flex
        justify-content center
        align-items center
        i
          font-size 30px
        span 
          font-size 28px
          margin-left 16px
      .email_login
        margin-top 32px
        width 100%
        height 96px
        color #b4282d
        background-color #fff
        display flex
        justify-content center
        align-items center
        border 1px solid #b4282d
        i
          font-size 30px
        span 
          font-size 28px
          margin-left 16px
      .email_register
        text-align center
        font-size 28px
        margin-top 32px
    .bottom_nav
      display flex
      justify-content center
      margin 375px 0 100px 0
      li
        font-size 30px
        color #7f7f7f
        i
          font-size 36px
          margin 0 20px 0 40px
        span 
          font-size 30px
          margin-right 30px
</style>
