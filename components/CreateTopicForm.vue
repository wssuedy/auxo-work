<template lang="html">
   <div class = "form">
     <input type="text" v-model="title" value="">
     <br>
     <textarea type="text" v-model="content"></textarea>
     <button @click="create()">创建主题贴</button>
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
.form{
  background-color: #978;


}

.form>input,.form>textarea{
  display:block;
}
</style>
