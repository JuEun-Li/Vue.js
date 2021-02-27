<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-offset-4 col-md-2 col-lg-8 bg-warning">
        aaa
        <!-- 4칸 밀린후 콘텐츠를 2만큼 뿌림-->
      </div>
    </div>
<!-- ----------------------------------------------- -->
    <div class="row">
      <div class="col-md-10 bg-danger col-sm-6">
        <div class="row">
          <div class="col-lg-12 bg-warning">
            <h1>title</h1>
            <p>aaa</p>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 bg-danger col-md-6">
            <h1>TItle</h1>
            <p>ccc</p>
          </div>
          <div class="col-lg-4 bg-danger col-md-6">
            <h1>TItle</h1>
            <p>ccc</p>
          </div>
          <div class="col-lg-4 bg-danger col-md-12">
            <h1>TItle</h1>
            <p>ccc</p>
          </div>
        </div>
      </div>
     
      <div class="aaa col-md-2 bg-info col-sm-6">
        <h1>Title</h1>
        <p>bbb</p>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-10 col-md-6 bg-success">
        <h1>title</h1>
          <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-6">
              <h1>title1</h1>
            </div>
             <div class="col-lg-4 col-md-4 col-sm-6">
              <h1>title2</h1>
            </div>
             <div class="col-lg-4 col-md-4 col-sm-6">
              <h1>title3</h1>
            </div>
          </div>
      </div>
      <div class="col-lg-2">aaa</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scope>
div {
  border: 1px solid gray;
}
@media (min-width: 768px) {
  .aaa {
    height: 300px;
  }
}
</style>