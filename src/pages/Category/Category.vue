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
    <div class="cate_content">
      <div class="content_left">
        <ul>
          <li class="active">推荐专区</li>
          <li>推荐专区</li>
          <li>推荐专区</li>
          <li>推荐专区</li>
          <li>推荐专区</li>
          <li>推荐专区</li>
          <li>推荐专区</li>
          <li>推荐专区</li>
          <li>推荐专区</li>
          <li>推荐专区</li>
          <li>推荐专区</li>
          <li>推荐专区</li>
          <li>推荐专区</li>
          <li>推荐专区</li>
        </ul>
      </div>
      <div class="content_right">
        <img src="http://yanxuan.nosdn.127.net/ebf42d9334b2e23c009313eb097aadd2.jpg" alt="">
        <ul>
          <li>
            <div>
              <img src="http://yanxuan.nosdn.127.net/14bbdfb252b4ce346b8e9d019bb5b677.png" alt="">
              <div>丁磊的好货推荐</div>
            </div>
          </li>
          <li>
            <div>
              <img src="http://yanxuan.nosdn.127.net/14bbdfb252b4ce346b8e9d019bb5b677.png" alt="">
              <div>丁磊的好货推荐</div>
            </div>
          </li>
          <li>
            <div>
              <img src="http://yanxuan.nosdn.127.net/14bbdfb252b4ce346b8e9d019bb5b677.png" alt="">
              <div>丁磊的好货推荐</div>
            </div>
          </li>
          <li>
            <div>
              <img src="http://yanxuan.nosdn.127.net/14bbdfb252b4ce346b8e9d019bb5b677.png" alt="">
              <div>丁磊的好货推荐</div>
            </div>
          </li>
          <li>
            <div>
              <img src="http://yanxuan.nosdn.127.net/14bbdfb252b4ce346b8e9d019bb5b677.png" alt="">
              <div>丁磊的好货推荐</div>
            </div>
          </li>
          <li>
            <div>
              <img src="http://yanxuan.nosdn.127.net/14bbdfb252b4ce346b8e9d019bb5b677.png" alt="">
              <div>丁磊的好货推荐</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
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
    .content_left
      position fixed
      top 88px
      left 0
      width 130px
      ul
        width 100%
        display flex
        flex-direction column
        li
          width 162px
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
      position fixed
      right 0
      top 88px
      font-size 28px
      width 527px
      padding 15px 30px 100px 30px
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
