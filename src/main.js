// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyDI9F4uZ3SzNGOO1HtLT-BNm_1VCLUUKNU',
  authDomain: 'automatic-creation-of-minutes.firebaseapp.com',
  databaseURL: 'https://automatic-creation-of-minutes.firebaseio.com',
  projectId: 'automatic-creation-of-minutes',
  storageBucket: 'automatic-creation-of-minutes.appspot.com',
  messagingSenderId: '695781313773'
}
firebase.initializeApp(config)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
