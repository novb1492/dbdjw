<template lang="">
    <div>
        <p>같이 달릴 기간</p>
        <div>
            <div>
                <p>START</p>
                <input type="date" v-model=sd />
            </div>
            <div>
                <p>FINSH</p>
                <input type="date" v-model=sd />
            </div>
        </div>
    </div>
</template>
<script>
import { checkNullAndUnde, getTodayDate } from '../assets/jsLib';
export default {
    props: ['osd', 'oed'],

    data() {
        return {
            sd: null,
            ed: null
        }
    },
    mounted() {
        this.setFirst();
    },
    methods: {
        setFirst() {
            let today = getTodayDate();
            if (checkNullAndUnde(this.osd)) {
                this.sd = today;
            } else {
                this.sd = this.osd;
            }
            if (checkNullAndUnde(this.oed)) {
                this.ed = today;
            } else {
                this.ed = this.oed;
            }
        },
        getPeriod() {
            return { sd: this.sd, ed: this.ed };
        }
    },
}
</script>
<style lang="">
    
</style>