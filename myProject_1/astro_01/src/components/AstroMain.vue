<template>
  <div>
    <h2>개요</h2><br>
    <font size="3em" color="navy" class="font2">home > 개요</font><br><br>
      <hr><br>
      
    <div class="first">
        <i class="star fas fa-star-and-crescent fa-2x"></i>
      우주는 '물질과 시공간을 일정한 힘으로 담고있는 공간'을 의미합니다.</div><br><br><br><br>

    <p class="pic_1">
        <a href="https://esahubble.org/images/heic0715a/">
        <img src="https://cdn.spacetelescope.org/archives/images/thumb700x/heic0715a.jpg" alt="사진 없음"></a><br>
        <font size="2em" color="gray" class="font1">NASA, ESA and the Hubble Heritage </font>
         <font size="2em" color="gray" class="font1"> (STScI/AURA)-ESA/Hubble Collaboration</font>
    </p>
    <div class="box_1">
        <p class="pic_1"><i class="icon_left fas fa-quote-left fa-2x"></i><br><br>
          지구 바깥에는 '우주'라는 공간이 존재하며, <br>그 곳에는 다양한 가족들이 있습니다.<br>
          별, 행성, 위성, 소행성, 성운, 성단 등등..<br>
          '우주'란 무엇일까요?<br>
          우주는 <mark>'물질과 시공간을 일정한 힘으로 담고있는 공간'</mark>을 의미합니다.<br>
          이 우주의 신비 속으로 들어가봅시다!<i class="icon_right fas fa-quote-right fa-2x"></i><br><br>
        </p></div><br><br><hr>
        <br><br><br>

      <p class="pic_2">
        <a href="https://esahubble.org/images/solar_system_b/">
        <img src="https://cdn.spacetelescope.org/archives/images/thumb700x/solar_system_b.jpg" alt="사진 없음"></a><br>
        <font size="2em" color="gray" class="font1">The International Astronomical  </font><br>
        <font size="2em" color="gray" class="font1">Union/Martin Kornmesser </font>
      </p>
      <div class="box_2">
        <p class="pic_1"><i class="icon_left fas fa-quote-left fa-2x"></i><br><br>
          지구 바깥에는 '우주'라는 공간이 존재하며, <br>그 곳에는 다양한 가족들이 있습니다.<br>
          별, 행성, 위성, 소행성, 성운, 성단 등등..<br>
          '우주'란 무엇일까요?<br>
          우주는 <mark>'물질과 시공간을 일정한 힘으로 담고있는 공간'</mark>을 의미합니다.<br>
          이 우주의 신비 속으로 들어가봅시다!<i class="icon_right fas fa-quote-right fa-2x"></i><br><br>
        </p></div><br><br><br><hr>
        <br><br><br>

      <p class="pic_1">
        <a href="https://esahubble.org/images/heic1904a/">
        <img src="https://cdn.spacetelescope.org/archives/images/thumb700x/heic1904a.jpg" alt="사진 없음"></a><br>
        <font size="2em" color="gray" class="font1">ESA/Hubble, NASA, L. Calçada </font>
      </p>
      <div class="box_1">
        <p class="pic_1"><i class="icon_left fas fa-quote-left fa-2x"></i><br><br>
          지구 바깥에는 '우주'라는 공간이 존재하며, <br>그 곳에는 다양한 가족들이 있습니다.<br>
          별, 행성, 위성, 소행성, 성운, 성단 등등..<br>
          '우주'란 무엇일까요?<br>
          우주는 <mark>'물질과 시공간을 일정한 힘으로 담고있는 공간'</mark>을 의미합니다.<br>
          이 우주의 신비 속으로 들어가봅시다!<i class="icon_right fas fa-quote-right fa-2x"></i><br><br>
        </p></div><br><br>
        <br><br><br>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
div {
  vertical-align: middle;
  /* margin-left: 5%; */
  /* margin-right: 5%; */
}
 hr {
   width: 600px;
   color: lightgray;
   border: solid 1px;
 }
 h2 {
   text-align: center;
 }
 .star {
   color: aqua;
 }
 .first {
   display: inline;
   margin-left: 28%;
   color: gray;
 }
.pic_1 {  
  width: 400px;
  display: inline-block;
  vertical-align: middle;
  margin-left: 50px;
}
.pic_2 {  
  width: 400px;
  display: inline-block;
  vertical-align: top;
  margin-left: 50px;
}
img {
  /* display: inline; */
  margin-left: 100px;
  width: 300px;
  object-fit: contain; /*가로세로 비율을 유지한 채로 사이즈가 조절*/
}
/* -------------- img 관련 태그들 */
.font1 {
  margin-left: 100px;
}
.font2 {
  display: inline-block;
  margin-left: 46%;
}
.icon_left {
  float: left;
  color: rosybrown;
  margin-right: 5%;
}
.icon_right {
  float: right;
  color: rosybrown;
  margin-right: 5%;
}
.box_1, .box_2 {
  margin-left: 10%;
  width: 450px;
  border: solid;
  border-color: rosybrown;
  border-width: 5px;
  box-shadow: 5px 5px 5px gray;
  display: inline-block;
}
/*
.arrow_box {
  display: inline-block;
	position: relative;
	background: white;
	border: 4px solid aliceblue;
  margin-left: 100px;
  margin-top: 30px;
  box-shadow: 5px 5px 5px lightgray;
}
.arrow_box:after, .arrow_box:before {
	right: 100%;
	top: 50%;
	border: solid transparent;
	content: "";
	height: 0;
	width: 0;
	position: absolute;
	pointer-events: none;
}

.arrow_box:after {
	border-color: rgba(213, 213, 213, 0);
	border-right-color: white;
	border-width: 25px;
	margin-top: -25px;
}
.arrow_box:before {
	border-color: rgba(194, 199, 245, 0);
	border-right-color: aliceblue;
	border-width: 30px;
	margin-top: -30px;
}*/
/* 말풍선 css*/


</style>