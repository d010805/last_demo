<template>
  <div class="gen_content">
    <div class="forLazy">
      <ul v-for="(remonmend,index) in content" :key="index">
        <li v-for="(item,index) in remonmend.topics" :key="index">
          <BigImg v-if="item.style !==2" :item="item">
          </BigImg>
          <SmallImg v-if="item.style ==2" :item="item">
          </SmallImg>
        </li>
      </ul>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import BigImg from './BigImg/BigImg'
import SmallImg from './SmallImg/SmallImg'
import BScroll from '@better-scroll/core'
import { mapState } from 'vuex'
  export default {
    name:"Found",
    computed:{
      ...mapState({
        content:state=>state.categoryList.content
      })
    },
    async mounted(){
      await this.$store.dispatch('getRemmendContent')
        const ConentScroll = new BScroll('.gen_content',{
          click: true,
          probeType: 2,
          scrollY:true
        })
    },
    components:{
      BigImg,
      SmallImg
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .gen_content
    width 100%
    max-height 1070px
    overflow hidden
    .forLazy
      height 100%


            
      

 
</style>
