<template lang="">
    <div>
        fdfdf
    </div>
</template>
<script>

import { listOwnRequest } from '../../api/articleApi';
import { instance, setInterceptors } from '../../api/request';
import { error403, ffsfs, getReToken, getReTokenAsyncDate } from '../../assets/jsLib';
export default {
    async asyncData({ isDev, route, store, env, params, query, req, res, redirect, error, $axios }) {
        try {
            let reponse = await $axios.$get(`${process.env.API_URL}/api/article/list?page=${1}&pageSize=${1}&title=${1}&text=${1}`, { withCredentials: true });
        } catch (error) {
            const { status } = error.response;
            if (status === 401) {
                await getReTokenAsyncDate($axios); // 엑세스 토큰 재발급

                // if (this.retryCount < 1) {
                //     this.retryCount = 1;
                //     await getReToken(); // 엑세스 토큰 재발급
                //     return this.requestWithRetry(data); // 재발급 후 다시 요청
                // }
                // error403(this.$router, this.$route);//재발급 횟수 초과
            } else if (status === 403) {//재발급실패
                //   error403(this.$router, this.$route);
                // } else {
                //   this.insertErrorF(error.response);
            }

        }
        return;
    },
    methods: {

    }
}
</script>
<style lang="">
    
</style>