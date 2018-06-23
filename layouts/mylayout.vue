<template lang="html">



  <div class="bg">
    <navbar/>

    <hr>
    <nuxt/>
    <hr>
  </div>


</template>

<script>
import Navbar from '~/components/Navbar0.vue';

export default {
  components: {
    Navbar
  }
}
</script>

<style lang="css" scoped>
@import "https://cdn.bootcss.com/bootstrap/4.0.0/css/bootstrap.min.css";
.bg{
  background-color: #f4f4f4;
}

</style>
