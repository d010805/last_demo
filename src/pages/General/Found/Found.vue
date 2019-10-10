<template>
  <div class="gen_content">
    <BigImg></BigImg>
    <SmallImg></SmallImg>
  </div>
</template>
<script type="text/ecmascript-6">
import BigImg from './BigImg/BigImg'
import SmallImg from './SmallImg/SmallImg'
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
    },
    components:{
      BigImg,
      SmallImg
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .gen_content
    padding-top 164px

            
      

 
</style>
