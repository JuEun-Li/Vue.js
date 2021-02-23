<template>
<div>
    <div class="wrapper">
        <div class="top">
            <h1>반응형 웹</h1>
            <nav>
                <ul>
                    <li>menu</li>
                    <li>menu</li>
                    <li>menu</li>
                    <li>menu</li>
                    <li>menu</li>
                </ul>
            </nav>
        </div>
        <span>
            aaaaaaaaaaaaaaaaaaaa
        </span>
        <footer>
            bbbbbbbbbbb
        </footer>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .wrapper {
      border: 1px solid gray;
      width: 80%;
      margin: 0 auto;
      font-size: 1.5vw;
      /* 모니터 크기에 따라 글씨 크기 */
  }
  nav li {
    list-style: none;
    float: left;
      /* 네비바 li 요소 가로 배치 */
    border: 1px solid gray;
    width: 20%;
    box-sizing: border-box;
    /* box 사이즈는 border값 까지만 하겠다.(li속성들이 바깥으로 나가지 않음) */
    text-align: center;
  }
  nav ul {
      overflow: hidden;
  }
  h1 {
    text-align: center;
  }
  .top {
    padding: 20px 0 0 0;
    border: 1px solid gray;
  }
  footer {
      border: 1px solid gray;
      height: 100px;
      line-height: 100px;
       /* line 간격을 띄운다.  */
  }
  @media (max-width: 767px) {
      /* 스마트폰 사이즈 */
      body {
          background-color: bisque;
      }
      .wrapper {
          width: 100%;
          font-size: 2em;
      }
      nav li {
          width: 100%;
      }
  }
  @media (min-width: 768px) {
      body {
          background-color: bisque;
      }
      .wrapper {
          width: 100%;
      }
  }
  @media (min-width: 992px) {
      /* 모니터의 사이즈가 최소한 992일 때 */
      body {
          background-color: azure;
      }
      .wrapper {
          width: 80%;
      }
  }
  
  /* media태그 주의: px값이 덮지 않아야한다. 순서 주의. */
</style>