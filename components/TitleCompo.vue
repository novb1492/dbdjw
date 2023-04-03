<template lang="">
    <div class="input-group mb-3">
        <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-default">Title</span>
        </div>
        <input type="text" class="form-control" v-model=title aria-label="Default" aria-describedby="inputGroup-sizing-default">
    </div>
            
</template>
<script>
import { checkNullAndUnde } from '../assets/jsLib'
export default {
    props: ['otitle'],
    data() {
        return {
            title: null
        }
    },
    mounted() {
        this.setTitle();
    },
    methods: {
        setTitle() {
            if (checkNullAndUnde(this.otitle)) {
                this.title = this.otitle;
            }
        },
        getData() {
            return this.title;
        }
    },

}
</script>
<style lang="">
    
</style>