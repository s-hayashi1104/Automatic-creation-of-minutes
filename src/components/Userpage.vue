<template>
  <div class="contents">
    <div class="header">
      <h2>Automatic-creation-of-minutes</h2>
      <button @click="create">New</button>
      <button @click="logout">Logout</button>
    </div>
    <div id="Minute">
      議事録
      <button @click="edit">Edit</button>
      <button type="button" name="delete" value="newMinute">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserPage',
  methods: {
    create: function () {
      this.$router.push('/createminute')
    },
    edit: function () {
      this.$router.push('/editminute')
    },
    logout: function () {
      this.$router.push('/')
    }
  }
}
</script>
