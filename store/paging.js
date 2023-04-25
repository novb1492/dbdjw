import pagingMu from './paging/pagingMu'
import paginAction from './paging/paginAction';
export const mutations = pagingMu;
export const actions=paginAction;
export const state = () => ({
    doneFlag: false,
    infoList: [],
    totalPage: 0,
    last: false,
    first: false,
    empty: false,
    nowPage: 0

});
export const getters = {
    getInfoList: (state) => {
        return state.infoList;
    },
    getTotalPage: (state) => {
        return state.totalPage;
    },
    getLast: (state) => {
        return state.last;
    },
    getFirst: (state) => {
        return state.first;
    },
    getEmpty: (state) => {
        return state.empty;
    },
    getNowPage: (state) => {
        return state.nowPage;
    },
    getDoneFlag: (state) => {
        return state.doneFlag;
    }
}
