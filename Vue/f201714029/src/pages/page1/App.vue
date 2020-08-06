<template>
  <div id="app">
    <h1>페이지1</h1>
    <input type="text" v-model="txt" /><br>
    <Child v-bind:text=txt></Child>
    <Child v-bind:text=txt></Child>
  </div>
</template>

<script>
import Child from "./Child.vue";

export default {
  name: "App",
  components: { Child },
  data: function() {
    return { txt : "" };
  }
};
</script>

<style scoped>
div#app {
  padding: 0 30px 30px 30px;
  margin: 30px auto;
  max-width: 400px;
  border: 1px solid #ccc;
  box-shadow: 3px 3px 3px #aaa;
  
}
</style>

