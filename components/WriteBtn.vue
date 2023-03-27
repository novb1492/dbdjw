<template lang="">
    <div>
        <button @click=click()>{{text}}</button>
    </div>
</template>
<script>
export default {
    props: ['text'],
    methods: {
        click(){
            this.$emit("click_action", null);
        }
    },
    
}
</script>
<style lang="">
    
</style>