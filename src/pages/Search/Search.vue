<template>
  <div id="search_container">
    <div class="searchHeader">
      <label class="headerSearch">
        <i class="iconfont icon-sousuo"></i>
        <div class="clear" v-if="searchInput">
          <i  @click="searchInput = ''">X</i>
        </div>
        <input type="text" placeholder="专业衣物除菌 除螨率100%" @input="searchinput" v-model="searchInput"/>
      </label>
      <span class="cancel" @click="$router.back()">取消</span>
    </div>
    <div class="showList" v-if="searchInput">
      <ul >
      <li v-for="(item,index) in searchResult" :key="index">{{item}}</li>
      </ul>
    </div>
    <div class="bottom_title" v-if="!searchInput">热门搜索</div>
    <nav class="list" v-if="!searchInput">
      <a class="item" v-for="(item,index) in initSearch.defaultKeywords" :key="index">{{item.keyword}}</a>
    </nav>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapState } from 'vuex';
  export default {
    name:"Search",
    data(){
      return{
        searchInput:'',
        timeID:-1
      }
    },
    computed:{
      ...mapState({
        initSearch:state=>state.Search.initSearch,
        searchResult:state=>state.Search.searchResult
      })
    },
    async mounted(){
      await this.$store.dispatch('getInitSearch')
      
    },
    methods:{
      searchinput(){
        clearTimeout(this.timeID)
        this.timeID=setTimeout(() => {
          this.$store.dispatch('getsearchResult',this.searchInput)
        },300);
      },
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  #search_container
    width 100%
    position fixed
    .searchHeader
      display flex
      align-items center
      width 100%
      height 88px
      padding 0 30px
      box-sizing border-box
      .headerSearch
        position relative
        height 56px
        line-height 56px
        border-radius 4px
        border none
        text-align center
        i
          display block
          position absolute
          width 60px
          font-size 30px
          color #666666
        .clear
          position absolute
          right 50px
          background-color #eee
          border-radius 50%
          i
            font-size 24px
        >input
          display block
          width 550px
          height 100%
          padding-left 60px
          outline none
          border 0 none
          margin 0
          background-color #f4f4f4
          font-size 28px
          border-radius 4px
      .cancel
        display block
        margin-left 24px
        font-size 28px
        color #333
    .showList
      position fixed
      top 88px
      left 0
      z-index 99
      background #fff
      width 100%
      ul
        padding 0 30px
        li
          width 100%
          height 60px
          font-size 28px
          line-height 60px
          border-bottom 1px solid #eee
    .bottom_title
      display flex
      align-items center
      color #999999
      margin-left 30px
      height 90px
      font-size 28px
      background-color #fff
    .list
      display flex
      flex-wrap wrap
      padding 0 0 0 30px
      .item
        padding 0 15px
        margin-right 32px
        margin-bottom 32px
        line-height 46px
        font-size 24px
        color #333333
        border 1px solid #999999
        border-radius 4px
</style>
