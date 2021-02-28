<template>
  <div>
      <div class="aaa col-lg-12 bg-warning">
        <h1>Footer</h1>
      </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
  @media (max-width: 767px) {
  /* 스마트폰 사이즈 */
    .aaa {
      height: 100px;
    }
  }
  @media (min-width: 768px) {
    .aaa {
      height: 150px;
    }
  }
  @media (min-width: 992px) {
    .aaa {
      height: 200px;
    }
  }
</style>