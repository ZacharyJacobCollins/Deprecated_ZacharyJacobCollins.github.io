import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    activeType: null,
    itemsPerPage: 20,
    items: {/* [id: number]: Item */},
    users: {/* [id: string]: User */},
    lists: {
      top: [/* number */],
      new: [],
      show: [],
      ask: [],
      job: []
    }
  },
  actions: {
    //Actions here
  },
  mutations: {
    //Mutations here
  },
  getters: {
    //getters here
  }
})

export default store
