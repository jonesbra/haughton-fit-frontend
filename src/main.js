import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import VueResource from 'vue-resource'
import VueFire from 'vuefire'

Vue.use(VueFire)
Vue.use(VueResource)
Vue.use(BootstrapVue)

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
