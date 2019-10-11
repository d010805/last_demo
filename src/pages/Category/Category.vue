<template>
  <div>
    <div class="cate_header">
      <div class="search_box" @click="$router.push('/search')">
        <div>
          <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png" alt="">
          <span>搜索商品，共19999件好物</span>
        </div>
      </div>
    </div>
    <div class="cate_content"  v-if="cate.categoryL1List">
      <div class="content_left" ref="left">
        <ul>
          <li v-for="(item,index) in cate.categoryL1List" :key="index" 
          :class="{active:cate.categoryL1List[currtIndex]===item}" 
          @click="togo(index)">{{item.name}}</li>
        </ul>
      </div>
      <div class="content_right"  ref="right">
        <div class="rightscroll">
          <img v-lazy="cate.categoryL1List[currtIndex].wapBannerUrl" alt="">
          <ul>
            <li v-for="(txt,index) in cate.categoryL1List[currtIndex].subCateList" :key="index">
              <div>
                <img v-lazy="txt.bannerUrl" alt="">
                <div>{{txt.name}}</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from '@better-scroll/core'
import { mapState } from 'vuex';
  export default {
    name:"Category",
    data(){
      return{
        currtIndex:0
      }
    },
    computed:{
      ...mapState({
        cate:state=>state.category.cate
      })
    },
    async mounted(){
      await this.$store.dispatch('getCategoryData')
      this.$nextTick(()=>{
        const LeftScroll = new BScroll(this.$refs.left,{
          click: true,
          scrollX:true
        })
        const RightScroll = new BScroll(this.$refs.right,{
          click: true,
          scrollY:true
        })
      })
    },
    methods:{
      togo(index){
        this.currtIndex=index
      }
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .cate_header
    width 100%
    height 88px
    font-size 28px
    display flex
    justify-content center
    align-items center
    z-index 100
    .search_box
      width 675px
      height 55px
      background #eeeeee
      display flex
      justify-content center
      align-items center
      div
        display flex
        justify-content center
        img 
          display inline-block
          margin-right 5px
  .cate_content
    display flex
    justify-content space-between
    overflow hidden
    .content_left
      width 130px
      height 100%
      max-height 1144px
      overflow hidden
      ul
        width 100%
        display flex
        flex-direction column
        li
          width 150px
          font-size 28px
          height 50px
          line-height 50px
          text-align center
          margin-top 40px
          &:first-child
            margin-top 20px
          &.active
              color #b4282d
              border-left 6px solid #b4282d
    .content_right
      font-size 28px
      width 527px
      margin 15px 30px 80px 30px
      height 100%
      .rightscroll
        height  100%
        img 
          width 100%
          height 192px
        ul
          display flex
          flex-wrap wrap
          li
            width 144px
            height 216px 
            margin-right 30px
            div
              img 
                width 143px
                height 143px
              div
                width 143px
                height 72px
                text-align center


 
</style>
