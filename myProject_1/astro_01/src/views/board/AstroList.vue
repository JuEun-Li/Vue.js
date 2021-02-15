<template>
    <div id="app">
    <div id="main">
      <h1><i class="fas fa-clipboard-check"></i> 게시판</h1>
      <table>
        <tr>
          <td>제목</td>
          <td>날짜</td>
        </tr>
        <tr v-for="(todo, key) in todoMap" v-on:click="edit(key)" v-bind:key="key" class="clickable">
          <td>{{ todo.title }}</td>
          <td>{{ todo.due_date }}</td>
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
        <button type="button" v-on:click="remove"><i class="fas fa-trash-alt"></i> 삭제</button>
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
      selectedKey: null
    }
  },
    methods: {
        create: function() {
          this.showDialog = "등록";
          this.todo = {};
        },
        reload: function() {
          axios.get('https://astronomy-page02-default-rtdb.firebaseio.com/board.json')
               .then(response => this.todoMap = response.data);
        },
        edit: function(key) {
          this.showDialog = "수정";
          this.todo = Object.assign({}, this.todoMap[key]);
          this.selectedKey = key;
        },

        save: function() {
          if (this.showDialog == "등록")
            axios.post('https://astronomy-page02-default-rtdb.firebaseio.com/board.json', this.todo)
                 .then(response => {this.reload()
                 return response});
                 
          else
            axios.put('https://astronomy-page02-default-rtdb.firebaseio.com/board/' + this.selectedKey + '.json', this.todo)
                 .then(response => {this.reload()
                 return response});
          this.showDialog = false;
        },
        remove: function() {
          if (confirm("삭제하시겠습니까?") == false) return;
          axios.delete('https://astronomy-page02-default-rtdb.firebaseio.com/board/' + this.selectedKey + '.json')
                 .then(response => {this.reload();
                  return response})       
          this.showDialog = false;
        } 
  },
  // computed:{ 
  //   app: function() {
  //   return this.app;
  //   }
  // }
}
      window.onload = function() {
      this.app.reload();
    }

</script>

<style scoped>
  /* 공통 */
button { padding: 0.4em 1.5em; }
table { border-collapse: collapse; margin-bottom: 20px; width: 100%; }
tr:nth-child(1) { background-color: #ddd; }
tr.clickable:hover { background-color: #ffb; cursor: pointer; }
td { padding: 8px;  border: 1px solid #aaa; font-size: 10pt; }
td:nth-child(2) { width: 100px; }

/* main */
div#main { padding: 30px; margin: 30px auto; max-width: 600px;
  border: 1px solid #ccc; box-shadow: 3px 3px 3px #aaa;
}
div#main h1 { border-bottom: 1px solid gray; }

/* dialog */
div#backdrop { position: absolute; left: 0; top: 0; width: 100%; height: 100%;
  background-color: #aaa; opacity: 0.5;
}
div#dialog { position: absolute; top: 50px; left: 50%;
  padding: 30px; margin-left: -250px; max-width: 500px;
  background-color: white;
  border: 1px solid #ccc; box-shadow: 4px 4px 4px #666;
}
div#dialog h1 { border-bottom: 1px solid gray; }

label, input[type=text], textarea { font-size: 10pt; }
input[type=text], input[type=date] { height: 2.4em; padding: 4px; }
input[type=text] { width: 100%; margin-bottom: 10px; }
textarea { padding: 4px; width: 100%; height: 250px; margin-bottom: 10px; }
</style>