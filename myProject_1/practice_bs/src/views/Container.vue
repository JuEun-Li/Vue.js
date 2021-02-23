<template>
  <div class="container">
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