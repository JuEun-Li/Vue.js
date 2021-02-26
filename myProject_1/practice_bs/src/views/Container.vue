<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-6">col-sm-6</div>
      <div class="col-sm-6">col-sm-6</div>
      <!-- 스마트폰 화면에서 12로 바뀜 -->
    </div>
    <div class="row">
      <div class="col-xs-8">col-xs-8</div>
      <div class="col-xs-4">col-xs-4</div>
      <!-- 스마트폰 화면에서도 언제나 8 : 4 비율 유지 -->
    </div>

    <img src="https://via.placeholder.com/150x200/FF0000/FFFFFF?Text=Down.com

    C/O https://placeholder.com/" class="img-rounded">
    <!-- class = img-rounded는 사진을 둥글게 -->

    <img src="https://via.placeholder.com/100/FF0000/FFFFFF?Text=Down.com

    C/O https://placeholder.com/" class="img-thumbnail">

    <p class="text-muted">color test</p> <!-- 얘는 bg 속성 미적용-->
    <p class="bg-primary">color test</p>
    <p class="text-info">color test</p>
    <p class="text-warning">color test</p>
    <p class="text-danger">color test</p>
    <p class="bg-success">color test</p>
    <!-- 색깔 클래스 -->
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  div {
    border: 1px solid gray;
  }
</style>