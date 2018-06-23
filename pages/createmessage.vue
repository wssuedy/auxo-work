
<template>
  <section class="container">
    <!-- <nav class="navbar">
      <nuxt-link :to="{path:'/test'}">go test page</nuxt-link>
      <nuxt-link :to="{path:'/abc'}">go abc page</nuxt-link>
      <nuxt-link :to="{path:'/sub/a'}">go a page</nuxt-link>
      <nuxt-link :to="{path:'/sub/b'}">go b page</nuxt-link>
    </nav> -->
    <hr>
    <!-- <navbar/> -->
    <create-message-form @create="createMessage"/>

    <h1 class="title">
      公告
    </h1>
    <ul class="users">
      <li v-for="(message, index) in $store.state.message.messages" :key="index" class="user">
        <div class="message">
          {{message.id}}

        </div>
        <nuxt-link :to="{path:'/createmessage/'+message.id}">
          <h4>{{message.title}}</h4>
        </nuxt-link>
        <div class="">
          {{message.content}}
        </div>
      </li>
    </ul>
  </section>
</template>


<script>
import axios from '~/plugins/axios'
import domain from '~/plugins/domain'
import CreateMessageForm from '~/components/CreateMessageForm.vue';
// import CreateTopicForm from '~/components/CreateTopicForm.vue';
import Navbar from '~/components/Navbar.vue';

export default {
  components:{
    CreateMessageForm,
    // CreateTopicForm,
    Navbar
  },

  //初始化值
  async fetch ({ store, params ,isServer}) {
    console.log("fetch..",process.server);
    let users = (await axios.get('/users')).data;
    let topics= (await axios.get('/topics')).data;
    console.log(users,topics);
    store.commit('init', users);
    store.commit('topic/init', topics);
  },
  methods:{


    async createMessage({title,content}){
      console.log(title,content);
      const {data} = await axios.post("/domain/Message/create",{title,content});

      // const {data} = await domain.create("Topic",{title,content});
      this.$store.commit('message/create', {id:data.id,title,content});

    }
  }
}
</script>

<style scoped>
.title
{
  margin: 30px 0;
}
.users
{
  list-style: none;
  margin: 0;
  padding: 0;
}
.user
{
  margin: 10px 0;
}

.message{
  width:90%;
  border:1px solid #ddd;
}

</style>
