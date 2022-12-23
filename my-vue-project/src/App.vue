<template>
  <header><h1>header</h1></header>

  <router-view></router-view>
  
  <footer><p>footer</p></footer>







  <div v-if="false">
    <div @click="myStr += '!'">{{ myStr }}</div>
    <div @click="posts[0].title += 'a'">{{ posts[0].title }}</div>
    <div>computed: {{ myComputedVariable }}</div>
    <div>variable: {{ textLength }}</div>  
  </div>





  <div v-if="false">
    <section v-if="selectedPokemon.name" class="selected-pokemon">
      <h2>Selected Pokemon</h2>
      <h3>Name: {{ selectedPokemon.name }}</h3>
      <img :src="selectedPokemon.img" alt="selected pokemon img">
    </section>
  
    <ul class="pokemon-list">
      <li v-for="(pokemon, index) in pokemons" :key="pokemon.name">
        <PokemonCard @pokemon-selected="pokemonHandler" :pokemon="pokemons[index]"></PokemonCard>
      </li>
    </ul>  
  </div>









  <div v-if="false">
    <FormComponent></FormComponent>
    <BlogPost :title="myTrip">
      <ul>
        <li><p>{{ myNum }} Sitios que visité</p></li>
        <li><p>Comida que probé</p></li>
        <li><p>Fotos que saqué</p></li>
      </ul>
    </BlogPost>
    <BlogPost title="Recetas deliciosas">
      <template v-slot:firstWords>
        <p>ñam ñam</p>
      </template>
      <template v-slot:endWords>
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
  </div>
</template>

<script>
import TestComponent from "./components/TestComponent.vue"
import BlogPost from "./components/BlogPost.vue"
import FormComponent from "./components/FormComponent.vue"
import PokemonCard from "./components/PokemonCard.vue"
import Pokedex from "./views/Pokedex.vue"

export default {
  components: {
    TestComponent,
    BlogPost,
    FormComponent,
    PokemonCard,
    Pokedex
  },
  data() {
    return {
      myStr: "hola Ironhack",
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
      ],
      pokemons: [],
      selectedPokemon: {},
      textLength: []
    }
  },
  computed: {
    myComputedVariable() {
      return this.posts[0].title.length
    }
  },
  async created() {
    this.textLength = this.posts[0].title.length
    for (let i = 1; i < 10; i++) {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
      const data = await response.json()
      const pokemon = {
        name: data.forms[0].name,
        hp: data.stats[0].base_stat,
        attack: data.stats[1].base_stat,
        img: data.sprites.front_default
      }
      this.pokemons.push(pokemon)
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
    },
    pokemonHandler(pokeData) {
      console.log("pokemon-selected event captured");
      console.log("pokeData: ", pokeData);
      this.selectedPokemon = pokeData;
    }
  },
  watch: {
    // se está creando un watch para vigilar cambios en la variable myStr, cada vez que se produzca
    // un cambio se invocará el método definido a continuación, esto se puede hacer así sólo cuando
    // la variable sea de tipo primitivo
    myStr(newValue, oldValue) {
      console.log("myStr oldValue: ", oldValue)
      console.log("myStr newValue: ", newValue)
    },
    posts() {
      console.log("we cannot watch arrays or objects this way")
    },
    // para vigilar las variables no primitivas (arrays y objetos) necesitamos envolver el watch en
    // un objeto al que añadimos la propiedad deep: true
    // en las variables no primitivas tan sólo tendremos acceso al newValue si lo colocamos como primer parámetro
    posts: {
      handler() {
        console.log("something has changed in posts")
      },
      deep: true
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

.pokemon-list {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 3px
}

.selected-pokemon {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
