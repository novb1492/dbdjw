<template lang="">
    <div>
        fdfdf
    </div>
</template>
<script>

import { listOwnRequest } from '../../api/articleApi';
import { instance, setInterceptors } from '../../api/request';
import { error403, ffsfs, getReToken } from '../../assets/jsLib';
async function requestWithRetryFirst(){
    await listOwnRequest({page:1,pageSize:1,title:null,text:null});
}
export default {
    async asyncData({ isDev, route, store, env, params, query, req, res, redirect, error,$axios }) {
        return $axios.$get(`${process.env.API_URL}/api/article/list?page=${1}&pageSize=${1}&title=${1}&text=${1   }`,{withCredentials:true});
    
    },
    methods: {
        
    }
}
</script>
<style lang="">
    
</style>