<template lang="">
<nav ref='nav_r'>
        <ul class="nav_ul">
            <li class="nav_h_l_t"><HomeLink/></li>
            <ul class="nav_ul_ul">
                <li class="nav_h_t">Days</li>
                <li class="nav_h_t">Login</li>
                <li class="nav_h_t">Info</li>
            </ul>
        </ul>
    </nav>
</template>
<script>
import HomeLink from './HomeLink.vue';
export default {
    components: { HomeLink },
    mounted() {
        this.isNight();
    },
    methods: {
        isNight() {
            let today = new Date();
            let hours = today.getHours();
            if (hours >= 19) {
                this.$refs.nav_r.classList.add('black_n');
            }
        }
    },
}
</script>
<style lang="">
    
</style>