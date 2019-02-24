<template>
  <div id="minutes">
    <button @click="logout">Logout</button>
    <h3>Create new minute!</h3>
    <button @click="create">New</button>
    <h3>your minutes list</h3>
    <EditMinute class="minute-list"
      v-for="(minute, index) in minutes"
      :key="index"
      :origin="minute.contents"
      v-on:redisplay="redisplay"
      ></EditMinute>
  </div>
</template>

<script>
import EditMinute from './EditMinute.vue'
import api from '../api-service'

export default {
  name: 'User',
  components: {
    EditMinute
  },
  data () {
    return {
      minutes: null,
      origin: null
    }
  },
  created: async function () {
    this.minutes = null
    const uId = localStorage.getItem('uId')
    const data = await api.getMinutes(uId)
    this.minutes = data
  },
  methods: {
    redisplay: async function () {
      alert('OK')
      this.minutes = null
      const uId = localStorage.getItem('uId')
      const data = await api.getMinutes(uId)
      this.minutes = data
    },
    create: function () {
      this.$router.push(({ path: `/user/createminute` }))
    },
    logout: function () {
      this.$router.push('/')
    }
  }
}
</script>
