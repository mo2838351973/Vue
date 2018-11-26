<template>
    <div class="tabs">
        <span>{{unFinishedTodoLength}} items left</span>
       <span class="tabs-center">
            <span v-for="tab in tabs" @click="toggleFilter(tab)" :class="[tab==filter?'active':'']">{{tab}}</span>
       </span>
        <span @click="clearAllCompleted">Clear Completed</span>
    </div>
</template>

<script>
    export default {
        name: "tabs",
        data(){
            return {
                tabs:["all","active","completed"]
            }
        },
        computed: {
            unFinishedTodoLength () {
                return this.list.filter(item => !item.completed).length;
            }
        },
        props:{
            filter:{
                type:String,
                required:true
            },
            list:{
                type:Array,
                required:true
            }
        },
        created(){

        },
        methods:{
            clearAllCompleted(){
                this.$emit('clearAllCompleted')
            },
            toggleFilter(tab){
            //    选中当前的tab
                this.$emit('toggle',tab)
            },
        }
    }
</script>

<style lang="stylus" scoped>
    .tabs
        width 100%
        height 50px
        padding 10px 45px
        box-sizing border-box
        border-top 1px solid #fff
        display flex
        justify-content space-between
        align-items center
        color white
    span
        padding 3px
        box-sizing border-box
        cursor pointer
    span.active
        border 1px solid green
        border-radius 3px
</style>
