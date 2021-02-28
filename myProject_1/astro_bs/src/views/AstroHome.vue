<template>
  <div class="container-fluid">
    <div class="row back-g bg-info">
      <div class="title col-lg-offset-2 col-lg-3 col-sm-offset-2 col-sm-4">
        <span>Astronomy-Page</span>
      </div>
    </div>
    <!-- <div>
        <slide :data="slide" />
    </div> -->

    <div class="back-g col-lg-12">
    <hooper>
      <slide>
         <img src="https://cdn.spacetelescope.org/archives/images/thumb700x/heic0715a.jpg" alt="사진 없음">
        <!-- <font size="2em" color="gray" class="font1">NASA, ESA and the Hubble Heritage </font> -->
         <!-- <font size="2em" color="gray" class="font1"> (STScI/AURA)-ESA/Hubble Collaboration</font> -->
        </slide>  
      <slide>
        <img src="https://cdn.spacetelescope.org/archives/images/thumb700x/heic1904a.jpg">
      </slide>
      <slide>
        <img src="https://ncc-phinf.pstatic.net/ncc01/2011/2/16/233/3.jpg?type=w323">
      </slide>

    <hooper-pagination slot="hooper-addons"></hooper-pagination>
    <hooper-navigation slot="hooper-addons"></hooper-navigation>
  </hooper>
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

.back-g {
  color: white;
}
.title {
  padding-top: 1%;
  font-size: 3vw;
}
@media (max-width: 767px) {
  /* 스마트폰 사이즈 */
  .back-g {
    height: 150px;
  }
}
@media (min-width: 768px) {
  .back-g {
    height: 200px;
  }
}
@media (min-width: 992px) {
  .back-g {
    height: 250px;
  }

  img {
  width: 100%;
  /* display: inline-block; */
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
  width: 30%;
  height: 300px;
   object-fit: contain; 
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
}
</style>