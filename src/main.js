import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

// VueFire
import VueFire from 'vuefire'

// BootstrapVue
import BootstrapVue from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

// VueMaterial
import 'vue-material/dist/vue-material.min.css'
import { MdButton, MdIcon } from 'vue-material/dist/components'

Vue.use(MdButton)
Vue.use(MdIcon)
Vue.use(VueFire)
Vue.use(VueResource)
Vue.use(BootstrapVue)

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
