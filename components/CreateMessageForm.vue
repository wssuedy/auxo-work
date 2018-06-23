<template lang="html">
   <div>
     <input type="text" v-model="title" value="" placeholder="请输入公告标题">
     <br>
     <textarea type="text" v-model="content" placeholder="请输入公告内容"></textarea>
     <button @click="create()">发布</button>
   </div>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  data(){
    return {
      title:'',
      content:''
    }
  },
  methods:{
    async create(){
      // const result = await axios.post("/domain/User/create",{name:this.name});

      this.$emit("create",{title:this.title,content:this.content});
      this.title = "";
      this.content = "";


    }
  }
}
</script>

<style lang="css" scoped>


</style>
