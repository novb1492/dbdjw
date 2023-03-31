<template lang="">
    <div>
        <h3>짧은 제목</h3>
        <div>
            <input type="text" v-model=title>
        </div>
    </div>
</template>
<script>
import { checkNullAndUnde } from '../assets/jsLib'
export default {
    props: ['otitle'],
    data() {
        return {
            title:null
        }
    },
    mounted() {
       this.setTitle();  
    },
    methods: {
        setTitle(){
            if(checkNullAndUnde(this.otitle)){
                this.title=this.otitle;
            }
        },
        getData(){
            return this.title;
        }
    },

}
</script>
<style lang="">
    
</style>