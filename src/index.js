import Vue from "vue"
import App from "./app.vue"
import router from './router'
import Utils from "../static/utils"
import Vuex from 'vuex'
import createVuex from "./store"

Vue.use(Vuex)
const div = document.createElement("div");
document.body.appendChild(div)

Utils.a()

const store = createVuex(Vuex)
new Vue({
    el: 'div',
    store,
    router,
    render:(h)=>h(App)
})
