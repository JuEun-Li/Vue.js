<template>
  <div>
      <nav>
        <ul class="mainbar">
          
            <li class="list-home">
              <router-link to="/home">
                <i class="fas fa-home fa-lg"></i>
              </router-link></li>
          
          
          <div class="dropdown">
            <li><router-link to="/home">개요</router-link></li>
          </div>

          <div class="dropdown">
            <li><router-link to="/planet">행성 이야기</router-link>
              <div class="dropdown-content">
                <router-link to="/planet">지구형 행성</router-link>
                <router-link to="/planet2">가스형 행성</router-link>
              </div></li>
          </div>

          <div class="dropdown">
          <li><router-link to="/satellite2">위성 이야기</router-link>
            <div class="dropdown-content">
              <router-link to="/satellite2">목성의 위성</router-link>
              <router-link to="/satellite">달</router-link>
            </div></li>
          </div>

          <div class="dropdown">
          <li><router-link to="/chatting">채팅</router-link></li>
          </div>

          <div class="dropdown">
          <li><router-link to="/list">게시판</router-link></li>
          </div>

      
          <li class="login-button">
          <router-link to="/login">
          <i class="fas fa-sign-in-alt fa-lg"></i> Login </router-link></li>
        
        </ul>
      </nav>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>

div {
  margin: 0;
}
nav {
  display: inline-block;
  /* justify-content: space-around; */
  width: 100%;
  /* height: 100%; */
  background: rgb(125, 157, 168);
  margin-right: 0;
}
.mainbar{
  display: flex;
  list-style-type: none;
  position: relative;
  margin: 0;
  /* flex-direction: row; */
}
div li {
  font-size: 1.3em;
  /* margin-left: 5%; */
  /* width: 100%; */
}
 a {
  width: 120px;
  /* width: 100%; */
  /* margin-left: 20%; */
  /* margin-right: 20%; */
  /* padding-left: 50%; */
  /* padding-right: 50%; */
  padding-left: 35px;
  padding-right: 35px;
  /* padding-bottom: 25px; */
  /* padding-top: 30px;  */
  padding-top: 16%;
  padding-bottom: 14%;
  text-align: center;

  cursor: pointer;
  color: white;
  text-decoration: none; 
  /* 밑줄제거 */
  display: inline-block;
    font-size: 1.1em; 
  /* router link 태그는 a 태그이다.*/
}

/* 마우스 호버시 밑줄 그리기 시작*/
.dropdown:after {    
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: "";
  display: block;
  height: 4px;
  left: 50%;
  position: absolute;
  background: lightgoldenrodyellow;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}
.dropdown:hover:after { 
  width: 100%; 
  left: 0; 
}
/* 마우스 호버시 밑줄 그리기 끝*/

.list-home{
  margin-right: 3%;
  margin-left: 2%;
  font-size: 1.2em;
}

.login-button {
  margin-left: 5%; 
}

/*--------------------------------여기서부터 드랍다운 네비바*/
.dropdown {
  position: relative;
}
.dropdown-content a {
  color: white;
  text-align: center;
  text-decoration: none;
  display: block;
  padding-top: 7.5%;
  padding-bottom: 7.5%;
}
/* 세부 컨텐츠 마우스 올렸을 때 색깔*/
.dropdown-content a:hover {
  background-color: lightblue;
  /* background-color: rgb(150, 203, 221); */
}
.dropdown:hover .dropdown-content {
  display: block;
}
/*세부 내용 배경*/
.dropdown-content {
  display: none;
  position: absolute;
  background-color: rgb(125, 157, 168);
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1; /* 제일 맨 위에 위치 */
}
</style>