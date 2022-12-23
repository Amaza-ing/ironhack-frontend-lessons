<template>
  <section v-if="selectedPokemon" class="selected-pokemon">
    <h2>Selected Pokemon</h2>
    <h3>Name: {{ selectedPokemon.name }}</h3>
    <img :src="selectedPokemon.img" alt="selected pokemon img" />
  </section>

  <ul class="pokemon-list">
    <li v-for="(pokemon, index) in pokemons" :key="pokemon.name">
      <router-link :to="`/pokedex/${index + 1}`">
        <PokemonCard
          @pokemon-selected="pokemonHandler"
          :pokemon="pokemons[index]"
        ></PokemonCard>
      </router-link>
    </li>
  </ul>
</template>

<script>
import PokemonCard from "@/components/PokemonCard.vue";

export default {
  components: {
    PokemonCard,
  },
  data() {
    return {
      pokemons: [],
      selectedPokemon: null,
    };
  },
  async created() {
    for (let i = 1; i < 10; i++) {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
      const data = await response.json();
      const pokemon = {
        name: data.forms[0].name,
        hp: data.stats[0].base_stat,
        attack: data.stats[1].base_stat,
        img: data.sprites.front_default,
      };
      this.pokemons.push(pokemon);
      let routeId = this.$route.params.id
      if (routeId) this.selectedPokemon = this.pokemons[routeId - 1]
    }
  },
  methods: {
    pokemonHandler(pokeData) {
      console.log("pokemon-selected event captured");
      console.log("pokeData: ", pokeData);
      // this.selectedPokemon = pokeData;
    },
  },
  watch: {
    '$route.params.id' () {
      this.selectedPokemon = this.pokemons[this.$route.params.id - 1]
    }
  }
};
</script>

<style>
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
