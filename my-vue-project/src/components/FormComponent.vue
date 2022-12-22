<template>
  <form>
    <label for="name">Name: </label>
    <input v-model="name" type="text" name="name" id="name">
    <br>

    <label for="password">Password: </label>
    <input v-model="password" type="password" name="password" id="password">
    <br>

    <label for="comments">Comments: </label>
    <textarea v-model="comments" name="comments" id="comments" cols="30" rows="5"></textarea>
    <br>

    <p>¿Qué lenguages de programación conoces?</p>
    <label for="javascript">javascript</label>
    <input v-model="languages" type="checkbox" name="javascript" id="javascript" value="js">
    <br>
    <label for="java">java</label>
    <input v-model="languages" type="checkbox" name="java" id="java" value="jv">
    <br>

    <p>¿Quieres recibir spam?</p>
    <label for="yes">yes</label>
    <input v-model="spam" type="radio" name="spam" id="yes" value="yes">
    <label for="no">no</label>
    <input v-model="spam" type="radio" name="spam" id="no" value="no">
    <br>

    <select v-model="selected" name="options" id="options">
      <option disabled>Please select one</option>
      <option value="A">A</option>
      <option value="B">B</option>
      <option value="C">C</option>
    </select>

    <button @click.prevent="" type="submit">Submit</button>

  </form>

  <p>Your name is: {{ name }}</p>
  <p>Your password is: {{ password }}</p>
  <p>Your comments: {{ comments }}</p>
  <p>javascript: {{ javascript }}</p>
  <p>java: {{ java }}</p>
  <p>languages: {{ languages }}</p>
  <p>spam: {{ spam }}</p>
  <p>selected: {{ selected }}</p>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      password: "",
      comments: "",
      javascript: false,
      java: false,
      languages: [],
      spam: "yes",
      selected: "B"
    }
  }
}
</script>

<style>
</style>