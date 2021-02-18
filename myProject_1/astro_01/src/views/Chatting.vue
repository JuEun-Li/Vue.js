<template>
  <div>
      <br><br>
    <h1>채팅</h1>
    <div class="line"></div>
    <span class="font2">home > 채팅</span><br><br>
      <hr class="hr1"><br>

      <span class="first">
        <i class="star fas fa-star-and-crescent fa-2x"></i>
      궁금한 것을 물어보세요</span><br><br><br><br>

      <a class="top" href="#" title="맨 위로"> <i class="fas fa-arrow-up fa-2x"></i><br></a>
    <div class="input-box">
    <div id="input">
      <textarea cols="65" rows="4" v-model.trim="text" placeholder="메시지 입력" 
                @keyup.enter.exact="sendMessage"></textarea>
      <button type="button" @click="sendMessage">메시지 전송</button>
    </div>
    <div class="messages">
      <div class="scrollable">
        <div class="message" v-for="(message, key) in messages" v-bind:key="key">
          <img class="photo" :src="message.photoURL" />
          <div>
            <div class="name">{{ message.username }}</div>
            <div class="time">{{ message.createTime }}</div>
            <div class="text">{{ message.text }}</div>
          </div>
        </div>
      </div>
    </div></div>
  </div>
</template>
<script>
import Vue from 'vue'
import firebaseApp from './firebaseApp.js'
import moment from 'moment'
import { mapState } from 'vuex'

export default {
  name: 'Chatting',
  computed: {
    ...mapState([ 'user' ])
  },  
  data() {
    return {
      text: "",
      messages: { }
    }
  },
  methods: {
    sendMessage() {
      if (!this.user) {
        alert("로그인해야 합니다.");
        return;
      }
      let message = {
        uid: this.user.uid,
        username: this.user.displayName,
        text: this.text,
        createTime: moment().format("YYYY-MM-DD HH:mm:ss"),
        photoURL: this.user.photoURL
      }
      firebaseApp.database().ref('messages').push(message);
      this.text = "";
    }
  },
  mounted() {
    this.dbRef = firebaseApp.database().ref('messages');
    this.dbRef.on('child_added', (snapshot) => {
      let key = snapshot.key, value = snapshot.val();
      Vue.set(this.messages, key, value);
    });
  },
  beforeDestroy() {
    this.dbRef.off('child_added');
  }
}
</script>

<style scoped>

div#input { 
    margin-bottom: 20px; 
}
textarea { 
    margin-right: 10px;
    display: inline-block;
    border: 2px solid lightblue;
    box-shadow: 2px 2px 2px lightgray;
}/*text 입력창*/
button {
    padding: 0.3em 1em;
    margin-bottom: 5px;
    vertical-align: bottom;
    border: 1.5px solid lightblue;
    box-shadow: 3px 3px 3px lightgray;
    color:white;
    background-color: lightblue;
    border-radius: 5px;
    outline: 0; /* 클릭시 테두리 삭제 */
}
.input-box {
    width: 80%;
    margin-left: auto; margin-right: auto;
}
div.scrollable { 
    height: 600px; overflow-y: scroll; 
    /* border: 2px solid rgb(164, 204, 206); */
    border: 2px solid aliceblue;
    box-shadow: 5px 5px 5px lightgray; 
} /*스크롤바 박스*/

div.messages { 
    /* background-color: #fafafa;  */
    background-color: aliceblue; 
}
div.message { 
    margin: 10px;
    padding: 5px;
    border: 1.5px solid aliceblue;
    box-shadow: 2px 2px 2px lightgray;
    background-color: white;
}/* 입력된 message 박스*/
div.message > div { display: inline-block; }
div.message div.name { font-size: 10pt; color: #666; display: inline-block; }
div.message div.time { font-size: 9pt; color: #888; display: inline-block; margin-left: 20px; }
div.message div.text { font-size: 11pt; color: black; margin: 10px 0; white-space: pre;}
div.message img.photo { margin-right: 10px; width: 50px; height: 50px; vertical-align: top; }
</style>


