<template>
  <div>
      <input type="text" v-model="todo" v-on:keyup.enter="addTodo"/>
      <span style="color: mediumturquoise" v-on:click="addTodo">
         <i class="fas fa-plus-square fa-3x"></i>
      </span>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      todo: ""
    }
  },
  methods: {
    addTodo: function() {
      localStorage.setItem(this.todo, this.todo);
      this.clearInput();
    },
    clearInput: function() {
      this.todo = '';
    }
  }
}
</script>

<style scoped>
  div { text-align: center; }
  div > input { height: 30px; width: 200px; margin: 3px; 
    border-color: aliceblue; vertical-align: top; }
</style>