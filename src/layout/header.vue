<template>
    <div class="header">JvTodo
        <img src="@/assets/images/avatar.jpg" alt="" width="100" height="100">
    </div>
</template>

<script>
    export default {
        name: "header1",
        data(){
            return {

            }
        },
        created(){

        }
    }
</script>

<style lang="stylus" scoped>
    .header
        height 200px
        line-height 200px
        text-align center
        color red
        font-size 40px
        /*background url("../assets/images/bg.jpg") no-repeat center*/
        /*background-size cover*/
    img
        border-radius 50%
</style>
