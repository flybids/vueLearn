<template>
    <itemcontainer father-component="item"></itemcontainer>
</template>
<script>
import itemcontainer from '@/components/itemcontainer.vue'
export default {
    name:'item',
    components:{itemcontainer},
    created(){
        this.$store.commit('REMEMBER_TIME');
    }
}
</script>

