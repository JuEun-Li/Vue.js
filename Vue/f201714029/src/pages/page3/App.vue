<template>
  <div id="app">
    <h1>페이지3</h1>
    <div v-bind:style="{backgroundColor : value ? '#ffa':'#bfb'}">{{ count }}</div><br>
    <button type="button" @click="count++, value=true" v-bind:disabled = value>노란색</button>
    <button type="button" @click="count++, value=false" v-bind:disabled = !value>연두색</button>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    showValue(value) {
      this.txt = value;
    }
  },
  data: function() {
    return { txt: "", count: 0, value: true };
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

div > div {
  border: 1px solid gray;
  padding: 10px 10px 10px 10px;
  margin-top: 10px;
  margin-left: 10px;
}
</style>

