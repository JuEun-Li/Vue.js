<template>
  <div id="app">
    <h1>페이지1</h1>
    <Button1 title="카운터1" v-bind:bool="true" />
    <Button1 title="카운터1" v-bind:bool="false" />
  </div>
</template>

<script>
import Button1 from './Button1.vue'

export default {
  name: "App",
  components: { Button1 }
}
</script>

<style scoped>
div#app { padding: 0 30px 30px 30px; margin: 30px auto; max-width: 400px;
      border: 1px solid #ccc; box-shadow: 3px 3px 3px #aaa; }
</style>

