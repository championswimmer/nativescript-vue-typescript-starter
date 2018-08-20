import Vue from 'nativescript-vue';
import router from './router';
import store from './store';
import './styles.scss';

// See NativeScript-Vue output logs in debug
Vue.config.silent = !DEBUG_MODE

new Vue({

  router,
  template: `<Frame><router-view/></Frame>`,

  store,

}).$start();
