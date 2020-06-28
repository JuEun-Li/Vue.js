<template>
  <div id="app">
    <h1>페이지2</h1>
    <Gugu v-bind:row="9" v-bind:col="9" />
    <Gugu v-bind:row="5" v-bind:col="5" v-on:send="showValue"  />
    <Person1 v-bind:row="5" v-bind:col="5" v-on:send="showValue"  />
    <Person2 v-bind:row="5" v-bind:col="5" v-on:send="showValue"  />
  </div>
</template>

<script>
import Gugu from "./Gugu.vue";
import Person1 from "./Person1.vue";
import Person2 from "./Person2.vue";
export default {
  name: "App",
  methods: {
    showValue(value) {
      alert(value);
    }
  },
  components: { Gugu, Person1, Person2 }
};
</script>

<style scoped>
div#app {
  padding: 30px 30px 30px 30px;
  margin: 30px auto;
  max-width: 1000px;
  border: 1px solid #ccc;
  box-shadow: 3px 3px 3px #aaa;
}

</style>
