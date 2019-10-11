<template>
  <div class="productionList_wrapper"> 
    <div class="recommend_rec recommend">
      <a href="javascript:void(0);" class="user_list"  >
        <div class="info">
          <div class="name">
            <span calss="avatar">
              <img v-lazy="item.avatar" />
            </span>
            <span>{{item.nickname}}</span>
          </div>
          <div class="title">{{item.title}}</div>
          <div class="desc">{{item.subTitle}}</div>
          <div class="admire"><i class="iconfont icon-kanguo"></i><span>{{item.readCount}}人看过</span></div>
          
        </div>
        <div class="pic">
          <img v-lazy="item.picUrl" alt="pic">
        </div>
      </a>
      <Split></Split>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
 import {mapState} from 'vuex'
  export default {
    name: 'SmallImg',
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
  .recommend
    background #fff
    padding 0 30px
    border-sizing border-box
    a 
      width 100%
      display flex
      justify-content space-between
      .info 
        width 360px
        height 254px
        .name
          margin-bottom 20px
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
          font-size 30px
          line-height 50px
          color #333333
          font-family PingFangSC-Regular  
        .desc
          font-size 24px
          color #7f7f7f
        .admire
          display flex
          align-items center
          justify-items center
          margin-bottom -10px
          color #999
          margin-top 20px 
          i 
            display inline-block
            vertical-align middle 
            font-size 24px
          span 
            font-size 24px
            margin-left 8px
      .pic  
        width 300px
        height 250px
        img 
          width 100%
          height 100%
    
 
</style>
