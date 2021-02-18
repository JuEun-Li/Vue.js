<template>
    <div>
    <div id="main">
      <h1><i class="fas fa-clipboard-check"></i> 게시판</h1>
      <table>
        <tr>
          <td>목록</td>
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
            <button type="button" v-on:click="create"><i class="fas fa-plus"></i> 추가</button><br><br>
    </div>

    <div id="backdrop" v-show="showDialog"></div>
    <div id="dialog" v-show="showDialog">
      <h1><i class="fas fa-edit"></i> 질문 {{ showDialog }}</h1>
      <input type="text" v-model.trim="todo.title" placeholder="제목을 입력하세요"/>
      <textarea v-model.trim="todo.body" placeholder="내용을 입력하세요"></textarea>

      <div>
        <label>날짜: </label>
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
          this.showDialog = "상세";
          this.todo = Object.assign({}, this.todoMap[key]);
          this.selectedKey = key;
        },

        save: function() {
          if (this.showDialog == "등록")
            axios.post('https://astronomy-page02-default-rtdb.firebaseio.com/board.json', this.todo)
                 .then(response => this.reload());               
          else
            axios.put('https://astronomy-page02-default-rtdb.firebaseio.com/board/' + this.selectedKey + '.json', this.todo)
                 .then(response => this.reload());
              this.showDialog = false;

        },
        remove: function() {
          if (confirm("삭제하시겠습니까?") == false) return;
          axios.delete('https://astronomy-page02-default-rtdb.firebaseio.com/board/' + this.selectedKey + '.json')
                .then(response => this.reload());
              this.showDialog = false;
        } 
  },
}
      window.onload = function() {
      this.app.reload();
    }

</script>

<style scoped>
  /* 버튼 */
button { 
  padding: 0.6em 2em;
  margin: 0.3em;
  background-color: rgb(106, 154, 193);
  color: white;
  border: 1px solid rgb(106, 154, 193);
  border-radius: 7px;
  box-shadow: 2px 2px 2px rgb(106, 154, 193);
  outline: 0; /* 클릭시 테두리 삭제 */
  font-size: 1.3em;
}
button:hover { cursor: pointer; }

/* 테이블 */
table { border-collapse: collapse; margin-bottom: 30px; margin-top: 7%; width: 100%; }
tr:nth-child(1) { background-color: rgb(225, 244, 253);}
tr.clickable:hover { background-color: rgb(171, 223, 249); cursor: pointer; }
td { padding: 20px;  border: 1px solid rgb(171, 223, 249); font-size: 15pt;}
td:nth-child(2) { width: 150px; }

/* main */
div#main { padding: 50px; margin: 70px auto; max-width: 800px; height: 100%;
  border: 3px solid rgb(225, 244, 253); box-shadow: 7px 7px 7px rgb(225, 244, 253);
}
div#main h1 { text-align: center; padding-bottom: 6%; 
  border-bottom: 1px solid rgb(106, 154, 193); 
  color: rgb(106, 154, 193); font-size: 3em;}

/* dialog */
div#backdrop { 
  position: absolute;
  left: 0; top: 50%;
  width: 100%; height: 100%;
  background-color: #aaa; opacity: 0.5;
} /*팝업 창 띄워질 때 회색 배경*/

div#dialog { position: absolute; top: 55%; left: 50%;
  padding: 30px; margin-left: -250px; max-width: 600px;
  background-color: white;
  border: 1px solid #ccc; box-shadow: 4px 4px 4px #666;
} /* 팝업 창 서식*/

div#dialog button {
  font-size: 0.9em;
}

div#dialog h1 { text-align: center; padding-bottom: 6%;
  border-bottom: 1px solid rgb(106, 154, 193); color: rgb(106, 154, 193);}

label, input[type=text], textarea { font-size: 10pt; }
input[type=text], input[type=date] { height: 2.4em; padding: 4px; border: 1px solid rgb(171, 223, 249);}
input[type=text] { width: 100%; margin-bottom: 10px; border: 1px solid rgb(171, 223, 249);}
textarea { padding: 4px; width: 100%; height: 250px; margin-bottom: 10px; border: 1px solid rgb(171, 223, 249);}
</style>