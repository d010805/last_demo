<template>
  <div class="recommend_container">
    <div class="recommend_wrapper">
      <div class="recommend_wra recommend">
        <a href="javascript:void(0);">
          <div class="name">
              <img v-lazy="item.avatar" />
            <span>{{item.nickname}}</span>
          </div>
          <div class="title">{{item.title}}</div>
          <div class="pic">
            <img v-lazy="item.picUrl" alt="pic">
          </div>
          <div class="admire"><i class="iconfont icon-kanguo"></i><span>{{item.readCount}}人看过</span></div>
          <Split></Split>
        </a>
      </div>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  export default {
    name: 'BigImg',
    props: {
      item: Object
    },
    // computed: {
    //   ...mapState({
    //     content:state=>state.categoryList.content
    //   })
    // }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .recommend_container
    box-sizing border-box
    font-size 28px
    background-color #fff
    overflow hidden
    .recommend
      background #fff
      padding 0px 30px
      border-sizing border-box
      a
        .name
          // margin-bottom 20px
          font-size 26px
          color #333333
          display flex
          justify-items center
          align-items center
          img  
            width 50px
            display flex
            border-radius 50%
          span 
            margin-left 10px
        .title
          font-size 36px
          line-height 60px
          color #333333
          font-family PingFangSC-Regular  
        .pic  
          width 680px
          height 400px
          img 
            width 100%
            height 100%
        .admire
          display flex
          align-items center
          justify-items center
          margin-bottom -10px
          color #999
          margin-top 20px 
          i 
            width 20px
            height 20px
            display inline-block
            vertical-align middle 
            font-size 24px
          span 
            font-size 24px
            margin-left 8px
    .recommend_rec
      a
        display flex
        .desc
          padding-top 6px
</style>
