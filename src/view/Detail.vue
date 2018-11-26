<template>
   <div>
       详情页<br/>id={{$route.params.id}}
   </div>
</template>

<script>
    export default {
        name: "detail",
        props:[
            'id'//vue-router 使用props可以将组件与router解耦
        ],
        mounted(){
            console.log(this.id)
        }
    }
</script>

<style scoped>

</style>
