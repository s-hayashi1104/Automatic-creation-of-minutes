<template>
  <div id="minutes">
    議事録
    <button @click="create">New</button>
    <button @click="logout">Logout</button>
    <EditMinute class="minute-list"
      v-for="(minute, index) in minutes"
      :key="index"
      :editMinute="minute.contents"
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
      editMinute: null
    }
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
    logout: function () {
      this.$router.push('/')
    }
  }
}
</script>
