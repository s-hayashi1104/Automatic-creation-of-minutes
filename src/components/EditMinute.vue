<template>
  <div class="contents">
    <div class="header">
      <h2>Automatic-creation-of-minutes</h2>
      <button @click="logout">Logout</button>
    </div>
    <div id="Minute">
      <form>
        Edit：<br>
        <textarea name="minute" rows="1000" cols="100"></textarea><br>
        <input type="submit" value="Storage">
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditMinute',
  methods: {
    logout: function () {
      this.$router.push('/signin')
    }
  }
}
</script>
