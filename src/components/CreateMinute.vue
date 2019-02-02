<template>
  <div class="contents">
    <div class="header">
      <h2>Automatic-creation-of-minutes</h2>
      <button @click="logout">Logout</button>
    </div>
    <div id="Minute">
      <button @click="startSpeech">{{ recognitionText }}</button>
        Minute：<br>
        <textarea v-model="minute"/><br>
        <button @click="save">Submit this minute</button>
    </div>
  </div>
</template>

<script>
import api from '../api-service'

export default {
  name: 'CreateMinute',
  data: function () {
    return {
      minute: '',
      recognition: new webkitSpeechRecognition(), // eslint-disable-line 
      recognitionText: 'Start Speech',
      speechIsValid: true
    }
  },
  methods: {
    save: async function () {
      const content = await api.createMinute(this.username, this.minute)
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
    startSpeech: function () {
      if (!this.speechIsValid) { return }
      this.recognition.start()
    },
    stop: function () {
      this.speechIsValid = false
      this.startSpeech()
    }
  },
  created: function () {
    this.recognition.onstart = () => {
      this.recognitionText = 'Listenning'
    }
    this.recognition.onend = () => {
      this.recognitionText = 'Start Speech'
    }
    this.recognition.onresult = (event) => {
      this.recognition.continuous = true // マイク使用許可を一回だけにする
      this.recognition.interimResults = true // 中間結果を返す
      // 再帰後もインスタンスが生きててonresultイベントが発生するので認識一時停止時もすぐ関数を抜ける処理を入れる
      if (!this.speechIsValid) { return }
      // 音声認識の結果は（interimResults == true なら）リアルタイムに認識候補結果を返してくる
      const results = event.results
      for (let i = event.resultIndex; i < results.length; i++) {
        if (results[i].isFinal) {
          this.minute = results[i][0].transcript
          this.startSpeech()
        } else {
          this.minute = results[i][0].transcript
        }
      }
    }
  }
}
</script>
