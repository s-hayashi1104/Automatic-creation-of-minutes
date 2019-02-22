<template>
  <div>
    {{editMinute}}<br>
    <textarea rows="100" cols="100" v-model="minute"/><br>
    <button @click="save">Submit this minute</button>
    <button @click="deleteMinute(editMinute)">Delete</button>
  </div>
</template>

<script>
import api from '../api-service'

export default {
  name: 'EditMinute',
  data: function () {
    return {
      minute: this.editMinute
    }
  },
  props: ['editMinute'],
  methods: {
    created: async function () {
      this.minutes = null
      const uId = localStorage.getItem('uId')
      const data = await api.getMinutes(uId)
      this.minutes = data
    },
    save: async function () {
      const uId = localStorage.getItem('uId')
      const content = await api.editMinute(uId, this.minute)
      if (content) {
        alert('success')
      } else {
        alert('Registration failed')
      }
    },
    deleteMinute: async function (contents) {
      const uId = localStorage.getItem('uId')
      await api.deleteMinute(uId, contents)
      const data = await api.getMinutes(uId)
      this.minutes = data
    }
  }
}
</script>
