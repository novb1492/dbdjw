<template lang="">
    <div>
        <button type="button" class="btn" :class="btnclazz" @click=click()>{{text}}</button>
    </div>
</template>
<script>
export default {
    props: ['text','btnclazz'],
    methods: {
        click(){
            this.$emit("click_action", null);
        }
    },
    
}
</script>
<style lang="">
    
</style>