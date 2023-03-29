<template lang="">
    <div>
        <p>{{text}}</p>
    </div>
</template>
<script>
import { checkNullAndUnde, consoleLog, initKakaoLogin, loginWithKakao } from '../assets/jsLib'
export default {
    data() {
        return {
            text:"로그인 페이지를 불러오는중입니다"
        }
    },
    mounted() {
        if (!checkNullAndUnde(this.$route.query.code)) {
            this.text="로그인을 처리중입니다";
            this.loginPro();
        } else {
            initKakaoLogin();
            loginWithKakao();
        }
    },
    methods: {
        async loginPro() {
            let code = this.$route.query.code;
            try {
                let nurl = this.$route.query.nurl;
                localStorage.setItem('login', true);
                if (checkNullAndUnde(nurl)) {
                    nurl="/";
                }
                window.location.href=nurl;
            } catch (error) {
                consoleLog(error);
            }
        }
    },
}
</script>
<style lang="">
    
</style>