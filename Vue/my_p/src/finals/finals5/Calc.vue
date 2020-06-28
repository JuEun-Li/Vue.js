<template>
  <div>
    <h2>계산기</h2>
    <input type="number" v-model.number="val1" />
    <input type="number" v-model.number="val2" />

    <button
      type="button"
      @click="$emit('send', total)"
      v-bind:disabled="!val1 || !val2"
    >계산버튼</button>
  </div>
</template>

<script>
export default {
  name: "Calc",
  // props: ["title", "bool"],
  data: function() {
    return { val1: "", val2: "" };
  },
  computed: {
    total() {
      return this.val1 + this.val2;
    }
  }
};
</script>

<style scoped>
div {
  border: 1px solid gray;
  padding: 0 20px 20px 20px;
  margin-top: 10px;
}
input {
  padding: 5px;
  margin-right: 5px;
}
button {
  padding: 0.4em 1em;
  margin-right: 5px;
}
</style>

