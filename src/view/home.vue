<template>
    <div>
        首页
        <p>{{message}}</p>
        <p>Reversed message: "{{ reversedMessage() }}"</p>
    </div>
</template>
import Utils from "../../static/utils"
<script>
    export default {
        name: "home",
        data(){
            return {
                message:'hello!'
            }
        },
        mounted() {
            console.log(11111)
        },
        methods: {
            reversedMessage: function () {
                return this.message.split('').reverse().join('')
            }
        },
        created(){
            Utils.a()
        }
    }
</script>

<style lang="stylus" scoped>

</style>
