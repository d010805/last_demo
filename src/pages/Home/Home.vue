<template>
  <div class="HomeContainer">
    <div>
      <!-- 轮播图 -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/5afff79cb85dfcd465e6da0d8404ddae.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/bec4a597a9aed55605eeb7c0c7710f9b.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/981c28d7f7276a2c84bf8c7790a9b559.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/feadfbdcc0e2dea285d92c6740d46c66.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        </div>
        <div class="swiper-slide">
          <img src="https://yanxuan.nosdn.127.net/791dda3ae432212164b1668b25fbd11c.jpg?imageView&quality=75&thumbnail=750x0" alt="">
        </div>
        </div>
        <div class="swiper-pagination">
      </div>
    </div>
    <!-- 轮播图下面部分 -->
    <div class="service">
      <ul>
        <li class="item" v-for="(nav,index) in home.homeData.policyDescList" :key="index">
          <span>{{nav.desc}}</span>
        </li>
      </ul>
    </div>
    <!-- 类别列表 -->
    <div class="user_nav">
      <ul v-if="home.homeData.kingKongModule">
        <li v-for="(item,index) in home.homeData.kingKongModule.kingKongList">
          <a href="javascript:">
            <img v-lazy="item.picUrl" alt="">
            <p>{{item.text}}</p>
          </a>
        </li>
      </ul>
    </div>
    <!-- Boss图片 -->
    <div class="bossRecommen">
      <img src="https://yanxuan.nosdn.127.net/df012027a9bd3c0b0e5779c11b814180.png" alt="">
    </div>
    <!-- 四页列表 -->
    <div class="scene_light">
      <ul>
        <li v-for="(txt,index) in home.homeData.sceneLightShoppingGuideModule" :key="index">
          <p class="title">{{txt.styleItem.title}}</p>
          <p class="desc">{{txt.styleItem.desc}}</p>
          <div>
             <img v-lazy="txt.styleItem.itemPicBeanList[0].picUrl" alt="">
              <img v-lazy="txt.styleItem.itemPicBeanList[1].picUrl" alt="">
          </div>
         </li>
      </ul>
    </div>
    <!-- 私人定制 -->
    <div class="personal_shop">
      <div class="personal_title">私人定制</div>
      <div class="personal_swiperbox">
        <div class="swiper-container">
        <div class="swiper-wrapper" v-if="personalShopArr">
          <div class="swiper-slide"  v-for="(personalShop, index) in personalShopArr" :key="index">
            <div class="personal_item"  v-for="(good ,index) in personalShop" :key="index">
              <img v-lazy="good.primaryPicUrl" alt="">
              <div class="personal_content">
                <span class="name">{{good.name}}</span>
                <span class="price">¥{{good.retailPrice}}</span>
              </div>
            </div>
          </div>
        </div>
          <div class="swiper-pagination">
        </div>
      </div>
      </div>
    </div>          
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import {mapState} from 'vuex'
import BScroll from '@better-scroll/core'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
  
  export default {

  computed:{
    ...mapState({
      home:state=>state.home
    }),
    personalShopArr () {
        let arr3 = []
        if(this.home.homeData.personalShop){
          this.home.homeData.personalShop.reduce((arr, shop)=>{
            arr.push(shop)
            if(arr.length === 3){
              arr3.push(arr)
              arr = []
            }
            return arr
          }, [])
        }
        return arr3
      }
    
  },
   mounted(){
    //  const HeaderScroll = new BScroll('.tabWrap-left',{
    //   click: true,
    //   scrollX:true
    //  })
      const swiper=new Swiper('.swiper-container',{
        loop:true,
        autoplay:true,
        pagination: {
          el: '.swiper-pagination',
        },
      })
   }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .HomeContainer
    width 100%
    height 100%
    padding-top 184px
    padding-bottom 80px
    overflow hidden
    .swiper-container
      width 100%
      height 370px
      .swiper-wrapper
        .swiper-slide
          img 
            width 100%
            height 100%
      .swiper-pagination
        display flex
        justify-content center
        align-items center
        height 40px
        span 
          width 30px
          height 2px
          flex none
          margin 0 10px
          background-color rgba(255, 255, 255, 0.8)
          &.swiper-pagination-bullet
              border-radius 0
          &.swiper-pagination-bullet-active
              background-color #f00
              border-radius none
    .service
      width 100%
      ul
        display flex
        padding 0 30px
        justify-content center
        .item
          width 172px
          height 70px
          line-height 70px
          font-size 24px
          color #b4282d
          display flex
          justify-content flex-end
          padding 0 20px
      .swiper-pagination
        >>>span.swiper-pagination-bullet
          width 40px
          height 4px
          display inline-block
          background #fff
          opacity 0.4
          border-radius 0
          margin 0 10px 0 0
        >>>span.swiper-pagination-bullet-active
          opacity 1
          background red
          border-radius 0
    .user_nav
      width 100%
      height 330px
      ul
        display flex
        flex-wrap wrap
        justify-content space-between
        font-size 24px
        margin-bottom 40px
        li
          width 110px
          height 156px
          margin 10px 20px 0
          a
            text-align center
            img 
              width 110px
              height 110px
    .bossRecommen
      width 100%
      height 160px
      margin-bottom 40px
      img 
        width 100%
        height 100%
    .scene_light
      ul
        display flex
        flex-wrap wrap
        justify-content center
        li
          width 342px
          height 240px
          background #f5f5f5
          margin-left 4px
          margin-top 4px
          padding 20px 0 0 20px
          .title
            font-size 32px
          .desc
            font-size 24px
            margin 10px 0
          div
            width 323px
            height 150px
            img 
              width 150px
              height 150px
              display inline-block
    .personal_shop
      .personal_title
        height 100px
        line-height 100px
        font-size 32px
        padding-left 30px
      .personal_swiperbox
        height 346px
        .swiper-slide
          display flex
          .personal_item
            width 210px
            height 346px
            margin-left 20px
            img 
              width 216px
              height 216px
            .personal_content
              width 100%
              height 108px
              display flex
              flex-direction column
              .name 
                width 216px
                color #333
                margin-top 0
                margin-bottom 10px
                font-size 24px
                line-height 36px
                white-space normal
              .price
                font-size 22.5px
                color #b4282d



</style>