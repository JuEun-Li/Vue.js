<template>
  <div>
      <nav>
        <ul class="mainbar">
          <li class="list"><a href="">home</a></li>
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
  background: rgb(105, 137, 233);
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 15px;
  margin: 0;
  list-style-type: none;
}

.list {
  padding-right: 50px;
  cursor: pointer;
}
template {
  margin: 0;
}
</style>