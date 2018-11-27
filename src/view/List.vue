<template>
    <div>
        <router-link to="/list/red">red</router-link>
        <router-link to="/list/green">green</router-link>
        <transition name="fade">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "list",
        mounted:function() {
        }
    }
</script>

<style lang="stylus" scoped>

</style>
