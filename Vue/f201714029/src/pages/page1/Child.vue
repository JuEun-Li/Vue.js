<template>
  <div>
    <h2>Child: {{ text }}</h2>
  </div>
</template>

<script>
export default {
  name: "Child",
  props: ["text"]
};
</script>

<style scoped>
div {
  border: 1px solid gray;
  padding: 0 20px 20px 20px;
  margin-top: 10px;
  margin-left: 20px;
  background-color: yellow;
}
</style>

