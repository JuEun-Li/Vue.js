<template>
  <div id="app">
    <h1>페이지2</h1>
    <span>App: {{ txt }}</span>
    <Child v-bind:text=txt v-on:ok="showValue"> </Child>
  </div>
</template>

<script>
import Child from "./Child.vue";

export default {
  name: "App",
  components: { Child },
  methods: {
    showValue(value) {
      this.txt=value;
    }
  },
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

