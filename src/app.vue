<template>
    <div class="app">

        <router-link to="/home"><button>首页</button></router-link>
        <router-link to="/list/red"><button>列表页</button></router-link>
        <router-link to="/detail/1"><button>详情页</button></router-link>


        <router-view class="view one"></router-view>
        <router-view class="view two" name="a"></router-view>
        <router-view class="view three" name="b"></router-view>

        <Header1/>
        <!--<img src="@/assets/images/avatar.jpg" alt="" width="100" height="100">-->
        <!--<img src="./assets/images/avatar.jpg" alt="" width="100" height="100">-->
        <Todo></Todo>
        <Footer1></Footer1>


        <!--<div class="cover"></div>-->
    </div>
</template>

<script>
    import Header1 from "./layout/header.vue"
    import Footer1 from "./layout/footer.vue"
    import Todo from "./view/todo/todo.vue"

    export default {
        components: {
            Footer1: Footer1,
            Header1: Header1,
            Todo,
        },
        name: "app",
        data() {
            return {
                msg: 'Hello world!'
            }
        },
        created() {
            console.log("第一条语句诞生啦！")
            console.log(this.$router)
        }
    }
</script>

<style lang="stylus">

    *
        padding 0
        margin 0

    .fade-enter-active, .fade-leave-active {
        transition: opacity .3s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }

    .app
        width 100vw
        height 100vh
        background url("./assets/images/bg.jpg") no-repeat center
        background-size cover
        padding 100px 0

    .cover
        position absolute
        left 0
        top 0
        right 0
        bottom 0
        width 100%
        height 100%
        background rgba(100, 100, 100, 0.5)

    h1
        color #f00

    h2
        box-shadow 4px 4px yellowgreen
</style>
