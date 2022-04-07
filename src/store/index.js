import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    beer: [],
    user: []
  },
  mutations: {
    SET_BEER_TO_STATE: (state,beer) => {
      state.beer = beer;
    },
    SET_USER_TO_STATE: (state,user) => {
      state.user = user;
    }
  },
  actions: {
    GET_BEER_FROM_API({commit}){
      return axios('https://random-data-api.com/api/beer/random_beer',{
        method: "GET"
      })
          .then((beer)=>{
            commit('SET_BEER_TO_STATE', beer);
            return beer;
          })
          .catch((error) => {
            console.log(error)
            return error;
          })
    },
    GET_USER_FROM_API({commit}){
      return axios('https://random-data-api.com/api/users/random_user',{
        method: "GET"
      })
          .then((user) =>{
            commit('SET_USER_TO_STATE', user);
            return user;
          })
          .catch((error) => {
            console.log(error)
            return error;
          })
    }
  },
  getters: {
    BEER(state) {
      return state.beer;
    },
    USER(state) {
      return state.user;
    }
  }
})
