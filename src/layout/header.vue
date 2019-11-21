<template>
  <div class="header">
    
    <div class="user-info-block">
      <img src="@/assets/images/avatar.jpg" alt class="avatar" width="100" height="100">
    </div>
    <div class="user-info-introduce">
        <div class="name">Miki</div>
        <div class="motto">人生若如初相见，何苦西风悲画面</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "header1",
  data() {
    return {};
  },
  created() {}
};
</script>

<style lang="stylus" scoped>
.header 
  color red
  font-size 40px
  padding 12px 
  display flex
  justify-content flex-start
  align-items center
  margin-top 10px 

.user-info-block  
  width 200px 
  flex 0 
  margin-right 20px
  
.user-info-block .avatar{
    border-radius 50% 
}
.user-info-block .avatar:hover {
  transform: rotate(666turn);
  transition-delay: 1s;
  transition-property: all;
  transition-duration: 59s;
  transition-timing-function: cubic-bezier(0.34, 0, 0.84, 1);
}
.user-info-introduce .name
    font-size 2.167rem;
    font-weight 600;
    line-height 1.2;
    color #fff;

.motto{
    display: flex;
    margin-top: 1rem;
    font-size: 1.25rem;
    line-height: 1.5;
    color: #fff;
}
</style>
