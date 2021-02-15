<template>
    <div id="app">
    <div id="main">
      <h1><i class="fas fa-clipboard-check"></i> 할일</h1>
      <table>
        <tr>
          <td>제목</td>
          <td>날짜</td>
        </tr>
        <tr v-for="(todo, key) in todoMap" v-bind:key="key">
          <td>{{ todo.title }}</td>
          <td>{{ todo.due-date }}</td>
        </tr>
        <tr v-if="Object.keys(todoMap).length == 0">
          <td colspan="2">등록된 자료가 없습니다.</td>
        </tr>
      </table>
            <button type="button" v-on:click="create"><i class="fas fa-plus"></i> 추가</button>
    </div>

    <div id="backdrop" v-show="showDialog"></div>
    <div id="dialog" v-show="showDialog">
      <h1><i class="fas fa-edit"></i> 할일 {{ showDialog }}</h1>
      <input type="text" v-model.trim="todo.title" placeholder="제목을 입력하세요"/>
      <textarea v-model.trim="todo.body" placeholder="내용을 입력하세요"></textarea>
      <div>
        <label>날짜:</label>
        <input type="date" v-model="todo.due_date" />
        <button type="button" v-on:click="save"><i class="fas fa-check"></i> 저장</button>
        <button type="button" v-on:click="showDialog = false"><i class="fas fa-ban"></i> 취소</button>
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  el: '#app',
  data: function() {
    return {
      todoMap: {},
      todo: {},
      showDialog: false,
    }
  },
    methods: {
        create: function() {
          this.showDialog = "등록";
          this.todo = {};
        },

        save: function() {
          axios.post('https://astronomy-page02-default-rtdb.firebaseio.com/board.json', this.todo);
          this.showDialog = false;
        }

  }
}
  window.onload = function() {
  axios.get('https://astronomy-page02-default-rtdb.firebaseio.com/board.json')
        .then(response => console.log(response.data));
  }
</script>

<style scoped>
  h1 { border-bottom: 1px solid gray; }
div { padding: 30px; margin: 30px auto; max-width: 600px;
  border: 1px solid #ccc; box-shadow: 3px 3px 3px #aaa;
}
li { margin-bottom: 10px; }
input[type=text] { padding: 5px;  }
button { padding: 0.4em 1.5em; }
</style>