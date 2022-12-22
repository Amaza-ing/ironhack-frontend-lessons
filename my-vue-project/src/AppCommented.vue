<template>
  <!-- Una variable computada es una variable que depende de otra variable
       Las variables computadas son reactivas, es decir, al modificar la
       variable de la que depende se modificará su valor, al contrario que
       variables definidas en el data -->
  <div @click="posts[0].title += 'a'">{{ posts[0].title }}</div>
  <div>computed: {{ myComputedVariable }}</div>
  <div>variable: {{ textLength }}</div>


  <!-- hasta que no se llama al evento pokemon-selected la variable 
       selectedPokemon es un objeto vacío tal y como está definido en
       data(), así que no se mostrará nada, pero una vez se popula
       con los datos que se recogen tendremos acceso a sus propiedades -->
  <section v-if="selectedPokemon.name" class="selected-pokemon">
    <h2>Selected Pokemon</h2>
    <h3>Name: {{ selectedPokemon.name }}</h3>
    <img :src="selectedPokemon.img" alt="selected pokemon img">
  </section>


  <!-- mediante la directiva v-for se recorre todo el array pokemon y
       se inyecta el componente PokemonCard tantas veces como elementos
       haya, pasándole como prop un objeto con todos los datos necesarios.
       Usando @pokemon-selected le decimos que esté a la espera de capturar
       ese evento, y cuando se emite el evento pokemon-selected desde el
       componente hijo (PokemonCard) se capturará y llamará al método
       pokemonHandler -->
  <ul class="pokemon-list">
    <li v-for="(pokemon, index) in pokemons" :key="pokemon.name">
      <PokemonCard @pokemon-selected="pokemonHandler" :pokemon="pokemons[index]"></PokemonCard>
    </li>
  </ul>









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

export default {
  components: {
    TestComponent,
    BlogPost,
    FormComponent,
    PokemonCard
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

    // pokemonHandler es un método que se llama cuando se captura el evento pokemon-selected
    // como argumento (pokeData) recibe los datos que se hayan emitido desde el evento
    // para poder usar estos datos en el resto del componente (App.vue) tendremos que definir
    // una variable en el data() con el valor del argumento (pokeData)
    pokemonHandler(pokeData) {
      console.log("pokemon-selected event captured");
      console.log("pokeData: ", pokeData);
      this.selectedPokemon = pokeData;
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
