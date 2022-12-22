<template>
  <section @click="selectPokemon" class="pokemon-card">
    <div class="pokemon-name">
      {{ pokemon.name }}
    </div>
    <div>
      <img class="pokemon-img" :src="pokemon.img" alt="pokemon picture">
    </div>
    <div>
      <span>HP: {{ pokemon.hp }} / </span>
      <span>Attack: {{ pokemon.attack }}</span>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    pokemon: {
      type: Object,
      // required: true,
      default: {
        name: "Patata",
        hp: "0",
        attack: "0",
        img: "https://pbs.twimg.com/profile_images/585913364720840704/Ta56Yrim_400x400.png"
      }
    }
  },
  methods: {
    selectPokemon() {
      console.log("pokemon selected: ", {...this.pokemon})
      this.$emit("pokemon-selected", {...this.pokemon})
    }
  }
}
</script>

<style>
  .pokemon-card {
    background-color: aliceblue;
    width: 150px;
    border: 2px solid blueviolet;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
  }

  .pokemon-name {
    font-weight: bold;
    font-size: 20px;
  }

  .pokemon-img {
    max-width: 100px;
  }

  .pokemon-card:hover {
    background-color: darkblue;
    color: white;
    cursor: pointer;
  }
</style>