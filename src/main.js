import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import firebase from 'firebase'

// Required for side-effects
require("firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyDLqmvlFVXPFYsosNIXHfy3YJYFIZYGFsU",
  authDomain: "fir-vuechat-a8a04.firebaseapp.com",
  databaseURL: "https://fir-vuechat-a8a04.firebaseio.com",
  projectId: "fir-vuechat-a8a04",
  storageBucket: "fir-vuechat-a8a04.appspot.com",
  messagingSenderId: "442539619635",
  appId: "1:442539619635:web:43b3e4656a6de6396cba46"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

window.db = db;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
