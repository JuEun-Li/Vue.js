<template>
  <div>
    <h2>
      {{ title }} -
      <small>{{ description }}</small>
    </h2>
    <input type="text" v-model = "counter" />
    <button type="button" v-bind:disabled = "!counter">button1</button> <!--문자열을 입력 받으면 활성화-->
    <button type="button" v-bind:disabled = "bool">button1</button>

  </div>
</template>

<script>
export default {
  name: "Button1",
  props: ["title", "bool"],
  data: function() {
    return { counter: 0 };
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

