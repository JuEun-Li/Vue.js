<template>
  <div>{{ time }}</div>
</template>

<script>
import moment from "moment";

export default {
  name: "Clock",
  data: function() {
    return { time: null };
  },
  mounted: function() {
    let callback = () => (this.time = moment().format("YYYY-MM-DD HH:mm:ss"));
    callback();
    setInterval(callback, 1000);
  }
};
</script>

<style scoped>
div {
  display: inline-block;
  font-size: 15pt;
  padding: 3px 12px;
  border: 1px solid gray;
}
</style>

