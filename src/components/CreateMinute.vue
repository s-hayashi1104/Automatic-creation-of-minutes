<template>
    <div id="Minute">
      <button @click="startListening">{{ recognitionText }}</button><br>
      <button @click="stop">stop Listening</button>
        Minute：<br>
        <textarea  rows="40" cols="100" v-model="minute"/><br>
        <button @click="save">Submit this minute</button>
    </div>
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
      speechIsValid: false
    }
  },
  methods: {
    save: async function () {
      const uId = localStorage.getItem('uId')
      const content = await api.createMinute(uId, this.minute)
      if (content) {
        this.$router.push('/user')
      } else {
        alert('Registration failed')
      }
    },
    logout: function () {
      this.$router.push('/')
    },
    startListening: function () {
      if (this.speechIsValid) { return }
      recognition.start()
    },
    stop: function () {
      this.speechIsValid = false
      this.startListening()
    }
  },
  created: function () {
    recognition.onstart = () => {
      this.recognitionText = 'Listening'
    }
    recognition.onend = () => {
      this.recognitionText = 'Start Listening'
    }
    recognition.onresult = (event) => {
      recognition.continuous = true
      recognition.interimResults = true
      if (!this.speechIsValid) { return }
      const results = event.results
      for (let i = event.resultIndex; i < results.length; i++) {
        if (results[i].isFinal) {
          this.minute = results[i][0].transcript
          this.startListening()
        } else {
          this.minute = results[i][0].transcript
        }
      }
    }
  }
}
</script>
