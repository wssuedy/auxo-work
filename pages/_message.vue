
<template>
  <section class="container">
    <!-- <img src="~assets/img/logo.png" alt="Nuxt.js Logo" class="logo" /> -->
    <h1 class="title">
      公告
    </h1>
    <h2 class="info">
      标题：
      {{ message.title }} <input v-model="title" @change="change"/>
    </h2>
    <p>
      内容：
      {{ message.content }} <input v-model="content" @change="change"/>
    </p>
    <nuxt-link class="button" to="/createmessage">
      所有公告
    </nuxt-link>
  </section>
</template>


<script>
import domain from '~/plugins/domain'
import axios from '~/plugins/axios'

async function get(id){
  const {data} = await axios.get('/message/' + id);
  return data;
}

export default {

  data(){
     return {
       title:'',
       content:''
     }
  },
  methods:{
    async change(){
       // await axios.post(`/domain/User/${this.user.id}/changeName`,[this.name]);
       let message = domain.get('Message',this.message.id);
       await message('changeMessage')(this.title,this.content);
       this.message.title = this.title;
       this.message.content = this.content;
       this.title = "";
       this.cotent = "";
    }
  },
  async asyncData ({ params, error }) {
      // let user = await get(params.id);
      let message = await get(params.message);
      return {message};
  },
  head () {
    return {
      title: `Message: ${this.message.title}`,
      content: `Message: ${this.message.content}`,

    }
  }
}
</script>

<style scoped>
.title
{
  margin-top: 30px;
}
.info
{
  font-weight: 300;
  color: #9aabb1;
  margin: 0;
  margin-top: 10px;
}
.button
{
  margin-top: 30px;
}
</style>
