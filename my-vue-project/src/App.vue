<template>
  <FormComponent></FormComponent>
  <BlogPost :title="myTrip">
    <ul>
      <li><p>{{ myNum }} Sitios que visité</p></li>
      <li><p>Comida que probé</p></li>
      <li><p>Fotos que saqué</p></li>
    </ul>
  </BlogPost>
  <BlogPost title="Recetas deliciosas">
    <template v-slot="endWords">
      <p>Disfruta tu comida! ;)</p>
    </template>
  </BlogPost>
  <BlogPost title="Mis películas favoritas"></BlogPost>
  <BlogPost v-if="showPost" title="Hola a todos"></BlogPost>
  <BlogPost v-else-if="showOtherPost" title="Adios a todos"></BlogPost>
  <BlogPost v-else title="post de reserva"></BlogPost>

  <h2 v-show="false">Me renderizo aunque no me muestre</h2>


  <ul class="post-list">
    <li v-for="(post, index) in posts" :key="post.id">
      <h2>post id: {{ post.id }} & index: {{ index }}</h2>
      <BlogPost :title="post.title"></BlogPost>
    </li>
  </ul>



  <h1>This is inside App.vue</h1>
  <p v-bind:class="myClass" :id="myId">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, doloribus!</p>
  <TestComponent></TestComponent>
  <p>This is my string: {{ myStr }} and this is my  number: {{ myNum }}</p>
  <p v-if="myNum">This paragraph will show if myNum !== 0</p>
  <p v-html="myHtml"></p>
  <h3 v-on:click="myNum++">click me to add 1 to my number</h3>
  <h3 @click="sayHello()">say hello</h3>
  <h3 @click="resetMyNum()">reset number</h3>
  <h3 @click="modifyMyClass()">modify myClass</h3>
</template>

<script>
import TestComponent from "./components/TestComponent.vue"
import BlogPost from "./components/BlogPost.vue"
import FormComponent from "./components/FormComponent.vue"

export default {
  components: {
    TestComponent,
    BlogPost,
    FormComponent
  },
  data() {
    return {
      myStr: "hola Ir",
      myNum: 23,
      myHtml: "<em>This is html in a variable</em>",
      myClass: "big",
      myId: "my-id",
      myTrip: "Mi viaje a Francia",
      showPost: false,
      showOtherPost: false,
      posts: [
        {title: "Mi viaje a Francia", id: 0},
        {title: "Recetas deliciosas", id: 1},
        {title: "Mis películas favoritas", id: 2},
        {title: "Hola a todos", id: 3}
      ]
    }
  },
  methods: {
    sayHello() {
      console.log("Hello!!!")
    },
    resetMyNum() {
      this.myNum = 0
    },
    modifyMyClass() {
      this.myClass = "small"
    }
  }
}
</script>

<style scoped>
h1 {
  background-color: blue;
  color: white;
}

p {
  background-color: green;
}

.big {
  font-size: 30px;
}

.small {
  font-size: 4px;
}

.post-list {
  list-style: none;
  padding-left: 0;
}
</style>
