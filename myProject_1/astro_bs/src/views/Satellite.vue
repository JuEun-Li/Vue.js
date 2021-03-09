<template>
  <div>
    <div class="container-fluid">
      <a class="top" href="#" title="맨 위로"> <i class="fas fa-arrow-up fa-2x"></i><br></a>
      <div class="row back-g bg-info">
        <!-- back-g 너비 관련 서식은 home에 있음 -->
        <div class="title col-lg-4 col-sm-offset-2 col-sm-4">
          <img class="box-img2" src="../views/images/jupiter.png">
          <span><strong>목성의 위성</strong></span>
        </div>
      </div>
      <br>
      <br>

      <div class="row">
        <h1><strong>목성의 위성</strong></h1>
        <div class="line"></div>
        <!-- <span class="font2">행성 이야기 > 목성의 위성</span><br><br> -->
        <span class="font2">
          <router-link to="/home">
            <i class="fas fa-home fa-lg"></i>
          </router-link>
        </span>
        <hr> 
        <span class="first">
            <i class="star fas fa-star-and-crescent fa-2x"></i>
              70개가 넘는 목성의 위성 중 아래 본문에 있는 가장 큰 4개는 갈릴레이 4대 위성입니다.
        </span><br><br><br><br>
      </div>
    </div>
      <a class="top" href="#" title="맨 위로"> <i class="fas fa-arrow-up fa-2x"></i><br></a>
      <!-- ------------- -->
      
    <div class="container">
      <div class="table_c">
      <div class="round_table col-xs-12 col-sm-3 col-md-3">
          <p class="pic_3">
          <a href="https://terms.naver.com/entry.nhn?docId=3567177&cid=58945&categoryId=58974">
          <img class="satellite_img" src="https://ncc-phinf.pstatic.net/webtop01/2009/4/22/226/3.jpg?type=w323" alt="사진 없음"></a></p><br>
          <h3 class="p2_h3">이오</h3>
          <button type="button" @click="showDialog1 = true" class="btn_shape">상세 정보</button>
      </div>
    

      <span class="round_table col-xs-12 col-sm-3">
          <p class="pic_3">
          <a href="https://esahubble.org/images/opo1633a/">
          <img class="satellite_img" src="https://cdn.spacetelescope.org/archives/images/thumb700x/opo1633a.jpg" alt="사진 없음"></a></p><br>
          <h3  class="p2_h3">유로파</h3>
          <button type="button" @click="showDialog2 = true" class="btn_shape">상세 정보</button>
      </span>

      <span class="round_table col-xs-12 col-sm-3">
          <p class="pic_3">
          <a href="https://terms.naver.com/entry.nhn?docId=3567177&cid=58945&categoryId=58974">
          <img class="satellite_img" src="https://ncc-phinf.pstatic.net/webtop01/2009/4/22/51/2.jpg?type=w323" alt="사진 없음"></a></p><br>
          <h3 class="p2_h3">가니메데</h3>
          <button type="button" @click="showDialog3 = true" class="btn_shape">상세 정보</button>
      </span>

      <span class="round_table col-xs-12 col-sm-3">
          <p class="pic_3">
          <a href="https://nssdc.gsfc.nasa.gov/image/planetary/jupiter/callisto.jpg">
          <img class="satellite_img" src="https://nssdc.gsfc.nasa.gov/image/planetary/jupiter/callisto.jpg" alt="사진 없음"></a></p><br>
          <h3 class="p2_h3">칼리스토</h3>
          <button type="button" @click="showDialog4 = true" class="btn_shape">상세 정보</button>
      </span><br><br>

      <div class="last_box"></div></div>
        <br><br><br><br>

        <UploadDialog1 v-if="showDialog1" @cancel="showDialog1=false" />
        <UploadDialog2 v-if="showDialog2" @cancel="showDialog2=false" />
        <UploadDialog3 v-if="showDialog3" @cancel="showDialog3=false" />
        <UploadDialog4 v-if="showDialog4" @cancel="showDialog4=false" />
      </div>
  </div>
</template>

<script>
import UploadDialog1 from './SatelliteInfo/UploadDialog1.vue'
import UploadDialog2 from './SatelliteInfo/UploadDialog2.vue'
import UploadDialog3 from './SatelliteInfo/UploadDialog3.vue'
import UploadDialog4 from './SatelliteInfo/UploadDialog4.vue'

export default {
  data() {
      return {
          showDialog1: false,
          showDialog2: false,
          showDialog3: false,
          showDialog4: false
      }
  },
  
  components: { UploadDialog1, UploadDialog2,  UploadDialog3,  UploadDialog4}
}
</script>

<style scope>
.round_table {
  display: inline-block;
  text-align: center;
  margin: 0 0 3% 0;
  padding: 3% 0 3% 0;
  font-size: 15px;
  box-shadow: 3px 3px 5px lightgray;
} /* 15 * 4 = 60, 1 * 8 = 8, 0.5 * 8 = 4 이므로 남는 공간 28%*/

.satellite_img, .pic_3 {
  display: inline-block;
  margin: auto;
  height: 150px;
  /* width: 200px; */
  width: 95%;
  object-fit: contain; 
  /*가로세로 비율을 유지한 채로 사이즈가 조절*/
}
/*------------------------------- button 서식 */
.btn_shape {
  border: 1.5px solid lightblue;
  box-shadow: 2px 2px 2px lightgray;
  color:white;
  background-color: lightblue;
  padding: 7px;
  margin-top: 10%;
  border-radius: 8px;
  outline: 0; /* 클릭시 테두리 삭제 */
}
.btn_shape:hover {
  background-color: rgba(0,0,0,0);
  color: skyblue;
  cursor: pointer;
}
.last_box {
  display: inline-block;
  width: 30%;
  height: 3px;
  background: lightblue;
  margin-left: 35%;
  margin-top: 5%;
}
@media (max-width: 767px) {
  .round_table {
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
  }
}
</style>