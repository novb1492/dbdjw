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
    data() {
        return {
            retryCount: 0
        }
    },
    async mounted() {
        this.requestWithRetry({page:this.$route.query.page,pageSize:this.$route.query.pageSize,title:this.$route.query.title,text:this.$route.query.text});
    },
    methods: {
        async requestWithRetry(data) {
            try {
                const response = await listOwnRequest(data);
                console.log(response);
                // this.insertDoneF(response);
            } catch (error) {
                const { status } = error.response;
                if (status === 401) {
                    if (this.retryCount < 1) {
                        this.retryCount = 1;
                        if (await getReToken()) {// 엑세스 토큰 재발급
                            return this.requestWithRetry(data); // 재발급 후 다시 요청
                        }
                    }
                    error403();//재발급 횟수 초과
                } else if (status === 403) {//재발급실패
                    error403();
                } else {
                    error403();
                }
            }
        },
    }
}
</script>
<style lang="">
    
</style>