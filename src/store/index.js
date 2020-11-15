import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


const store = new Vuex.Store({
    state: {
        token: window.sessionStorage.getItem('token')
    },
    mutations: {
        SET_TOKEN(state, token) {
            window.sessionStorage.setItem('token', token);
            state.token = token;
        }
    },
    actions: {
        login({commit}, token) {
            commit('SET_TOKEN', token)
        },
        logout({commit}) {
            return new Promise((resolve) => {
                commit('SET_TOKEN', '')
                setTimeout(() => {
                    resolve();
                }, 500)

            })
        }
    }
})

export default store
