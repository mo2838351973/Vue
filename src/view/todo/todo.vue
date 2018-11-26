<template>
    <div class="todo">
        <input type="text" placeholder="接下做啥？" @keyup.enter="addItem($event)">
        <hr/>
        <item v-for="item in filteredList" :key="item.id" :item="item" @del="deleteTodo"></item>
        <tabs :filter="filter" :list="list" @toggle="toggle" @clearAllCompleted="clearAllCompleted"></tabs>
    </div>
</template>

<script>
    import item from "./item.vue"
    import tabs from "./tabs.vue"

    let id = 0;
    export default {
        name: "todo",
        components: {
            tabs,
            item
        },
        data() {
            return {
                filter: "all",
                list: []
            }
        },
        computed: {
            filteredList() {
                if (this.filter == "all") {
                    return this.list;
                }
                const completed = this.filter == "completed"
                return this.list.filter(item => item.completed == completed)

            }
        },
        created() {

        },
        methods: {
            addItem(e) {
                let item = e.target.value.trim()
                if (!item) return;
                this.list.unshift({
                    completed: false,
                    id: id++,
                    content: item,
                })
                e.target.value = '';
            },
            toggle(tab) {
                this.filter = tab;
            },
            clearAllCompleted() {
                this.list = this.list.filter(item => item.completed == false)
            },
            deleteTodo(id) {
                this.list.splice(this.list.findIndex(item => item.id == id), 1)
            },
        }
    }
</script>

<style lang="stylus" scoped>
    .todo
        width 600px
        margin 0 auto
        border 2px solid #829829
        box-shadow 3px 3px #989878
        background rgba(3, 3, 3, 0.5)

    input[type=text]
        width 100%
        height 100px
        line-height 200px
        font-size 30px
        outline none
        border none
        appearance none
        background rgba(3, 3, 3, 0)
        padding-left 10px
        color #fff
</style>
