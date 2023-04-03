<template lang="">
    <div>
        <p class="center">{{text}}</p>
    </div>
</template>
<script>
import { kLogin } from '../api/userApi';
import { checkNullAndUnde, consoleLog, initKakaoLogin, is200, loginWithKakao } from '../assets/jsLib'
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
                // let response=await kLogin(code);
                // is200(response);
                // if(response.status!==200){
                //     throw new Error;
                // }
                let nurl = localStorage.getItem('nurl');
                localStorage.setItem('login', true);
                if (checkNullAndUnde(nurl)) {
                    nurl="/";
                }else{
                    localStorage.removeItem('nurl');
                }
                location.href=nurl;
            } catch (error) {
                consoleLog(error);
            }
        },
        errorF(response){
            consoleLog(response);
        }
    },
}
</script>
<style lang="">
    
</style>