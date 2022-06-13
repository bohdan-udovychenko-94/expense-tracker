import { createStore } from 'vuex'
import VuexPersister from 'vuex-persister'
import jwt_decode from 'jwt-decode'

class State {
    googleToken?: string | null
}

const vuexPersister = new VuexPersister<State>()

export default createStore({
    plugins: [vuexPersister.persist],
    state() {
        return {
            googleToken: undefined
        }
    },
    getters: {
        userProfile({ googleToken }) {
            if (!googleToken) {
                return null
            }

            return jwt_decode(googleToken)
        }
    },
    mutations: {
        setGoogleToken(state, googleToken) {
            state.googleToken = googleToken
        }
    },
    actions: {
        setGoogleToken({ commit }, googleToken) {
            commit('setGoogleToken', googleToken)
        }
    }
})