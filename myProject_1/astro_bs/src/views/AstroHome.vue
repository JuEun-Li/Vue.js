<template>
  <div class="container-fluid">
    <div class="row">
      <div class="img-bar col-lg-12">
        <hooper>
          <slide>
            <img class="main-img" src="https://cdn.spacetelescope.org/archives/images/thumb700x/solar_system_b.jpg">
            <!-- <font size="2em" color="gray" class="font1">NASA, ESA and the Hubble Heritage </font> -->
            <!-- <font size="2em" color="gray" class="font1"> (STScI/AURA)-ESA/Hubble Collaboration</font> -->
            </slide>  
          <slide>
            <img class="main-img" src="https://cdn.spacetelescope.org/archives/images/thumb700x/heic1904a.jpg">
          </slide>
          <slide>
            <img class="main-img" src="https://cdn.spacetelescope.org/archives/images/thumb700x/opo0842a.jpg" alt="사진 없음">
          </slide>

          <hooper-pagination slot="hooper-addons"></hooper-pagination>
          <hooper-navigation slot="hooper-addons"></hooper-navigation>
        </hooper>
      </div>
    </div>

    <div class="row">
      <div style="height: 50px;">
      </div>
    </div>

    <div class="row">
      <div class="col-lg-offset-3 col-lg-3 col-sm-offset-3 col-sm-3">
        <h4 style=" font-size: 1.2vw; text-a">이런 내용을 담고 있어요</h4>
        <div style="width: 100px; height: 5px;background-color: navy"></div><br>
      </div>
    </div>

    <div class="mid-box row">
      <div class="box-in col-sm-6 col-md-3 col-lg-3">
        <img class="box-img" src="https://www.flaticon.com/svg/vstatic/svg/788/788214.svg?token=exp=1614532792~hmac=d7cf7238a7b9a014111f0468d675cc46">
        <h3> 지구형 행성</h3>
        <!-- <span>우리 태양계 행성중 지구형 행성은<br>
        [ 수성, 금성, 지구, 화성 ] 입니다.</span> -->
      </div>
      <div class="box-in col-sm-6 col-md-3 col-lg-3">
        <img class="box-img" src="https://www.flaticon.com/svg/vstatic/svg/731/731202.svg?token=exp=1614532912~hmac=26b55c371cea895d622093b7a304e012">
        <h3> 가스형 행성</h3>
        <!-- <span>우리 태양계 행성중 가스형 행성은<br>
        [ 목성, 토성, 천왕성, 해왕성 ] 입니다.</span> -->
      </div>
      <div class="box-in col-sm-6 col-md-3 col-lg-3">
        <img class="box-img" src="https://www.flaticon.com/svg/vstatic/svg/944/944318.svg?token=exp=1614533107~hmac=5f87375ed8df2de751bc5015666f2581">
        <h3> 목성의 위성</h3>
        <!-- <span>목성의 위성은 70개가 넘습니다.<br>
        그 중 [ 이오, 유로파, 가니메데, 칼리스토 ]는 갈릴레이 4대 위성 입니다.</span> -->
      </div>
    </div>
  </div>
</template>

<script>
import {
  Hooper,
  Slide,
   Pagination as HooperPagination,
  Navigation as HooperNavigation,
  } from 'hooper';

export default {
  // $('.carousel').carousel()
 components: {
    Hooper,
    Slide,
    HooperNavigation,
    HooperPagination
  }
}
</script>

<style scope>
.main-img {
  width: 100%;
  height: 100%;
  /* display: inline-block; */
}
/* 캐러셀 이미지 */
.img-bar {
  background-color: #f1f1f1;
}/* 배경화면 바 */
.box-img {
  display: inline-block;
  padding-right: 1%;
  width: 30%;
  vertical-align: bottom;
}/* 박스 안 이미지 */
h3 {
  display: inline-block;
}

.mid-box {
 text-align: center;
 margin-bottom: 10%;
}
/* 하단 3개 박스 묶음 */
.box-in {
  margin:0.5%;
  height: 300px;
  border-radius: 7px;
  /* background-color: rgb(224, 222, 239); */
  background-color: rgb(235, 233, 250);
}
/* 하단 3개 박스 서식 */

@media (max-width: 767px) {
  /* 스마트폰 사이즈 */
  .back-g {
    height: 100px;
  }
  .img-bar {
    height: 250px;
  }
  .box-in {
    padding-top: 1%;
    height: 100px;
  }
  .box-img {
    width: 10%;
    vertical-align: middle;
  }
}
@media (min-width: 768px) {
  /* 태블릿 */
  .back-g {
    height: 150px;
  }
   .img-bar {
    height: 300px;
  }
  .box-in {
    margin-left: 25%;
    /* 태블릿에서 그리드 중앙정렬 */
    padding-top: 3%;
    height: 120px;
  }
  .box-img {
    width: 20%;
    padding-right: 2%;
  }
}
@media (min-width: 992px) {
  /* 컴퓨터 */
  .back-g {
    height: 200px;
  }
   .img-bar {
    height: 500px;
  }
  .mid-box {
    margin-left: 18.5%;
 /* 3 +  20 * 3 = 63 스마트폰, 태블릿 제외 가운데 정렬*/
  }
  .box-in {
  margin:0.5%;
  height: 200px;
  }
  .box-img {
    width: 35%;
    height: 120px;
    padding-top: 5%;
    padding-right: 2%;
  }
}

.hooper-next,
.hooper-prev {
  /* background-color: transparent; */
  color: white;
  border: none;
  padding: 1em;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}
.hooper-next.is-disabled,
.hooper-prev.is-disabled {
  opacity: 0.3;
  cursor: not-allowed;
}
.hooper-next {
  right: 0;
}
.hooper-prev {
  left: 0;
}
/* 앞, 뒤 버튼 */

.hooper-navigation.is-vertical .hooper-next {
  top: auto;
  bottom: 0;
  transform: initial;
}
.hooper-navigation.is-vertical .hooper-prev {
  top: 0;
  bottom: auto;
  right: 0;
  left: auto;
  transform: initial;
}
.hooper-navigation.is-rtl .hooper-prev {
  left: auto;
  right: 0;
}
.hooper-navigation.is-rtl .hooper-next {
  right: auto;
  left: 0;
}
/* 네비게이션 */
.hooper {
  align-items: center;
  position: relative;
  box-sizing: border-box;
  width: 70%;
  height: 100%;
   /* object-fit: contain;  */
  /*가로세로 비율을 유지한 채로 사이즈가 조절*/
  /* vertical-align: middle; */
  margin:auto;
}
.hooper * {
  box-sizing: border-box;
}
.hooper-list {
  overflow: hidden;
  width: 100%;
  height: 100%;
}
.hooper-track {
  display: flex;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
.hooper.is-vertical .hooper-track {
  flex-direction: column;
  height: 200px;
}

.hooper.is-rtl {
  direction: rtl;
}

.hooper-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

/* -------- */

.hooper-pagination {
  position: absolute;
  bottom: 0;
  right: 50%;
  transform: translateX(50%);
  display: flex;
  padding: 5px 10px;
}
.hooper-indicators {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}
.hooper-indicator:hover,
.hooper-indicator.is-active {
  background-color: #4285f4;
}
.hooper-indicator {
  margin: 0 2px;
  width: 12px;
  height: 4px;
  border-radius: 4px;
  border: none;
  padding: 0;
  background-color: #fff;
  cursor: pointer;
}
/* 하단 페이지 바 */
.hooper-pagination.is-vertical {
  bottom: auto;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
.hooper-pagination.is-vertical .hooper-indicators {
  flex-direction: column;
}
.hooper-pagination.is-vertical .hooper-indicator {
  width: 6px;
}
/* ------ */

.hooper-progress {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 4px;
  background-color: #efefef;
}
.hooper-progress-inner {
  height: 100%;
  background-color: #4285f4;
  transition: 300ms;
}
/* ------ */

.hooper-slide {
  flex-shrink: 0;
  height: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>