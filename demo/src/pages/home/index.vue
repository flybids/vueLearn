<template>
   <div class="itemcontainer">
       <itemcontainer father-component="home"></itemcontainer>
   </div> 
</template>

<script>
import itemcontainer from '@/components/itemcontainer'
export default {
    name:'home',
    components:{
        itemcontainer
    },
    created(){
        console.log('home/index.vue')
    }
}
</script>

<style lang="less" scoped>
    .itemcontainer{}
</style>


