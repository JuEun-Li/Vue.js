<template>
  <div class="top container-fluid bg-success">
    <nav>
      <ul>
        <li class="list-home">
          <router-link to="/home">
            <i class="fas fa-home fa-lg"></i>
          </router-link>
        </li>
        <li class="dropdown"><router-link to="/planet">지구형 행성</router-link></li>
        <li class="dropdown"><router-link to="/planet2">가스형 행성</router-link></li>
        <li class="dropdown"><router-link to="/satellite">목성의 위성</router-link></li>
        <li class="dropdown"><router-link to="/list">게시판</router-link></li>
        <li class="login-button">
          <router-link to="/login">
            <i class="fas fa-sign-in-alt fa-lg"></i> Login
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scope>

nav li {
  list-style: none;
  float: left; /* 네비바 li 요소 가로 배치 */
  width: 15%;
  box-sizing: border-box;
  /* box 사이즈는 border값 까지만 하겠다.(li속성들이 바깥으로 나가지 않음) */
  text-align: center;
  padding-top: 1%;
  padding-bottom: 1%;
}
a {
  display: block;
  cursor: pointer;
  color: white;
  text-decoration: none; 
  width: 15%;
  /* 밑줄제거 */
  /* router link 태그는 a 태그이다.*/
}
nav ul {
  overflow: hidden;
}
.top {
  padding: 20px 0 0 0;
  font-size: 1.3vw;
  /* 모니터 크기에 따라 글씨 크기 */
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

@media (max-width: 767px) {
  /* 스마트폰 사이즈 */
  .top {
    font-size: 1.5em;
  }
  nav li {
    width: 100%;
    padding: 1%;
  }
}
@media (min-width: 768px) {
  .top {
    width: 100%;
  }
}
@media (min-width: 992px) {
  /* 모니터의 사이즈가 최소한 992일 때 */
  /* body {
    background-color: azure;
  } */
  li {
    padding: 1% 1% 1% 1%;
  }
}

/* media태그 주의: px값이 덮지 않아야한다. 순서 주의. */
</style>