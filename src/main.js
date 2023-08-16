import Vue from 'vue'
import App from './App.vue'
import router from './router';



import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import 'bootstrap/dist/css/bootstrap.css'
import "../src/assets/styles/bootstrap.css"
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router
}).$mount('#app')
