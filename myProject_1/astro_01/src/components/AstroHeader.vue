<template>
  <div>
      <nav>
        <ul class="mainbar">
          <li class="list-home"><a href=""><i class="fas fa-home fa-lg"></i></a></li>
          <li class="list"><a href="">개요</a></li>

          <div class="dropdown">
          <li class="dropdown-button1"><a href="">행성 이야기</a></li>
            <div class="dropdown-content">
              <a href="#">수성</a>
              <a href="#">금성</a>
              <a href="#">지구</a>
              <a href="#">화성</a>
              <a href="#">목성</a>
              <a href="#">토성</a>
              <a href="#">천왕성</a>
              <a href="#">해왕성</a>
            </div>
          </div>

          <div class="dropdown">
          <li class="dropdown-button2"><a href="">위성</a></li>
            <div class="dropdown-content">
              <a href="#">달</a>
              <a href="#">타이탄</a>
              <a href="#">유로파</a>
            </div>
          </div>

          <div class="dropdown">
          <li class="dropdown-button3"><a href="">퀴즈</a></li>
          <div class="dropdown-content">
              <a href="#">참여 방법</a>
              <a href="#">문제 풀기</a>
            </div>
          </div>
        </ul>
      </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.mainbar{
  /* background: rgb(151, 97, 151); */
  background: black;
  display: flex;
  flex-direction: row;
  margin: 0;
  list-style-type: none;
  /* position: fixed; */
  position: relative;
}

a {
  padding-right: 80px;
  cursor: pointer;
  color: white;
  text-decoration: none; 
  /* 밑줄제거 */
  display: block;
  text-align: center;
  padding-bottom: 15px;
  padding-top: 20px; 
  /* a 태그 넓이 늘리기*/
}
.list-home{
  padding-right: 100px;
  padding-left: 50px;
}

/*--------------여기서부터 드랍다운 네비바*/
.dropdown {
  position: relative;
  display: inline-block;
}
.dropdown-content a {
  color: white;
  padding: 8px;
  text-decoration: none;
  display: block;
}
.dropdown-content a:hover {
  /* background-color: blueviolet; */
  background-color: #f1f1f1;
}
.dropdown:hover .dropdown-content {
  display: block;
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: darkgray;
  min-width: 120px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}
</style>