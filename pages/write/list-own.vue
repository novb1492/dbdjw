<template lang="">
    <div>
        <PagingBtnVue/>

        {{infoList}}
    </div>
</template>
<script>
import { mapGetters,mapMutations } from 'vuex';
import { listOwnRequest } from '../../api/articleApi';
import { instance, setInterceptors } from '../../api/request';
import { checkNullAndUnde, error403, ffsfs, getReToken, getReTokenAsyncDate } from '../../assets/jsLib';
import ListCompoVue from '../../components/list/ListCompo.vue';
import PagingBtnVue from '../../components/list/PagingBtn.vue';
export default {
    components:{PagingBtnVue},
    data() {
        return {
            retryCount: 0,
        }
    },
    mounted() {
        this.requestWithRetry({page:this.getPage(this.$route.query.page),pageSize:this.getPage(this.$route.query.pageSize),title:this.$route.query.title,text:this.$route.query.text});
    },
    watch: {
        "$route"() {
            this.requestWithRetry({page:this.getPage(this.$route.query.page),pageSize:this.getPage(this.$route.query.pageSize),title:this.$route.query.title,text:this.$route.query.text});
        }
    },
    computed: {
        ...mapGetters("paging", {
            infoList: "getInfoList",
            last: "getLast",
            first: "getFirst",
            nowPage: "getNowPage",
            totalPage: "getTotalPage"
        })
    },
    methods: {
        ...mapMutations("paging", {
            changePaginList: "changePaginList",
        }),
        async requestWithRetry(data) {
            try {
                const response = await listOwnRequest(data);
                this.changePaginList(response.data);
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
                    // error403();
                }
            }
        },
        getPage(num){
            if(checkNullAndUnde(num)){
                return 1;
            }
            return num;
        }
    }
}
</script>
<style lang="">
    
</style>