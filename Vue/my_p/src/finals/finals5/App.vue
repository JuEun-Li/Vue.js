<template>
  <div id="app">
    <h1>계산기</h1>
    <Calc v-on:send="showValue" />
  </div>
</template>

<script>
import Calc from "./Calc.vue";

export default {
  name: "App",
  methods: {
    showValue(value) {
      alert(value);
    }
  },
  components: { Calc }
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

