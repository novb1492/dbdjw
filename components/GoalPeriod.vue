<template lang="">
    <div>
        <h3>같이 달릴 기간</h3>
        <div>
            <div class="p_c_row">
                <p>START</p>
                <input type="date" v-model=sd />
            </div>
            <div class="p_c_row">
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
    components: { TimeInput},
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
            return { sd: this.sd, ed: this.ed };
        }
    },
}
</script>
<style lang="">
    
</style>