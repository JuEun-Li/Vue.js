<template>
  <div id="app">
    <table>
      <tr v-for="r in row" v-bind:key="r">
        <td
          v-for="c in col"
          v-bind:key="c"
          @click="$emit('send', (c + 1) * r), value = !value"
          v-bind:class="{ButtonStyle1:value}"
        >{{ (c + 1)}} * {{ r }} = {{ (c + 1) * r}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "gugu",
  props: ["row", "col"],
  data: function() {
    return { value: false };
  }
};
</script>

<style scoped>
div#app {
  padding: 30px;
  margin: 30px auto;
  max-width: 1000px;
  border: 1px solid #ccc;
  box-shadow: 3px 3px 3px #aaa;
}

table {
  border-collapse: collapse;
  margin: auto;
}

td {
  padding: 5px;
  border: 1px solid black;
  text-align: center;
}
.ButtonStyle1 {
  background-color: #ffa;
}
</style>

