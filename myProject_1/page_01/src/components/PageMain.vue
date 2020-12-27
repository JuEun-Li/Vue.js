<template>
  <div>
      <input type="text" v-model="newtodoItem" v-on:keyup.enter="addTodo"/>
      <span style="color: mediumturquoise" v-on:click="addTodo">
         <i class="fas fa-plus-square fa-3x"></i>
      </span>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      newtodoItem: ""
    }
  },
  methods: {
    addTodo: function() {
      if(this.newtodoItem !== ''){
        var obj = {completed: false, item: this.newtodoItem};
        localStorage.setItem(this.newtodoItem, JSON.stringify(obj));
        this.clearInput();
      }
    },
    clearInput: function() {
      this.newtodoItem = '';
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