<template>

  <div id="app">
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

  </div>
</template>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  <script src="https://unpkg.com/axios/dist/axios.min.js"></script>

  
<script>
// <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

export default {
    el: '#app',
    data: {
        todoMap: {}
    }
    window.onload = function() {
      axios.get('https://astronomy-page02.firebaseio.com/board.json')
           .then(response => app.todoMap = response.data);
    }

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