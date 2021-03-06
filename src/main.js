// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/font/font.css'

import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-light.css';
import 'github-markdown-css';
import 'font-awesome/css/font-awesome.min.css';

import kongchengji from 'kongchengji';
Vue.use(kongchengji)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
