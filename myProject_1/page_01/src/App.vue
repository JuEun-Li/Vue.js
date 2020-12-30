<template>
  <div id="app">
    <PageHeader></PageHeader>
    <PageMain v-on:addTodoItem= "addOneItem"></PageMain>
    <PageFooter v-bind:propsdata="todoItems"></PageFooter>
  </div>
</template>

<script>
import PageHeader from './components/PageHeader.vue'
import PageMain from './components/PageMain.vue'
import PageFooter from './components/PageFooter.vue'

export default {
  data: function() {
    return {
      todoItems: []
    }
  },
  methods: {
    addOneItem: function(todoItem) {
      var obj = {completed: false, item: todoItem};
      localStorage.setItem(todoItem, JSON.stringify(obj));
      this.todoItems.push(obj); // push는 배열 맨 끝에 데이터 하나 추가해준다.
    }
  },
  created: function() {
    if(localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++){
        this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        // 문자를 객체로 변환했다.
        // this.todoItems.push(localStorage.key(i)); 
      }
    }
  },

  components: {
    'PageHeader': PageHeader,
    'PageMain': PageMain,
    'PageFooter': PageFooter
  } // components 등록하기
}
</script>

<style>
  div#app {
    padding: 30px; margin: 30px auto; max-width: 400px;
      border: 1px solid aliceblue; box-shadow: 4px 4px 4px #ccc;
      background-color: aliceblue; }

  div#app div { margin-bottom: 20px;}
  label { display: block;}
  input[type=text] { padding: 4px;}
</style>
