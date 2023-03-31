export const state = () => ({
    flag: false
});

// export const mutations = testMutations;
// export const actions = testActions;
export const getters = {
    getFlag: (state) => {
        return state.flag;
    }
}