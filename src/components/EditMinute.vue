<template>
 <v-container fluid grid-list-md>
   {{origin}}<br>
   <v-btn @click="switchDisplay">{{label}}</v-btn>
    <v-textarea
      name="input-7-1"
      box
      label="Edit minute"
      auto-grow
      v-model="minute"
      v-show="display"
    ></v-textarea>
    <v-btn @click="save(origin)">Submit this minute</v-btn>
    <v-btn @click="deleteMinute(origin)">Delete</v-btn>
  </v-container>
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
