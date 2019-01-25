<template>
  <div class="contents">
    <div class="header">
      <h2>Automatic-creation-of-minutes</h2>
      <button @click="logout">Logout</button>
    </div>
    <div id="Minute">
      <button @click="startListening">Start Listening</button>
      <form>
        Minute：<br>
        <textarea rows="1000" cols="100" v-model="minute"></textarea><br>
        <button @click="strage">Submit this minute</button>
      </form>
    </div>
  </div>
</template>

<script>
import api from '../api-service'

export default {
  name: 'CreateMinute',
  data: function () {
    return {
      minute: ''
    }
  },
  methods: {
    strage: async function () {
      const content = await api.createMinute(this.username, this.minute)
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
