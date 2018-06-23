
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
    <create-user-form @create="create"/>
    <create-topic-form @create="createTopic"/>
    <!-- <img src="~assets/img/Map.png" alt="" class="logo" /> -->

    <h1 class="title">
      主题贴
    </h1>
    <ul class="users">
      <li v-for="(topic, index) in $store.state.topic.topics" :key="index" class="user">
        <h4>  {{ topic.title }}</h4>
        <div class="">
          {{topic.content}}
        </div>


      </li>
    </ul>

    <hr>


    <h1 class="title">
      USERS
    </h1>
    <ul class="users">
      <li v-for="(user, index) in $store.state.users" :key="index" class="user">
        <!-- <nuxt-link :to="{ name: 'id', params: { id: user.id }}">
          {{ user.name }}
        </nuxt-link> -->

        {{user.id}}


        <nuxt-link :to="{path:user.id}">
          {{user.name}}
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>


<script>
import axios from '~/plugins/axios'
import domain from '~/plugins/domain'
import CreateUserForm from '~/components/CreateUserForm.vue';
import CreateTopicForm from '~/components/CreateTopicForm.vue';
import Navbar from '~/components/Navbar.vue';

export default {
  components:{
    CreateUserForm,
    CreateTopicForm,
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
    async create(name){
      const {data} = await axios.post("/domain/User/create",{name});
      this.$store.commit('create', {id:data.id,name});
    },
    async createTopic({title,content}){
      console.log(title,content);
      const {data} = await axios.post("/domain/Topic/create",{title,content});

      // const {data} = await domain.create("Topic",{title,content});
      this.$store.commit('topic/create', {title,content});

    }
  },
  head () {
    return {
      title: 'Users'
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

</style>
