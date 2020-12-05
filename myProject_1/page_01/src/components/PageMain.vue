<template>
  <div>
      <input type="text" v-model="todo" />
      <span style="color: mediumturquoise"> <i class="fas fa-plus-square fa-2x"></i>
      </span>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  div { text-align: center; }
  div > input { height: 15px; margin: 3px;}
</style>