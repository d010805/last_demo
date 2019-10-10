<template>
  <div style="z-index:2" class="Header">
     <!-- 搜索框的头部 -->
    <div class="Home-header">
      <a href="/"></a>
      <div class="header-middle" @click="$router.push('/search')">
        <i></i>
        <span>搜索商品，共3款好物</span>
      </div>
      <button>登录</button>
    </div>
    <!-- 滑动导航栏 -->
    <div class="tabWrap">
      <div class="tabWrap-left" v-if="home.homeData">
        <ul class="list"  v-if="home.homeData.kingKongModule">
          <li class="item" v-for="(nav,index) in home.homeData.kingKongModule.kingKongList" :key="index"
           @click="togo(index)">
            <a href="javascript:" 
            :class="{active:home.homeData.kingKongModule.kingKongList[curIndex]===nav}"
            >{{nav.text}}</a>
          </li>
        </ul>
      </div>
      <div class="tabWrap-right">
        <div class="img_box">
          <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-799ded53ea.png" alt=""
          @click="isOpen=!isOpen"
          >
        </div>
      </div>
       <!-- isOpen -->
      <div class="navWrapper" v-show="isOpen">
        <p>全部频道</p>
        <ul class="navList" v-if="home.homeData.kingKongModule">
          <li v-for="(nav,index) in home.homeData.kingKongModule.kingKongList" :key="index"
            :class="{active_mask:home.homeData.kingKongModule.kingKongList[curIndex]===nav}"
            @click="togo(index)"
          >
            <a href="javascript:void(0);"
            >{{nav.text}}</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import {mapState} from 'vuex'
import BScroll from '@better-scroll/core'
  export default {
    name :'HeaderNav',
    data(){
      return{
        isOpen:false,
        curIndex:0
      }
    },
    computed:{
      ...mapState({
        home:state=>state.home
      })
    },
    methods:{
      togo(index){
        this.curIndex=index
      }
    },
    
    async mounted(){
     await this.$store.dispatch('getHomeData')
      this.$nextTick(()=>{
        const HeaderScroll = new BScroll('.tabWrap-left',{
          click: true,
          scrollX:true
        })
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../stylus/mixins.styl"
  .Header
    position fixed
    top 0
    left 0
    z-index 2
    background #fff
    .Home-header
      padding 20px 15px
      display flex
      align-items center
      z-index 3
      a
        display inline-block
        width 150px
        height 45px
        background url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png) no-repeat
        margin-right 10px
      .header-middle
        display flex
        width 424px
        height 60px
        background #eee
        padding 2px 25px
        border-radius 10px
        i 
          margin-top 15px
          margin-right 15px
          width 30px
          height 30px
          display inline-block
          background url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png) no-repeat
        span 
          font-size 30px
          line-height 60px
          color rgba(125,125,125,0.7)
      button 
        margin-left 18px
        width 70px
        height 37px
        background #fff
        border 1px solid rgb(180, 40, 45)
        border-radius 10px
        font-size 24px
        color rgb(180, 40, 45)
    .tabWrap
      background #eee
      display flex
      justify-content space-between
      height 80px
      .tabWrap-left
        width 90vw
        height 80px
        overflow hidden
        flex-shrink 0
        display flex
        align-items center
        ul
          display flex
          li
            flex none 
            margin 0px 16px
            font-size 28px
            a
              padding 2px 0
              display inline-block
              width 120px
              text-align center
              &.active
                box-sizing: border-box;
                min-width: 90px;
                color: #b4282d;
                border-bottom: 6px solid #b4282d
      .tabWrap-right
        width 10%
        position fixed
        right -21px
        top 126px
        z-index 100
      .navWrapper
        position absolute
        left 0
        top 104px
        width 100%
        background-color #ffffff
        p
          height 60px
          line-height 60px
          padding-left 30px
          font-size 28px
          color #333
          display flex
          align-items center
        .navList
          display flex 
          flex-wrap wrap
          justify-content flex-start
          padding-top 15px
          overflow hidden
          li
            width 150px
            height 56px
            line-height 28px
            text-align center
            margin-bottom 40px
            margin-left 30px
            background #FAFAFA
            border 1px solid #CCC
            border-radius 4px
            &.active_mask
              border: 2px solid #b4282d
            a 
              color #333
              font-size 24px
              
 
</style>
