<template>
  <div class="contents">
    <div class="header">
      <h2>Automatic-creation-of-minutes</h2>
      <button @click="logout">Logout</button>
    </div>
    <div id="Minute">
      <button @click="startListening">{{ recognitionText }}</button>
        Minute：<br>
        <textarea  rows="100" cols="100" v-model="minute"/><br>
        <button @click="save">Submit this minute</button>
    </div>
  </div>
</template>

<script>
import api from '../api-service'
const recognition = new webkitSpeechRecognition() // eslint-disable-line 
export default {
  name: 'CreateMinute',
  data: function () {
    return {
      minute: '',
      recognitionText: 'Start Listening',
      speechIsValid: true
    }
  },
  methods: {
    save: async function () {
      const uId = localStorage.getItem('uId')
      const content = await api.createMinute(uId, this.minute)
      if (content) {
        alert('success')
        this.$router.push('/user')
      } else {
        alert('Registration failed')
      }
    },
    logout: function () {
      this.$router.push('/')
    },
    startListening: function () {
      if (!this.speechIsValid) { return }
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
