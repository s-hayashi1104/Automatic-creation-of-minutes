<template>
 <v-container fluid grid-list-md>
   <v-btn @click="startListening">{{ recognitionText }}</v-btn>
   <v-btn @click="stop">stop Listening</v-btn>
    <v-textarea
      name="input-7-1"
      box
      label="Create new minute"
      auto-grow
      v-model="minute"
    ></v-textarea>
    <v-btn @click="save">Submit this minute</v-btn>
  </v-container>
</template>

<script>
import api from '../api-service'
const recognition = new webkitSpeechRecognition() // eslint-disable-line 
export default {
  name: 'CreateMinute',
  data: function () {
    return {
      minute: this.minute,
      recognitionText: 'Start Listening',
      speechIsValid: true
    }
  },
  methods: {
    save: async function () {
      const uId = localStorage.getItem('uId')
      await api.createMinute(uId, this.minute)
      this.$emit('redisplay')
    },
    logout: function () {
      this.$router.push('/')
    },
    startListening: function () {
      if (!this.speechIsValid) {
        recognition.stop()
      } else {
        recognition.start()
      }
    },
    stop: function () {
      this.speechIsValid = false
    }
  },
  created: function () {
    recognition.onstart = () => {
      this.recognitionText = 'Listening'
    }
    recognition.onend = () => {
      if (this.speechIsValid) {
        recognition.start()
      }
      this.speechIsValid = true
      this.recognitionText = 'Start Listening'
    }
    recognition.onresult = (event) => {
      recognition.stop()
      if (event.results.length > 0) {
        this.minute += event.results[0][0].transcript
      }
    }
  }
}
</script>
