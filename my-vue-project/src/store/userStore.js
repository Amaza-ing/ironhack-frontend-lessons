// npm install pinia
import { defineStore } from "pinia";

export default defineStore('userStore', {
  state: () => ({
    userName: "Alberto",
    userOnline: true
  }),
  actions: {
    modifyStatus(status) {
      this.userOnline = status
    },
    setUsername(name) {
      this.userName = name
    }
  }
})