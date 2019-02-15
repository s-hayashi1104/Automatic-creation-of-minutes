<template>
  <div class="signin">
    <h2>Sign in</h2>
    <input type="text" placeholder="Username" v-model="username">
    <input type="password" placeholder="Password" v-model="password">
    <button @click="signIn">Signin</button>
    <p>You don't have an account?
      <router-link to="/signup">create account now!!</router-link>
    </p>
  </div>
</template>

<script>
import api from '../api-service'
import firebase from 'firebase'

export default {
  name: 'Signin',
  data: function () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    signIn: async function () {
      const idToken = await api.signIn(this.username, this.password)
      localStorage.setItem('idToken', idToken)

      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          console.log('user---------------------')
          console.log(user)
          if (idToken) {
            console.log('idToken------------------')
            console.log(firebase.auth().currentUser)
            this.$router.push(({ path: `/user` }))
          } else {
            alert('username or password　is wrong')
          }
        } else {
          alert(`ログインできていない${console.log(firebase.auth().currentUser)}`)
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.signin {
  margin-top: 20px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center
}
input {
  margin: 10px 0;
  padding: 10px;
}
</style>
