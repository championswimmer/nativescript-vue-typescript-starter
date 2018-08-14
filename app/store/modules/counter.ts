import {MutationTree, ActionTree} from 'vuex'
const state = {
  count: 0,
};

const mutations = <MutationTree<typeof state>>{
  decrement (state) {
    state.count--;
  },
  increment (state) {
    state.count++;
  },
};

const actions = <ActionTree<typeof state, any>>{
  increment: ({commit}) => commit('increment'),
  decrement: ({commit}) => commit('decrement'),
};

export default {
  state,
  mutations,
  actions,
};
