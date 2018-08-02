// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import * as firebase from 'firebase'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'font-awesome/css/font-awesome.css'
library.add(faCoffee)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

Vue.use(BootstrapVue)
/* eslint-disable no-new */

var app
var config = {
  apiKey: 'AIzaSyDXft6uzPn_UQ-IQuUsoc4pf60eNlQweqY',
  authDomain: 'dictionary-f4c74.firebaseapp.com',
  databaseURL: 'https://dictionary-f4c74.firebaseio.com',
  projectId: 'dictionary-f4c74',
  storageBucket: 'dictionary-f4c74.appspot.com',
  messagingSenderId: '333488842173'
}

firebase.initializeApp(config)

firebase.auth().onAuthStateChanged(function (user) {
  if (!app) {
    app = new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    })
  }
})
