<template>
  <div>
      <nav>
        <ul class="mainbar">
          <li class="list-home"><a href=""><i class="fas fa-home fa-lg"></i></a></li>
          <li class="list"><a href="">개요</a></li>
          <li class="list"><a href="">행성 이야기</a></li>
          <li class="list"><a href="">소행성 & 위성</a></li>
          <li class="list"><a href="">퀴즈</a></li>
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
  background: rgb(151, 97, 151);
  display: flex;
  flex-direction: row;
  width: 100%;
  /* padding: 15px; */
  margin: 0;
  list-style-type: none;
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
  padding-top: 15px; 
  /* a 태그 넓이 늘리기*/
}
.list-home{
  padding-right: 100px;
  padding-left: 50px;
}
</style>