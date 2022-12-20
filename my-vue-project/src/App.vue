<template>
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

export default {
  components: {
    TestComponent
  },
  data() {
    return {
      myStr: "hola Ir",
      myNum: 23,
      myHtml: "<em>This is html in a variable</em>",
      myClass: "big",
      myId: "my-id"
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
</style>
