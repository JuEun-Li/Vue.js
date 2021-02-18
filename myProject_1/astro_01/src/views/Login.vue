<template>
  <div>
    <br><br><div class="notice-box">
      <h1>Login</h1>
      <span style="color:gray">
      구글 혹은 깃허브 계정으로 로그인시 채팅 기능을 이용하실 수 있습니다.</span> 
      <div class="last_box"></div>

    </div>
    <img :src="user.photoURL" v-if="user" />
    <button type="button" @click="logout" v-if="user">로그아웃</button>
    <button type="button" @click="login('google')" v-if="!user"><strong>Google 로그인</strong></button><br>
    <button type="button" class="button2" @click="login('github')" v-if="!user"><strong>Github 로그인</strong></button>
  </div>
</template>

<script>
import firebase from 'firebase'
import firebaseApp from './firebaseApp.js'
import { mapState } from 'vuex'

export default {
  name: 'notice-box',
  computed: {
    ...mapState([ 'user' ])
  },

  // data: function() {
  //   return {
  //     user: null // component에 user 속성을 만든다.
  //   }
  // },
  methods: {
      login(service) {
        let provider;

        if (service == 'google') 
          provider = new firebase.auth.GoogleAuthProvider();

        else if (service == 'github')
          provider = new firebase.auth.GithubAuthProvider();

        firebaseApp.auth()
          .signInWithPopup(provider)
          .then((result) => { // 로그인 성공시 실행되는 코드
            console.log(result);
            this.$store.commit('setUser', result.user); // 로그인시 사용자 정보 객체를 컴포넌트의 user 속성에 대입
          })
          .catch((error) => { // 로그인 실패시 실행되는 코드
            alert("로그인 실패 " + error.message)
            console.log(error);
          });
      },
      logout() {
        firebaseApp.auth().signOut()
        .then(() => { this.$store.commit('setUser', null);  })
        .catch((error) => { console.log(error); });
      } // 로그아웃   
  }
}
</script>

<style scoped>
div { text-align: center;}
.notice-box {
    max-width: 40%;
    padding: 2% 3% 3%;
    margin-top: 5%;
    margin-bottom: 3%;
    /* border: 7px solid rgb(202, 232, 229); */
    border: 7px solid rgb(252, 231, 221);
    margin-left:auto; margin-right:auto;
    color: rgb(247, 148, 72);
    box-shadow: 3px 3px 7px rgb(252, 231, 221);
    font-size: 1.2em;
}
button {
  /* border: 1.5px solid rgb(215, 223, 35); */
  width: 20%;
  border: 1.5px solid rgb(203, 231, 211);
  box-shadow: 2px 2px 2px lightgray;
  color:white;
  /* background-color: rgb(215, 223, 35); */
  background-color: rgb(203, 231, 211);
  padding: 1em 1.5em;
  margin: 1%;
  border-radius: 8px;
  outline: 0; /* 클릭시 테두리 삭제 */
  font-size: 1.3em;
}
.button2 {
  /* border:1.5px solid rgb(161, 208, 120);
  background-color: rgb(161, 208, 120); */
  border:1.5px solid rgb(200, 196, 226);
  box-shadow: 2px 2px 2px lightgray;
  background-color: rgb(200, 196, 226);
   margin-bottom: 10%; /*바닥과 좀 떨어지게*/
}
button:hover {
  background-color: rgba(0,0,0,0);
  color: rgb(203, 231, 211);
  cursor: pointer;
}
.button2:hover {
  color: rgb(200, 196, 226);
}
img { width: 100px; height: 100px; display: block; margin: 20px auto; }
.last_box {
  display: block;
  width: 40%;
  height: 5px;
  background: rgb(252, 231, 221);
  margin-left: auto; margin-right: auto;
  margin-top: 7%;
}
</style>

