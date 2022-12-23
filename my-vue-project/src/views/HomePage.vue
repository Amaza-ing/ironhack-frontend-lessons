<template>
  <header>
    <h1>Welcome to homepage</h1>
    <h2>Username: {{ userName }} / Online: {{ userOnline }}</h2>
    <button @click="handleStatus(!userOnline)">connect/disconnect</button>
    <button @click="logIn('Martina')">Log In</button>
  </header>
  <main>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, excepturi?</p>
    <router-link to="/pokedex">Go to pokedex</router-link>
  </main>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import userStore from '../store/userStore';

export default {
  computed: {
    ...mapState(userStore, ['userName', 'userOnline'])
  },
  methods: {
    ...mapActions(userStore, ['modifyStatus', 'setUsername']),
    handleStatus(status) {
      this.modifyStatus(status)
    },
    logIn(name) {
      this.setUsername(name)
    }
  }
}
</script>

<style>
</style>