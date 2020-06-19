<template>
    <div class="container">
        <div class="inner">
            首页
            <p>{{message}}</p>
            <p>Reversed message: "{{ reversedMessage() }}"</p>

            <!-- <Header1/>

            <router-view class="view two" name="a"></router-view>
            <router-view class="view three" name="b"></router-view> -->
        </div>
    </div>
</template>
<script>
    export default {
        name: "home",
        components: {
            
        },
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
            // Utils.a()
        }
    }
</script>

<style lang="stylus" scoped>
.container{
    width: 100%;
    height: 100vh;
    background: url('../assets/images/bg_2.jpg') no-repeat center;
    background-size: cover;
    color #fff
}
.inner {
    width: 100%;
    height: 100vh;
    background rgba(0,0,0,.7)
}
</style>