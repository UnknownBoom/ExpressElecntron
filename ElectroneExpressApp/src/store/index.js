import Vue from 'vue'
import Vuex from 'vuex'
import user from './user/index'
import realtor from './realtor/index'
import levi from './levi/index'
// import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)


export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    state: {
    },
    mutations:{
    },
    actions:{
    },
    getters:{
    },

    // plugins: [createPersistedState()],

    modules: {
      user,
      realtor,
      levi
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEBUGGING
  })
  return Store
}
