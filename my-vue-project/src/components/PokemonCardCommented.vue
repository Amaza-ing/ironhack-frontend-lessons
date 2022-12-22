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

      // si queremos que este componente tenga que recibir obligatoriamente un prop, debemos poner:
      // required: true,

      // si no se recibe ningún prop, o el prop que se recibe es undefined se tomarán unos valores
      // por defecto si se pone lo siguiente:
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
      // tenemos que poner el spread operator (...) dentro de llaves { } para crear una copia
      // del objeto original y poder utilizarlo sin problemas
      console.log("pokemon selected: ", {...this.pokemon})

      // this.$emit nos permite emitir un evento personalizado, como primer parámetro tendrá 
      // el nombre que decidamos y como segundo (y 3º, 4º, etc) los datos que se emitirán
      // es recomendable, por limpieza de código, si hay varios datos, mandarlos en el
      // segundo parámetro como un objeto
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