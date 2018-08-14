import Vue from 'nativescript-vue';

import router from './router';

import store from './store';

import './styles.scss';

// Uncomment the following to see NativeScript-Vue output logs
//Vue.config.silent = false;

new Vue({

  router,
  template: `<Frame><router-view/></Frame>`,

  store,

}).$start();
