import Vue from 'vue'
import App from './App.vue'
import './ui/index.js'
import css from './assets/style/index.css'
console.log(css)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
