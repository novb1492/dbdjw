<template lang="">
    <div>
        <h3>하루 요약</h3>
        <div>
            <div class="p_c_row">
                <p>기상시간</p>
                <TimeInput ref="wt"/>
            </div>
            <div class="p_c_row">
                <p>오늘 운동시간(분)</p>
                <WorkOut ref="et"/>
            </div>
            <div class="p_c_row">
                <p>취침시간</p>
                <TimeInput ref="st"/>
            </div>
        </div>
    </div>
</template>
<script>
import { checkNullAndUnde, getTodayDate } from '../assets/jsLib';
import TimeInput from './TimeInput.vue';
import WorkOut from './WorkOut.vue';
export default {
    props: ['osd', 'oed'],
    components: { TimeInput,WorkOut },
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
        getData() {
            return { wt: this.$refs.wt.getData(), st: this.$refs.st.getData(),et:this.$refs.et.getData() };
        }
    },
}
</script>
<style lang="">
    
</style>