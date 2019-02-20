<template>
  <div class="contents">
    <div class="header">
      <h2>Automatic-creation-of-minutes</h2>
      <button @click="create">New</button>
      <button @click="logout">Logout</button>
    </div>
    <div id="Minute">
      議事録
      <div class="minute-list" v-for="(minute) in minutes" :key="minute.id">{{minute.contents}}
        <button @click="edit">Edit</button>
        <button @click="deleteMinute">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
import api from '../api-service'

export default {
  name: 'User',
  data () {
    return { minutes: null }
  },
  created: async function () {
    this.minutes = null
    const uId = localStorage.getItem('uId')
    const data = await api.getMinutes(uId)
    this.minutes = data
  },
  methods: {
    create: function () {
      this.$router.push(({ path: `/user/createminute` }))
    },
    edit: function () {
      this.$router.push(({ path: `/user/editminute` }))
    },
    deleteMinute: async function () {
      await api.deleteMinute(this.username, this.content)
    },
    logout: function () {
      this.$router.push('/')
    }
  }
}
</script>
