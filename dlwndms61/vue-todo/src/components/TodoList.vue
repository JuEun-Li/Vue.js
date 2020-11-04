<template>
  <div>
      <ul>
        <li v-for="todoItem in todoItems" v-bind:key="todoItem">
          {{ todoItem }}
        </li>
        <!-- <li>2</li> -->
        <!-- <li>3</li> -->
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
      for(var i = 0; i < localStorage.length; i++) {
        this.todoItems.push(localStorage.key(i));
      } // localstorage 데이터 꺼내기
    }
  }
}
</script>

<style>

</style>