export default {
    changePaginList(state, data) {
        state.infoList = data.content;
        state.totalPage = data.totalPages;
        state.last = data.last;
        state.first = data.first;
        state.empty = data.empty;
        state.nowPage = data.number + 1;
        if(!state.doneFlag){
            state.doneFlag=true;
        }
    }
}