<template>
  <div>
      <nav>
        <ul class="mainbar">
          
         <li class="list-home">
           <router-link to="/home">
          <i class="fas fa-home fa-lg"></i>
          </router-link></li>

          <li class="dropdown"><router-link to="/home">개요</router-link></li>

          <div class="dropdown">
          <li><router-link to="/planet">행성 이야기</router-link></li>
            <div class="dropdown-content">
              <router-link to="/planet">지구형 행성</router-link>
              <router-link to="/planet2">가스형 행성</router-link>
            </div>
          </div>

          <div class="dropdown">
          <li><router-link to="/satellite2">위성 이야기</router-link></li>
            <div class="dropdown-content">
              <router-link to="/satellite2">목성의 위성</router-link>
              <router-link to="/satellite">달</router-link>
            </div>
          </div>

          <!-- <div class="dropdown">
          <li class="dropdown-button3"><router-link to="/quiz">퀴즈</router-link></li>
          <div class="dropdown-content">
              <a href="#">참여 방법</a>
              <a href="#">문제 풀기</a>
            </div>
          </div> -->

          <div class="dropdown">
          <li><router-link to="/board">채팅</router-link></li>
          <div class="dropdown-content">
   
            </div>
          </div>

          <li class="login-button"><router-link to="/list">
          <i class="fas fa-sign-in-alt fa-lg"></i> Login
          </router-link></li>
  
          
    
          <!-- <form class='search'>
             <input class = "keyword" type = 'text' name = 'search' maxlength= 200 value="" autocomplete="off">
            <button class = "img-button" type = "submit" name = "click" value = "">
              <i class="fas fa-search"></i>
            </button>
          </form> -->
        </ul>
      </nav>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-around;
  /* align-items: center; */
  min-height: 8vh;
  width: 100%;
}
.mainbar{
  background: rgb(125, 157, 168);
  display: flex;
  list-style-type: none;
  position: relative;
  width: 100%;
  margin: 0;
  flex-direction: row;
}
a {
  width: 90px;
  /* margin-left: 20%; */
  /* margin-right: 20%; */
  /* padding-left: 50%; */
  /* padding-right: 50%; */
  padding-left: 30px;
  padding-right: 30px;


  cursor: pointer;
  color: white;
  text-decoration: none; 
  /* 밑줄제거 */
  display: block;
  text-align: center;
  padding-bottom: 15px;
  padding-top: 20px; 
  /* router link 태그는 a 태그이다.*/
}
/* 마우스 호버시 밑줄 그리기 시작*/
.dropdown:after {    
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: "";
  display: block;
  height: 3px;
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
  margin-right: 7%;
  /* padding-right: 100px; */
  margin-left: 3%;
  padding-left: 3%;
  /* padding-left: 50px; */
}
.login-button {
  margin-left: 10%;
}


/*--------------------------------여기서부터 드랍다운 네비바*/
.dropdown {
  position: relative;
  display: inline-block;
}
.dropdown-content a {
  color: white;
  text-align: center;
  text-decoration: none;
  display: block;
  padding-top: 6%;
  padding-bottom: 6%;
}
/* 세부 컨텐츠 마우스 올렸을 때 색깔*/
.dropdown-content a:hover {
  /* background-color: blueviolet; */
  background-color: lightblue;
  /* background-color: rgb(150, 203, 221); */
  /* background-color: #f1f1f1; */
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
  z-index: 1;
}
/* form {
  padding-left: 5%;
	margin-top: 1%;
} */
.search {
  color: white;
  padding: 2px;
  vertical-align: middle;
  /* background-color: darkgray; */
}
</style>