<template>
  <div>
      <ul>
        <li v-for="todoItem in todoItems" v-bind:key="todoItem" class="box">
          {{ todoItem }}
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      todoItems: []
    }
  },
  created: function() {
    if(localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++){
        this.todoItems.push(localStorage.key(i)); 
      }
    }
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}

.box {
  background-color: white;
  display: flex;
  border-radius: 5px;
  padding: 0 0.9rem;
  min-height: 50px;
  height: 50px;
  margin: 10px 0px; 
  line-height: 50px;
}
</style>