<template>
  <div class="contents">
    <div class="header">
      <h2>Automatic-creation-of-minutes</h2>
      <button type="button" name="logout" value="logout">Logout</button>
    </div>
    <div id="Minute">
      <button type="button" name="newMinute" value="newMinute">Start creating</button>
      <form>
        Minute：<br>
        <textarea name="minute" rows="1000" cols="100"></textarea><br>
        <input type="submit" value="Storage">
      </form>
    </div>
  </div>
</template>
