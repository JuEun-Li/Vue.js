<template>
  <form v-on:submit="submitForm">
    <div>
      <lavel for="username">id: </lavel>
      <input id="username" type="text" v-model="username">
    </div>
    <div>
      <label for="password">pw: </label>
      <input id="password" type="password" v-model="password">
    </div>
    <button type="submit">login</button>
  </form>
</template>

<script>
export default {
  data: function() {
    return {
      username: '', // string타입의 데이터가 들어올 것이다.
      password: '',
    }
  },
  methods: {
    submitForm: function(event) {
      event.preventDefault(); // login후 데이터가 새로고침 되지 않음. 날아가지 않음,
      console.log(this.username, this.password);
    }
  }
}
</script>

<style>

</style>