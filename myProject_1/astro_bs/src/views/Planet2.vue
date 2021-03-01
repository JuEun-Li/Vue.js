<template>
  <div class="container-fluid">
    <div class="main">
      <transition-group name="fade" tag="div" mode="in-out">
        <div v-for="i in [currentIndex]" :key="i">
          <!-- {{ slide }} -->
          <img :src="i.Imgurl" />
          <!-- <img src="https://cdn.spacetelescope.org/archives/images/thumb700x/heic1904a.jpg"> -->
          <!-- <img src="https://ncc-phinf.pstatic.net/ncc01/2011/2/16/233/3.jpg?type=w323"> -->
          <div class="slide"></div>
        </div>
      </transition-group>
      <a class="prev" @click="prev">❮</a>
      <a class="next" @click="next">❯</a>
    </div>
  </div>
</template>

<script>
// import carousel from 'vue-owl-carousel'
export default {
  // data() {
  //       return {
  //           slide: ['1.jpg', '2.jpg', '3.jpg']
  //       }
  //   },
  //   components: { carousel }
  data() {
    return {
      // 슬라이더 이미지 배열
      slide: [
        { Imgurl: ('https://cdn.spacetelescope.org/archives/images/thumb700x/heic1904a.jpg')},
       { Imgurl: ('https://ncc-phinf.pstatic.net/ncc01/2011/2/16/233/3.jpg?type=w323')}, 
      { Imgurl: ('https://cdn.spacetelescope.org/archives/images/thumb700x/opo0842a.jpg')}
      ],
      // 타이머
      timer: null,
      // 현재 활성화된 인덱스
      currentIndex: 0,
    };
  },
  // 마운트시 실행 함수
  mounted() {
    this.startSlide();
  },
  methods: {
    // 슬라이드 시작
    startSlide: function () {
      this.timer = setInterval(this.next, 4000);
    },
    // 다음 슬라이드
    next: function () {
      this.currentIndex += 1;
    },
    // 이전 슬라이드
    prev: function () {
      this.currentIndex -= 1;
    },
  },
  computed: {
    // 활성화된 이미지 주소
    currentImg: function () {
      return this.slide[Math.abs(this.currentIndex) % this.slide.length];
    },
  },
};
</script>

<style scope>


  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.5s ease;
    opacity: 1;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  .fade-leave-to {
    display: none;
  }
  .slide {
    margin-left: 20%;
    /* margin-right: 20%; */
    max-width: 60%;
    height: 300px;
    text-align: center;
  }
  .prev,
  .next {
    cursor: pointer;
    position: absolute;
    top: 30%; /*화살표 높이*/
    margin-left: 20%;
    margin-right: 20%;
    width: 30px;
    /* margin-top : -25px; */
    padding: 0 10px;
    color: white;
    line-height: 30px;
    font-weight: bold;
    font-size: 18px;
    transition: 0.7s ease;
    border-radius: 0 4px 4px 0;
    text-decoration: none;
    user-select: none;
  }
  .next {
    right: 0;
  }
  .prev {
    left: 0;
  }
  .prev:hover,
  .next:hover {
    background-color: rgba(0, 0, 0, 0.9);
  }
  .main {
    /* margin-top: 5%; */
    overflow: hidden;
    position: relative;
    max-width: 100%;
    height: 600px;
    text-align: center;
  }
</style>