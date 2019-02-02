<template>
  <div class="contents">
    <div class="header">
      <h2>Automatic-creation-of-minutes</h2>
      <button @click="logout">Logout</button>
    </div>
    <div id="Minute">
      <form>
        Minute：<br>
        <textarea rows="1000" cols="100" v-model="minute"></textarea><br>
        <button @click="save">Submit this minute</button>
      </form>
    </div>
  </div>
</template>

<script>
import api from '../api-service'

export default {
  name: 'EditMinute',
  data: function () {
    return {
      minute: ''
    }
  },
  methods: {
    save: async function () {
      const content = await api.editMinute(this.username, this.minute)
      if (content) {
        alert('success')
        this.$router.push('/userpage')
      } else {
        alert('Registration failed')
      }
    },
    logout: function () {
      this.$router.push('/')
    }
  }
}
</script>
