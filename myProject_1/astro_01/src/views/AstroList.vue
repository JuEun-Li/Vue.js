<template>
  <div>
    <div class="notice-box">로그인이 필요한 서비스 입니다.</div>
    <img :src="$store.state.user.photoURL" v-if="$store.state.user" />
    <button type="button" @click="logout" v-if="$store.state.user">로그아웃</button>
    <button type="button" @click="login('google')" v-if="!$store.state.user">Google 로그인</button>
    <button type="button" @click="login('github')" v-if="!$store.state.user">Github 로그인</button>
  </div>
</template>

<script>
import firebase from 'firebase'
import firebaseApp from './firebaseApp.js'

export default {
  name: 'Home',
  data: function() {
    return {
      user: null // component에 user 속성을 만든다.
    }
  },
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
div { text-align: center; }
.notice-box {
    width: 20%;
    padding: 5%;
    margin-top: 5%;
    border: 1.5px solid lightblue;
    margin-left:auto; margin-right:auto;
}
button {
  border: 1.5px solid lightblue;
  box-shadow: 2px 2px 2px lightgray;
  color:white;
  background-color: lightblue;
  padding: 7px;
  margin: 1%;
  border-radius: 8px;
  outline: 0; /* 클릭시 테두리 삭제 */
}
button:hover {
  background-color: rgba(0,0,0,0);
  color: skyblue;
  cursor: pointer;
}
img { width: 100px; height: 100px; display: block; margin: 20px auto; }
</style>

