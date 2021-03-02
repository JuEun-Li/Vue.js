<template>
  <div class="container-fluid">
    <a class="top" href="#" title="맨 위로"> <i class="fas fa-arrow-up fa-2x"></i><br></a>
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
            <td></td> 
            <td><i class="answer2 fas fa-cloud-moon"></i><strong>큰 일교차</strong></td>
            <td>대기층이 매우 얇아 대기의 순환이 거의 일어나지 않으며, <br>
              바다가 없기 때문에 적도와 극의 온도 차가 극심하다.<br>
              긴 밤에는 -185°C까지 내려가지만, 긴 낮에는 470°C까지 올라간다.
            </td><br>
          </tr>
        </table><br>
      </div> <br><br><br><br><br>
    </div>
    <!-- --------------------------------------------수성 설명 끝 -->


    <div class="row">
      <div class="question-line">
        <i class="question fas fa-venus fa-2x" id='venus'></i>
        <strong>금성(金星, Venus)이란?</strong>
        <div class="pic_1_grid">
        <p class="pic_1">
          <a href="https://terms.naver.com/entry.nhn?docId=3571332&cid=58947&categoryId=58980">
          <img src="https://ncc-phinf.pstatic.net/ncc02/2011/2/17/142/01.jpg?type=w646" alt="사진 없음"></a></p>
        <p class="pic_1">
          <a href="https://terms.naver.com/entry.nhn?docId=3571332&cid=58947&categoryId=58980">
          <img src="https://ncc-phinf.pstatic.net/ncc02/2011/2/18/221/1-1.jpg?type=w315" alt="사진 없음"></a></p>    
        </div>
        <br><br><hr class="hr2">

        <i class="answer fas fa-exclamation fa-2x"></i>
        <strong>가장 아름답지만, 지옥과도 같은 행성</strong><br><br><br>
      </div> 

      <div class="answer-box">
        <table class="answer-table">
          <tr>
            <td><h2 style="text-align:left">개요</h2></td>
          
            <td><i class="answer2 fas fa-book"></i><strong>유래</strong></td>
            <td>태양과 달을 제외, 지구에서 관측할 수 있는 행성 중 가장 밝다. <br>
          밝은 노란색에 가까우며, 아주 두터운 대기층이 태양빛을 밝게 반사하기 때문에 매우 밝고 화려하게 보인다. <br>
          따라서 비너스, 루시퍼와 같은 아름다운 신들의 이름을 가지고 있다.</td>
          </tr>
          <tr>
            <td></td> <td><i class="answer2 fas fa-people-arrows"></i><strong>태양과의 거리</strong></td><td>0.7AU</td>
          </tr>
          <tr>
            <td></td> <td><i class="answer2 fas fa-calendar-alt"></i><strong>공전 / 자전 주기</strong></td>
            <td>224일 / 243일<br>
            특이하게도, 금성은 자전 주기보다 길다. (하루가 1년보다 긴 것)</td>
          </tr> 
          <tr>
            <td></td> <td><i class="answer2 fas fa-ruler-combined"></i><strong>자전축</strong></td>
            <td>177.3°</td>
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
            <td></td> <td><i class="answer2 fas fa-user-friends"></i><strong>지구와 형제?</strong></td>
            <td>금성은 (다른 행성에 비해 비교적)지구와 매우 가까이 위치해있으며, 크기 또한 매우 비슷하다.<br>
          따라서 많은 천문학자들이 '플로리다와 같은 따뜻한 기후를 가진 행성'일 것이라고 예측했다.
          하지만 실제 금성은 우리가 생각하던 '지옥'그 자체와 같다. 이유는 아래와 같다.</td>
          </tr>

          <tr>
            <td></td> <td><i class="answer2 fas fa-fire-alt"></i><strong>지옥과 같은 이유</strong>
            <td>1. 지구의 90배에 달하는 대기압<br>
              2. 내부 온도 465°C<br>(대기 성분의 96%이상이 이산화탄소이다. 따라서 온실효과 발생)<br> 
              3. 평균 풍속 360m/s (태풍 매미의 풍속 - 50m/s)<br>
              4. 고농축 황산으로 이루어진 대기로 인해 하루종일 내리는 황산비
            </td>
          </tr>
        </table><br>
      </div> <br><br><br><br><br>
    </div>
    <!-- --------------------------금성 설명 끝 -->

    <div class="row">
      <div class="question-line">
      <i class="question fas fa-mars fa-2x" id='mars'></i>
      <strong>화성(火星, Mars)이란?</strong>

      <div class="pic_1_grid">
      <p class="pic_1">
          <a href="https://terms.naver.com/entry.nhn?docId=3571384&cid=58947&categoryId=58980">
          <img src="https://ncc-phinf.pstatic.net/20151203_146/1449126306897lrDag_JPEG/00.jpg?type=w646" alt="사진 없음"></a></p>
        <p class="pic_1">
          <a href="https://terms.naver.com/entry.nhn?docId=3571332&cid=58947&categoryId=58980">
          <img src="https://ncc-phinf.pstatic.net/ncc02/2011/2/28/186/2.jpg?type=w305" alt="사진 없음"></a></p>
      </div>
      <br><br><hr class="hr2">

      <i class="answer fas fa-exclamation fa-2x"></i>
      <strong>붉게 타오르는 것 같은 행성</strong>
    </div><br><br>

    <div class="answer-box">
      <table class="answer-table">
        <tr>
          <td><h2 style="text-align:left">개요</h2></td>

          <td><i class="answer2 fas fa-book"></i><strong>유래</strong></td>
          <td>아주 밝은 것과 더불어, 맨 눈으로도 붉은 색을 관측할 수 있다.<br>
              활활 타오르는 것 같은 강렬한 색상 때문에 전쟁의 신(mars)의 이름으로 불리게 되었다고 한다.<br></td>
        </tr>

      <tr>
        <td></td> <td><i class="answer2 fas fa-people-arrows"></i><strong>태양과의 거리</strong></td><td>1.5AU</td>
      </tr>

      <tr>
        <td></td> <td><i class="answer2 fas fa-calendar-alt"></i><strong>공전 / 자전 주기</strong></td><td>687일 / 24시간 37분</td>
      </tr></table><br>

      <hr class="hr3">

      <table class="answer-table">
      <tr>
        <td><h2 style="text-align:left">특징</h2></td>
        <td><i class="answer2 fas fa-eye"></i><strong>관측 가능 시기</strong></td>
        <td> 화성은 수성, 금성과 달리 지구 바깥에 위치해있어(외행성) 밤에만 관측이 가능하다.</td>
      </tr>

      <tr>
        <td></td> <td><i class="answer2 fas fa-paint-brush"></i><strong>색이 붉은 이유</strong></td>
        <td>표면에 산화철(녹슨 철) 성분이 다량 포함되어있기 때문</td><br>
      </tr>

      <tr>
        <td></td> <td><i class="answer2 fas fa-robot"></i><strong>탐사 진행</strong></td>
        <td>금성과 더불어 그나마 지구와 유사한 조건을 가지고 있어<br>
      태양계 행성중 [큐리오시티, 인사이트 등] 수 많은 탐사선이 탐사를 진행한 행성이다.<br>
       그만큼 UFO와 외계인에 대한 각종 루머가 가장 많은 행성이다.<br>
      실제로 생명체가 발견되지는 않았으나, 물이 존재하기 때문에 생명체가 존재할 가능성이 조금은 남아있다.</td><br>
      </tr>
    </table><br>
    </div> <br><br><br><br><br>
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
  .first {
    font-size: 1.1em;
  }
  .pic_1 img {
    margin-top: 5%;
    width: 150px;
    padding: 0;
    /* margin-left: 30%; */
  }
  #planet_table {
    width: 50%;
  }
  .answer-box {
    width: 90%;
    margin-left: 5%;
    /* text-align: center; */
  }
  .answer-table td {
   display: block;
   padding: 3% 0 3% 3%;
  }
  .answer {
    margin-top: 5%;
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
@media (max-width: 991px) {
  /* 딱 태블릿 크기 마지노선 */

  .answer-box{
    width: 90%;
    margin-left: 5%;
  }
  .answer-table td {
   display: block;
   padding: 3% 0 0 3%;
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