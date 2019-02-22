<template>
  <div class="signup">
    <h2>Sign up</h2>
    <p v-if="errors.length">
      <b>Please correct the following error(s):</b>
      <ul>
        <li
         v-for="(error, index) in errors"
         :key="index">{{ error }}
         </li>
      </ul>
  </p>
    <input type="email" placeholder="Email" v-model="email">
    <input type="password" placeholder="Password" v-model="password">
    <button @click="register">Register</button>
    <p>Do you have an account?
      <router-link to="/">sign in now!!</router-link>
    </p>
  </div>
</template>

<script>
import api from '../api-service'

export default {
  name: 'Signup',
  data () {
    return {
      errors: [],
      email: '',
      password: ''
    }
  },
  methods: {
    register: async function () {
      if (!this.checkForm()) {
        return
      }
      const user = await api.signUp(this.email, this.password)
      if (user) {
        alert('Create account: ', user.name)
        this.$router.push('/')
      } else {
        alert('Registration failed')
      }
    },
    checkForm: function (e) {
      this.errors = []
      if (!this.email) {
        this.errors.push('Email required.')
      } else if (!this.validEmail(this.email)) {
        this.errors.push('Valid email required.')
      }
      if (!this.password) {
        this.errors.push('Password required.')
      }
      if (!this.errors.length) {
        return true
      }
    },
    validEmail: function (email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ // eslint-disable-line 
      return re.test(email)
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
.signup {
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
