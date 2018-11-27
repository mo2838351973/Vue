<template>
    <div>
        <p>详情页id={{$route.params.id}}</p>
        <div class="item-box">
            <p>{{ count }}</p>
            <p>
                <button @click="increment">&nbsp;+&nbsp;</button>
                <button @click="decrement"> &nbsp;-&nbsp;</button>
                <button @click="incrementAsync">&nbsp;+ incrementAsync - 触发Action&nbsp;</button>
            </p>
            <hr>
            <p>已经做完的事情：<span v-for="todo in doneTodos">{{todo.text}}</span></p>
            <p>数量count：<span>{{textPlus}}</span></p>
        </div>
    </div>
</template>

<script>
    import {mapState, mapGetters} from 'vuex'

    export default {
        name: "detail",
        props: [
            'id'//vue-router 使用props可以将组件与router解耦
        ],
        mounted() {
            console.log(this.id)
            console.log(this.$store)
        },
        computed: {
            ...mapState({
                count: state => state.count,

                // 传字符串参数 'count' 等同于 `state => state.count`
                // count: 'count',

                // 为了能够使用 `this` 获取局部状态，必须使用常规函数
                countPlusLocalState(state) {
                    return state.count + this.localCount
                }
            }),
            ...mapGetters({
                'doneTodos':'doneTodos',
                'textPlus':'a/textPlus'
            })
        },
        methods: {
            increment() {
                this.$store.commit('increment')
            },
            decrement() {
                this.$store.commit('decrement')
            },
            incrementAsync() {
                // this.$store.dispatch('incrementAsync')
                // 以载荷形式分发
                this.$store.dispatch('incrementAsync', {
                    amount: 10
                })

                // 以对象形式分发
                // store.dispatch({
                //     type: 'incrementAsync',
                //     amount: 10
                // })
            },
        }
    }
</script>

<style lang="stylus" scoped>
    .item-box
        background rgba(255, 255, 255, .5)
        padding 6px
        border 1px solid #9acd32
</style>
