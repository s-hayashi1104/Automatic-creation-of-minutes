<template>
  <div class="contents">
    <div class="header">
      <h2>Automatic-creation-of-minutes</h2>
      <button @click="create">New</button>
      <button @click="logout">Logout</button>
    </div>
    <div id="minutes">
      議事録
      <div class="minute-list"
       v-for="(minute, index) in minutes"
        :key="index">
        {{index}}<br>
        {{minute.contents}}
        <button @click="edit(index, minute.contents)">Edit</button>
        <button @click="deleteMinute(index, minute.contents)">Delete</button>
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
    edit: function (index, contents) {
      this.$router.push(({ path: `/user/editminute` }))
    },
    deleteMinute: async function (index, contents) {
      const uId = localStorage.getItem('uId')
      await api.deleteMinute(uId, index, contents)
      const data = await api.getMinutes(uId)
      this.minutes = data
    },
    logout: function () {
      this.$router.push('/')
    }
  }
}
</script>
