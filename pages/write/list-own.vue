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
        let response = null;
        console.log("fdfdf");
        try {
            response = await $axios.$get(`${process.env.API_URL}/api/article/list?page=${1}&pageSize=${1}&title=${1}&text=${1}`, { withCredentials: true });
        } catch (error) {
            console.log(error);
            // return redirect('/login');
        }


    },
    middleware:'renewToken',
    methods: {

    }
}
</script>
<style lang="">
    
</style>