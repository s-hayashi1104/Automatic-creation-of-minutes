<template>
  <div class="contents">
    <div class="header">
      <h2>Automatic-creation-of-minutes</h2>
      <button @click="create">New</button>
      <button @click="logout">Logout</button>
    </div>
    <div id="Minute">
      議事録
      <button @click="edit">Edit</button>
      <button @click="deleteMinute">Delete</button>
    </div>
  </div>
</template>

<script>
import api from '../api-service'

export default {
  name: 'UserPage',
  methods: {
    create: function () {
      this.$router.push('/createminute')
    },
    edit: function () {
      this.$router.push('/editminute')
    },
    delete: async function () {
      await api.deleteMinute(this.username, this.content)
    },
    logout: function () {
      this.$router.push('/')
    }
  }
}
</script>
