<template>
  <v-container>
    <v-layout justify-center>
      <v-flex xs6 md6>
        <v-toolbar color="primary" dark>
          <v-toolbar-title>Sign up</v-toolbar-title>
        </v-toolbar>
        <v-card>
          <v-container fluid>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-layout row wrap>
                 <v-text-field
                  type="email"
                  v-model="email"
                  :rules="emailRules"
                  label="Email"
                  required></v-text-field>
              </v-layout>
              <v-layout row wrap>
                <v-text-field
                 type="password"
                 v-model="password"
                 :rules="passwordRules"
                 label="Password"
                 required></v-text-field>
              </v-layout>
              <v-layout row wrap justify-end>
                <v-btn outline round class="green green-text darken-2" :disabled="!valid" @click="register">sign up</v-btn>
                <v-btn outline round class="green green-text darken-2" @click="clear">clear</v-btn>
              </v-layout>
            </v-form>
              <v-btn outline round class="green green-text darken-2" to="/">sign in now!!</v-btn>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import api from '../api-service'

export default {
  name: 'Signup',
  data () {
    return {
      valid: true,
      error: null,
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Passwird is required',
        v => (v && v.length >= 6) || 'Password must be longer than 6 characters'
      ]
    }
  },
  methods: {
    register: async function () {
      if (this.$refs.form.validate()) {
        const user = await api.signUp(this.email, this.password)
        if (user) {
          alert('Create account: ', user.name)
          this.$router.push('/')
        } else {
          console.log('email or password　is wrong')
        }
      }
    },
    clear () {
      this.$refs.form.reset()
    }
  }
}
</script>

<style scoped>
</style>
