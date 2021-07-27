import { createApp } from 'vue'
import Vue from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.vue'

createApp(App).mount('#app')

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
