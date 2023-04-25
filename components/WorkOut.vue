<template lang="">
    <div>
        <input type="number" v-model=num />
    </div>
</template>
<script>
export default {
    data() {
        return {
            num:null
        }
    },
    methods: {
        getData(){
            return this.num;
        }
    },
}
</script>
<style lang="">
    
</style>