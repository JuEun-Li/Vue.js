<template>
  <div>
    <br>
    <h2>행성 이야기</h2><br>
    <font size="3em" color="navy" class="font2">행성 이야기 > 지구형 행성</font><br><br>
      <hr class="hr1"><br>
      
    <div class="first">
        <i class="star fas fa-star-and-crescent fa-2x"></i>
      우리 태양계 행성중 지구형 행성은 [ 수성, 금성, 지구, 화성 ] 입니다.</div><br><br><br><br><br>
    
    <i class="question fas fa-mercury fa-2x"></i>
     <strong>수성(水星, Mercury)이란?</strong>
     <br><br><hr class="hr2"><br><br>

    <i class="answer fas fa-exclamation fa-2x"></i>
    <strong>태양과 가장 가까운 행성</strong><br><br><br>

    <span class="answer-box">
      태양계 첫번째 행성인 수성은 전령의 신 헤르메스(로마식 이름 머큐리)에서 따왔다.<br>
    수성이 태양과 매우 가까이 있기 때문에 (태양의 중력의 영향으로)
     매우 빠른 속도로 공전 하고 있다는 점에서 유래 되었다.<br><br>
     
     수성과 태양의 거리는 약 0.4 AU로, 태양계 행성중 태양과 가장 가까이 위치해있다. <br>
     따라서 공전 주기는 88일로, 가장 짧다. 수성에서의 1년은 88일인 셈이다. <br><br>

    지구 안쪽에 위치해있기 때문에(내행성) 밤에는 관측이 불가능하다.<br>
    해가 질 무렵(저녁), 그리고 동이 트기 전(새벽) 아주 잠깐 관측이 가능하다.<br><br>

    수성의 큰 특징중 하나는 일교차이다. 대기층이 매우 얇아 대기의 순환이 거의 일어나지 않으며, 바다가 없기 때문에 적도와 극의 온도 차가 극심하다.<br>
    긴 밤에는 (섭씨)영하 185도까지 내려가지만, 긴 낮에는 470도까지 올라간다.<br><br><br><br><br><br>
    </span>

    <i class="question fas fa-venus fa-2x"></i>
     <strong>금성(金星, Marcury)이란?</strong>
     <br><br><hr class="hr2"><br><br>

    <i class="answer fas fa-exclamation fa-2x"></i>
    <strong>가장 아름답지만, 지옥과도 같은 행성</strong><br><br><br>

    <span class="answer-box">
      금성은 태양과 달을 제외, 지구에서 관측할 수 있는 행성 중에서 가장 밝다. <br>
      색깔도 밝은 노랑에 가까우며, 아주 두터운 대기층이 태양빛을 밝게 반사하기 때문에 실제로 매우 밝고 화려하게 보인다. 그래서 비너스, 루시퍼와 같은 아름다운 신들의 이름을 가지고 있다.<br><br>

      금성은 (다른 행성에 비해 비교적)지구와 매우 가까이 위치해있으며, 크기 또한 매우 비슷하다.<br>
      따라서 1960년대 초, 금성 탐사에 앞서 많은 천문학자들은 '플로리다와 같은 따뜻한 기후를 가진 행성'이라고 생각했다.<br>
      하지만 실제 금성은 우리가 생각하던 '지옥'그 자체와 같다. 그 이유는 다음과 같다.<br><br>
      <ul>
        <li>지구의 90배에 달하는 대기압</li>
        <li>대기 성분의 96%이상이 이산화탄소 -> 온실효과 -> 내부 온도 약 섭씨 465도</li>
        <li>평균 풍속 360m/s (태풍 매미의 풍속 - 50m/s)</li>
        <li>고농축 황산으로 이루어진 대기로 인해 하루종일 황산비가 내린다.</li>
      </ul><br><br>

      이러한 이유 때문에 생명체가 살고 있을 가능성은 커녕, 테라포밍의 가능성 역시 희미해졌다.<br>
      금성의 가장 큰 특징은, 태양계 행성중 유일하게 자전방향이 반대라는 점이다. 자전축 또한 177도로, 특이한 각도를 가지고 있다.<br>
      공전 주기가 224일인 것에비해, 자전 주기가 243일이다. 금성에서의 1년보다 하루가 더 긴 것이다.<br>
      이 모든 것을 종합 해보았을 때, 아주 오래전 금성이 어떤 큰 물체와의 충돌로 인해 자전 속도와 자전축에 영향을 받았을 것이라고 추측하고 있으나,
      확실하게 밝혀진 것은 없다.  
    </span>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  div {
    vertical-align: middle;
  }
  .hr1 {
   width: 600px;
   color: lightgray;
   border: solid 1px;
 }
  .hr2 {
   width: 800px;
   color: lightgray;
   border: solid 1px;
   margin-left: 15%;
 }
  h2 {
   text-align: center;
 }
 .star {
   color: aqua;
   padding-right: 15px;
 }
 .first {
   display: inline;
   margin-left: 28%;
   color: gray;
 }
 .font2 {
  display: inline-block;
  margin-left: 42%;
}

.question {
   margin-left: 20%;
   padding-right: 15px;
   color: lightsteelblue;
 }
 .answer {
   margin-left: 20%;
   padding-right: 15px;
   color: pink;
 }
 .answer-box {
   display: block;
   margin-left: 20%;
   margin-right: 20%;
 }
</style>