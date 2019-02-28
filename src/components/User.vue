<template>
 <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-toolbar color="indigo" dark id="list-box">
          <v-toolbar-title>Your minutes list</v-toolbar-title>
          <v-spacer></v-spacer>
            <v-btn
              color="orange darken-2"
              small dark @click="create"
            >
              <v-icon>edit</v-icon>{{label}}
            </v-btn>
            <v-btn color="orange darken-2" small dark @click="logout">
              <v-icon dark left>arrow_back</v-icon>logout
            </v-btn>
        </v-toolbar>
        <v-layout>
          <CreateMinute
            v-show="display"
            v-on:redisplay="redisplay"
          ></CreateMinute>
        </v-layout>
        <v-list>
          <EditMinute class="minute-list"
            v-for="(minute, index) in minutes"
            :key="index"
            :origin="minute.contents"
            v-on:redisplay="redisplay"
          ></EditMinute>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<style scoped>
#list-box{
  margin-top: 60px;
}
.minute-list {
  margin-top: 30px;
}

</style>

<script>
import CreateMinute from './CreateMinute.vue'
import EditMinute from './EditMinute.vue'
import api from '../api-service'

export default {
  name: 'User',
  components: {
    CreateMinute,
    EditMinute
  },
  data () {
    return {
      display: false,
      minutes: null,
      origin: null
    }
  },
  computed: {
    label: function () { return this.display ? 'close' : 'Create New!!' }
  },
  created: async function () {
    this.minutes = null
    const uId = localStorage.getItem('uId')
    const data = await api.getMinutes(uId)
    this.minutes = data
  },
  methods: {
    redisplay: async function () {
      this.minutes = null
      const uId = localStorage.getItem('uId')
      const data = await api.getMinutes(uId)
      this.minutes = data
    },
    create: function () {
      if (this.display) {
        this.display = false
      } else {
        this.display = true
      }
    },
    logout: function () {
      this.$router.push('/')
    }
  }
}
</script>
