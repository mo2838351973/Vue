<template>
    <div class="item">
        <input type="checkbox" class="toggle" v-model="item.completed">
        <p>{{item.content}}</p>
        <button class="destory" @click="deleteTodo"></button>
    </div>
</template>

<script>
    export default {
        name: "item",
        props:{
            item:{
                type:Object,
                required:true
            },
        },
        data(){
            return {

            }
        },
        created(){

        },
        methods: {
            deleteTodo () {
                this.$emit('del', this.item.id);
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .item
        width 100%
        height 50px
        padding 10px 45px
        position relative
        box-sizing border-box
    .toggle
        text-align center
        width 40px
        height 40px
        position absolute
        left 0
        top 5px
        bottom 0
        border none
        appearance none
        outline none
    .toggle:after
        content url("../../assets/images/round.svg")
    .toggle:checked:after
        content url("../../assets/images/done.svg")

    .item p{
        height 40px
        line-height 40px
        font-size 20px
        color white
    }
    .item:hover .destory:after{
        content: '×';
    }
    .destory {
        position: absolute;
        top: 0;
        right: 10px;
        bottom: 0;
        width: 40px;
        height: 40px;
        margin: auto 0;
        font-size: 30px;
        color: #cc9a9a;
        transition: color .2s ease-out;
        background-color: transparent;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        border-width: 0;
        cursor: pointer;
        outline: none;
    }
</style>
