import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const Red = {template: '<div style="color:red">red</div>'}
const Green = {template: '<div style="color:green">green</div>'}
const White = {template: '<div>空的子路由 -- White</div>'}

import Home from "@/view/Home"
import List from "@/view/List"
import Detail from "@/view/Detail"

const router = new VueRouter({
    mode: "history",
    base: "/app/",
    routes: [
        {path: '/', redirect: '/home'},
        {
            path: '/home',
            components: {
                default:()=>import("@/view/Home"),
                a: Red,
                b: Green
            },
            meta: {requiresAuth: true, title: '首页1', describtion: '这是一个首页'}
        },
        {
            path: '/list',
            component:()=>import("@/view/List"),
            children: [
                {
                    // 当 /user/profile 匹配成功，
                    // UserProfile 会被渲染在 User 的 <router-view> 中
                    path: 'red',
                    component: Red
                },
                {
                    // 当 /user/posts 匹配成功
                    // UserPosts 会被渲染在 User 的 <router-view> 中
                    path: 'green',
                    component: Green
                },
                {path: '', component: White},
            ],
            meta: {requiresAuth: true, title: '列表页', describtion: '这是一个列表'}
        },
        {
            path: '/detail/:id',
            props:(route)=>({id:route.query.a}),//vue-router 使用props可以将组件与router解耦
            component: ()=>import("@/view/Detail"),
            meta: {requiresAuth: true, title: '详情', describtion: '这是一个详情页'}
        },,
        {
            path: '/topic',
            component: ()=>import("@/view/Topic"),
            meta: {requiresAuth: true, title: '主题', describtion: '这是一个技术分享主题列表'}
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {x: 0, y: 0}
        }
    },
    fallback: false,//当浏览器不支持 history.pushState 控制路由是否应该回退到 hash 模式。默认值为 true。(一个 hash 模式的 URL 并不支持服务端渲染)
})

router.beforeEach((to, from, next) => {
    //if (to.matched.some(record => record.meta.requiresAuth)) {}) // check if logged in
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()

})

export default router;
