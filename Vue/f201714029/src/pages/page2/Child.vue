<template>
  <div>
    <h3>{{ title }} child: <input type="text" v-model="txt" />
    <button type="button" @click="$emit('ok', txt)" v-bind:disabled = "!txt">ok</button>
    </h3> 
  </div>
</template>

<script>
export default {
  name: "Child",
  props: ["text"],
  data: function() {
    return { txt: "" };
  }
};
</script>

<style scoped>
div {
  border: 1px solid gray;
  padding: 0 10px 10px 10px;
  margin-top: 10px;
  margin-left: 20px;
  background-color: yellow;
}
</style>

