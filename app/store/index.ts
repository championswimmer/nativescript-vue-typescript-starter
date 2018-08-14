import Vue from 'nativescript-vue';
import Vuex from 'vuex';

import counter from './modules/counter';

Vue.use(Vuex);

declare var process: {env: {[s: string]: string}};
const debug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
  modules: {
    counter,
  },
  strict: debug,
});

Vue.prototype.$store = store;

export default store;