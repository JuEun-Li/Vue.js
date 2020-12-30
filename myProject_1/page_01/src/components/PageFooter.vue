<template>
  <section>
      <ul>
        <li v-for="(todoItem, index) in propsdata" v-bind:key="todoItem.item" class="box">
          <i class="checkBtn fas fa-check" v-bind:class="{checkBtnCompleted: todoItem.completed}" 
          v-on:click="toggleComplete(todoItem, index)"></i>

          <span v-bind:class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>
          <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
            <i class="fas fa-trash-alt"></i>
          </span>
        </li>
      </ul>
  </section>
</template>

<script>
export default {
  props: ['prosdata'],
  methods: {
    removeTodo: function(todoItem, index) {
      this.todoItems.splice(index, 1);
      localStorage.removeItem(todoItem);
    },
    toggleComplete: function(todoItem) {
      todoItem.completed = !todoItem.completed; 
      // 로컬 스트리지의 데이터 갱신
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
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
  margin-right: 5px;
}
.checkBtnCompleted{
  color: lightgray;
}
.textCompleted{
  text-decoration: line-through;
  color: gray;
}
</style>