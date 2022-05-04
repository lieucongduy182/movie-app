import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isUserLoggedIn: true,
        isOpen: false,
    },
    mutations: {
        SET_USER_LOGGED_IN(state, payload) {
            state.isUserLoggedIn = payload;
        },
        SET_OPEN_DROP_DOWN(state, payload) {
            state.isOpen = payload;
        },
    },
    actions: {
        setUserLoggedIn({ commit }, loggedIn) {
            commit('SET_USER_LOGGED_IN', loggedIn);
        },
        setOpenDropDown({ commit }, isOpen) {
            commit('SET_OPEN_DROP_DOWN', isOpen);
        },
    },
    getters: {
        isUserLoggedIn(state) {
            return state.isUserLoggedIn;
        },
        isOpen(state) {
            return state.isOpen;
        },
    },
});
