<template lang="html">
  <div class="">
      {{ $store.state.haha.txt}}
      <h4>{{ $store.state.haha.group}}</h4>

      <input type="text" v-model="txt">
      <button type="button" name="button" @click="change">change txt value</button>
  </div>



</template>

<script>
export default {
  data(){
    return{
      txt:""
    }
  },

  methods:{
    change(){
      let value = this.txt;
      console.log(value);
      this.$store.commit("haha/change",value);
      this.txt = "";
    }
  }
}
</script>

<style lang="css">
</style>
