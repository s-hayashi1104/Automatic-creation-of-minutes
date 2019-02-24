<template>
  <div>
    {{origin}}<br>
    <button @click="switchDisplay">{{label}}</button>
    <div v-show="display">
      <textarea rows="40" cols="100" v-model="minute"/><br>
      <button @click="save(origin)">Submit this minute</button>
    </div>
    <button @click="deleteMinute(origin)">Delete</button>
  </div>
</template>

<script>
import api from '../api-service'

export default {
  name: 'EditMinute',
  data: function () {
    return {
      display: false,
      minute: this.origin
    }
  },
  computed: {
    label: function () { return this.display ? 'close' : 'This minute editing' }
  },
  props: ['origin'],
  methods: {
    switchDisplay: function () {
      if (this.display) {
        this.display = false
      } else {
        this.display = true
      }
    },
    save: async function (contents) {
      const uId = localStorage.getItem('uId')
      await api.editMinute(uId, this.minute)
      await api.deleteMinute(uId, contents)
      this.$emit('redisplay')
    },
    deleteMinute: async function (contents) {
      const uId = localStorage.getItem('uId')
      await api.deleteMinute(uId, contents)
      this.$emit('redisplay')
    }
  }
}
</script>
