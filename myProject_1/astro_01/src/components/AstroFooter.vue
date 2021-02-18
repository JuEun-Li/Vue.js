<template>
  <div class="main">
      <div class="logo">
          <strong>Astronomy-Page</strong>
      </div>
          <ul class="box">
            <li>제작자: 이주은</li>
            <li>전화 번호: 010-5157-5004</li>
            <li>이메일: dlwndms61@naver.com</li>
            <li>배경화면 Credit: NASA, ESA, the Hubble Heritage Team (STScI/AURA),<br> A. Nota (ESA/STScI), and the Westerlund 2 Science Team</li>
          </ul>
  </div>

</template>

<script>
export default {
}
</script>

<style scoped>
    .main {
        /* background-color: rgb(209, 250, 250); */
        position: absolute;
        background: rgb(125, 157, 168);
        color: white;
        margin: 0;
        width: 100%;
        height: 200px;
    }
    .logo {
        font-size: 25px;
        display: inline-block;
        margin-left: 5%;
        margin-top: 3%;
    }
    .box {
        display: inline-block;
        font-size: 0.8em;
        padding-left: 30%;
        margin-top: 3%;
        vertical-align: top;
        list-style: none;
    }
</style>