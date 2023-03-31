import authMu from "./auth/authMu";


export const state = () => ({
    flag: false
});
export const mutations = authMu;
// export const actions = testActions;
export const getters = {
    getFlag: (state) => {
        return state.flag;
    }
}