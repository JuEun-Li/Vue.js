<template>
  <div>
      <input type="text" v-model="todoItems" v-on:keyup.enter="addTodo"/>
      <span style="color: mediumturquoise" v-on:click="addTodo">
         <i class="fas fa-plus-square fa-3x"></i>
      </span>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      todoItems: ""
    }
  },
  methods: {
    addTodo: function() {
      localStorage.setItem(this.todoItems, this.todoItems);
      this.clearInput();
    },
    clearInput: function() {
      this.todoItems = '';
    }
  }
}
</script>

<style scoped>
  div { text-align: center; }
  div > input { height: 30px; width: 200px; margin: 5px 5px 10px; 
    border-color: aliceblue; vertical-align: bottom; border-radius: 5px; }
  span { vertical-align: top; }
</style>