<template>
  <div class="container-fluid">
    <div class="row back-g bg-info">
      <!-- back-g 너비 관련 서식은 home에 있음 -->
      <div class="title col-lg-4 col-sm-offset-2 col-sm-4">
        <img class="box-img2" src="https://www.flaticon.com/svg/vstatic/svg/788/788214.svg?token=exp=1614532792~hmac=d7cf7238a7b9a014111f0468d675cc46">
        <span>지구형 행성</span>
      </div>
    </div>
    <br>
    <br>

    <div class="row">
       <h1><strong>지구형 행성</strong></h1>
      <div class="line"></div>
      <!-- <span class="font2">행성 이야기 > 지구형 행성</span><br><br> -->
      <span class="font2">
        <router-link to="/home">
          <i class="fas fa-home fa-lg"></i>
        </router-link>
      </span>
      <hr>
  
      <span class="first">
          <i class="star fas fa-star-and-crescent fa-2x"></i>
            우리 태양계 행성중 지구형 행성은 [ 수성, 금성, 지구, 화성 ] 입니다.
      </span><br><br><br><br>
    </div>

    <div class="row">
      <table id="planet_table" title="클릭시 해당 내용으로 넘어갑니다.">
      <tr> 
        <td
        onClick="location.href='#mercury'"
        v-bind:class="{'white': !clicked1, 'blue': clicked1}" 
        v-on:click="clicked1 = !clicked1">수성</td>
  
        <td
        onClick="location.href='#venus'" 
        v-bind:class="{'white': !clicked2, 'blue': clicked2}" 
        v-on:click="clicked2 = !clicked2">금성</td>

        <td
        onClick="location.href='#mars'" 
        v-bind:class="{'white': !clicked3, 'blue': clicked3}" 
        v-on:click="clicked3 = !clicked3">화성</td>
      </tr>
    </table>
    <br><br><br><br>
    </div>

    <div class="row">
      <div class="question-line">
        <i class="question fas fa-mercury fa-2x" id='mercury'></i>
        <strong>수성(水星, Mercury)이란?</strong>
        <div class="pic_1_grid">
        <p class="pic_1">
          <a href="https://terms.naver.com/entry.nhn?docId=3571319&cid=58947&categoryId=58980">
          <img src="https://ncc-phinf.pstatic.net/ncc01/2011/2/16/185/1.jpg?type=w646" alt="사진 없음"></a></p>
        <p class="pic_1">
          <a href="https://terms.naver.com/entry.nhn?docId=3571319&cid=58947&categoryId=58980">
          <img src="https://ncc-phinf.pstatic.net/ncc01/2011/2/16/233/3.jpg?type=w323" alt="사진 없음"></a></p>
        </div>
          <br><br>
          <hr class="hr2">

        <i class="answer fas fa-exclamation fa-2x"></i>
        <strong>태양계에서 가장 빠른 행성</strong>
      </div><br><br><br>

         <div class="answer-box">
      <table class="answer-table">
        <tr>
          <td><h2 style="text-align:left">개요</h2></td>
        
          <td><i class="answer2 fas fa-book"></i><strong>유래</strong></td>
          <td>전령의 신 헤르메스(로마식 이름 머큐리)에서 유래되었다.<br>
            수성이 태양과 매우 가까이 있기 때문에 (태양의 중력의 영향으로)
            매우 빠른 속도로 공전 하고 있다는 것이 그 이유.<br></td>
        </tr>
        
        <tr>        
          <td></td> <td><i class="answer2 fas fa-people-arrows"></i><strong>태양과의 거리</strong></td><td>0.4AU</td>
        </tr>
        <tr>
          <td></td> <td><i class="answer2 fas fa-calendar-alt"></i><strong>공전 주기</strong></td><td>88일(수성에서의 1년은 88일)</td>
        </tr>
        </table><br> 

      <hr class="hr3">

      <table class="answer-table">
      <tr>
        <td><h2 style="text-align:left">특징</h2></td>
        <td><i class="answer2 fas fa-eye"></i><strong>관측 가능 시기</strong></td>
        <td> 밤에는 관측이 불가능하다.<br>
            해가 질 무렵(저녁), 그리고 동이 트기 전(새벽) 아주 잠깐 관측이 가능하다.</td>
      </tr>
      <tr>
        <td></td> <td><i class="answer2 fas fa-cloud-moon"></i><strong>큰 일교차</strong>
        </td><td>대기층이 매우 얇아 대기의 순환이 거의 일어나지 않으며, <br>
          바다가 없기 때문에 적도와 극의 온도 차가 극심하다.<br>
    긴 밤에는 -185°C까지 내려가지만, 긴 낮에는 470°C까지 올라간다.</td><br>
      </tr>
    </table><br>
    </div> <br><br><br><br><br>

    <!-- --------------------------------------------수성 설명 끝 -->
    </div>
    
  </div>
</template>

<script>
export default {
  el: "#planet_table",
  data: function(){
   return {
     clicked1: false,
     clicked2: false,
     clicked3: false
   }
  }
}
</script>

<style scope>
.back-g {
  color: gray;
}
.title {
  display: inline-block;
  padding-top: 1%;
}
.white {
  background-color: white;
}
.blue {
  /* background-color: rgb(118, 188, 250); */
  background-color: lightblue;
  color: white;
}
#planet_table {
  width: 35%;
  margin-left: auto; margin-right: auto; /* 표 가운데로 */
  text-align: center;
  background-color: white;
  border-collapse: collapse; /*선 없애기*/
  border: 0.5px solid lightgray;
  box-shadow: 2px 2px 2px lightgray; 
  cursor: pointer;
} /* 이동 표 */
td {
  padding: 3%;
}

.question {
   margin-left: 20%;
   padding-right: 15px;
   color: lightsteelblue;
 }
 .question-line {
  font-size: 1.2em;
} /* 질문, 대답 아이콘 부분*/
 .answer {
   margin-left: 20%;
   padding-right: 15px;
   color: pink;
 }/* icon 스타일 1 */
 .answer2 {
   vertical-align: middle;
   padding-right: 10%;
   /* color: darkorchid; */
   color: lightblue;
 }/* icon 스타일 2 */

  .answer-box {
   display: inline-block;
   border: 3px dashed lightgray;
   padding: 3%;
   margin-left: 20%;
   /* margin-right: 15%; */
   width: 60%;
 }
 .answer-table td{
   min-width: 170px;
   padding: 1%;
   border-collapse: collapse;
  font-size: 1.1em;
  vertical-align: text-top;
 } /* 대답 table 스타일 */

 .hr2 {
   width: 70%;
   color: lightgray;
   border: solid 1px;
   margin-right:0;
   margin-left: auto; margin-right: auto;
  }

 .pic_1, .pic_1 img {
  display: inline-block;
  padding-left: 20px;
  width: 200px;
  vertical-align: bottom;
  object-fit: contain; /*가로세로 비율을 유지한 채로 사이즈가 조절*/
}
.pic_1_grid {
  display: inline-block;
}
@media (max-width: 767px) {
  /* 스마트폰 사이즈 */
  .title {
    font-size: 5vw;
  }
  .box-img2 {
    width: 15%;
    margin: 5%;
    vertical-align: middle;
  }
  h1 {
    font-size: 1.2em;
  }
  .pic_1 {
    margin-top: 5%;
  }
  .pic_1 img {
    width: 150px;
    padding: 0;
    margin-left: 30%;
  }
}
@media (min-width: 768px) {
  /* 태블릿 */
  .title {
    font-size: 3vw;
  }
  .box-img2 {
    width: 25%;
    margin: 10%;
  }
}
@media (min-width: 992px) {
  /* 컴퓨터 */
  .title {
    font-size: 2.5vw;
  }
  .box-img2 {
    width: 25%;
    margin: 5%;
  }
}
</style>