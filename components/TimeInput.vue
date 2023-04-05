<template lang="">
    <div>
        <input type="time" v-model=time>
    </div>
</template>
<script>
import { checkNullAndUnde } from '../assets/jsLib';
export default {
    props: ['otime'],
    data() {
        return {
            time: null
        }
    },
    mounted() {
        this.set();
    },
    methods: {
        set() {
            if (checkNullAndUnde(this.otime)) {
                this.time = this.otime;
            }
        },
        getData() {
            return this.time;
        }
    },
}
</script>
<style lang="">
    
</style>