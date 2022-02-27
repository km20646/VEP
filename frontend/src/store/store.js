import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        message: 'Hello',
        logined: false,
        id: ""
    },
    mutations: {
        changeMessage(state, newMsg) {
            state.message = newMsg
        },
        authLoginId(state) {
            state.logined = !state.logined;
            alert(state.logined);
        }

    },
    actions: {

    },
    getters: {

    }
});