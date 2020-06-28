<template>
  <div id="app">
    <span v-for="(value, key) in person" v-bind:key="key">{{ key }}, {{ value }}</span>
  </div>
</template>

<script>
export default {
  name: "Person2",
  props: ["value", "key"],
  data: function() {
    return {
      person: {
        id: 101,
        name: "홍길동",
        age: 16,
        3: "three",
        "2": "two",
        "1": "one"
      }
    };
  }
};
</script>

<style scoped>
div#app {
  padding: 30px;
  margin: 30px auto;
  max-width: 500px;
  border: 1px solid #ccc;
  box-shadow: 3px 3px 3px #aaa;
}
span {
  display: inline-block;
  margin: 5px;
  padding: 8px 15px;
  border: 1px solid black;
}
</style>

