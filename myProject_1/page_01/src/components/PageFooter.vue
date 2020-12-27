<template>
  <div>
      <ul>
        <li v-for="(todoItem, index) in todoItems" v-bind:key="todoItem.item" class="box">
          <i class="checkBtn fas fa-check" v-bind:class="{checkBtnCompleted: todoItem.completed}" 
          v-on:click="toggleComplete(todoItem, index)"></i>

          <span v-bind:class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>
          <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
            <i class="fas fa-trash-alt"></i>
          </span>
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
  methods: {
    removeTodo: function(todoItem, index) {
      console.log(todoItem, index);
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index, 1);
    },
    toggleComplete: function(todoItem, index) {
      todoItems.completed = !todoItem.completed; 
      // 로컬 스트리지의 데이터 갱신
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    }
  },
  created: function() {
    if(localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++){
        this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        // 문자를 객체로 변환했다.
        // this.todoItems.push(localStorage.key(i)); 
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
  margin: 15px 0px; 
  line-height: 50px;
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}

.removeBtn {
  color: gray;
  margin-left: auto;
}
.checkBtn {
  line-height: 45px;
  color: darkblue;
}
.checkBtnCompleted{
  color: lightgray;
}
.textCompleted{
  text-decoration: line-through;
  color: gray;
}
</style>