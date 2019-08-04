import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    propertyChange: {
      shape: "",
      number: "",
      scale: "",
      speed:"0.025"
    }
  },
  mutations: {
     updateProps:(state, value)=>{
       state.propertyChange = value;
     }
  },
  actions: {
    updateProperties: ({ commit }, props) => {
      commit('updateProps' ,props);
    }
  },
  getters: {
    getToAllProperties: state => {
      return state.propertyChange;
    }
  }
});
