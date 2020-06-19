<template>
  <div class="app">
      <ul class="phone-hide">
        <li class="nav-item link-item route-active">
          <router-link to="/home">
            首页
          </router-link>
        </li>
        <li class="nav-item link-item route-active">
          <router-link to="/list/red">
            列表页
          </router-link>
        </li>
        <li class="nav-item link-item route-active">
          <router-link to="/detail/1?a=1">
          详情页
          </router-link>
        </li>
        <li class="nav-item link-item route-active">
          <router-link to="/topic">
          主题
          </router-link>
        </li>
      </ul>
    <router-view></router-view>
    <!--<div class="cover"></div>-->
  </div>
</template>

<script>

export default {
  components: {
    
  },
  name: "app",
  data() {
    return {
      msg: "Hello world!"
    };
  },
  created() {
    console.log("第一条语句诞生啦！");
    console.log(this.$router);
  }
};
</script>

<style lang="stylus">
* {
  padding: 0;
  margin: 0;
}
a
  text-decoration none 
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter, .fade-leave-to { /* .fade-leave-active below version 2.1.8 */
  opacity: 0;
}
body {
  width: 100vw;
  height: 100vh;
}
.app
  width: 800px;
  margin: 0 auto;

.cover {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: rgba(100, 100, 100, 0.5);
}

h1 {
  color: #f00;
}

h2 {
  box-shadow: 4px 4px yellowgreen;
}
ul{
    display flex
    justify-content space-between
    width 100%
    padding 0 100px
    box-sizing border-box
    border-bottom 1px solid #aaa
}
.nav-item {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.nav-item a
  display block
  padding: 0 40px;
  height: 100px
  line-height: 100px
  font-size: 18px;
.nav-item a:hover
  color #007fff
</style>
