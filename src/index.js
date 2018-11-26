import Vue from "vue"
import App from "./app.vue"
import router from './router'
import Utils from "../static/utils"

const div = document.createElement("div");
document.body.appendChild(div)

Utils.a()

new Vue({
    el: 'div',
    router,
    render:(h)=>h(App)
})
