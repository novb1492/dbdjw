<template lang="">
    <div>
        fdfdf
    </div>
</template>
<script>
import { listOwnRequest } from '../../api/articleApi';
import { error403, getReToken } from '../../assets/jsLib';
export default {
    async asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
        await this.requestWithRetry();
    },
    methods: {
        async requestWithRetry(data) {
            try {
                const response = await listOwnRequest(data);
                return response;
            } catch (error) {
                const { status } = error.response;
                if (status === 401) {
                    if (this.retryCount < 1) {
                        this.retryCount = 1;
                        await getReToken(); // 엑세스 토큰 재발급
                        return this.requestWithRetry(data); // 재발급 후 다시 요청
                    }
                    error403(this.$router, this.$route);//재발급 횟수 초과
                } else if (status === 403) {//재발급실패
                    error403(this.$router, this.$route);
                } else {
                    this.insertErrorF(error.response);
                }

            }
        },
    },
}
</script>
<style lang="">
    
</style>