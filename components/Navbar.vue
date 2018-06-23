<template lang="html">

  <nav class="navbar">
    <nuxt-link :to="{path:'/index.vue'}"><img src="~assets/img/Map.png" alt="" class="logo"></nuxt-link>
    <nuxt-link :to="{path:'/index.vue'}">主页</nuxt-link>
    <!-- <nuxt-link :to="{path:'/createmessage'}">公告</nuxt-link> -->
    <nuxt-link :to="{path:'/createmessage'}">通知公告</nuxt-link>
    <nuxt-link :to="{path:'/sub/a'}">作品展</nuxt-link>
    <nuxt-link :to="{path:'/qingjia'}">请假</nuxt-link>
    <nuxt-link :to="{path:'/sub/b'}">经验分享</nuxt-link>
    <nuxt-link :to="{path:'/sub/about'}">我的</nuxt-link>
  </nav>

</template>

<script>

export default {
}
</script>

<style lang="css">

.navbar{
  min-height: 5px;
  padding: 10px;
  position: relative;

  /* display: inline-block; */
}
.navbar >a,nuxt-link{
  padding:10px;
  margin:5px;
  /* border:1px solid #333; */

}

.logo{
  width:50px;
  height:50px;
  margin-right: 10px;

}
</style>
