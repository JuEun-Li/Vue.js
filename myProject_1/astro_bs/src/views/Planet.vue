<template>
  <div>
    <div
      id="carousel-example-generic"
      class="carousel slide"
      data-ride="carousel"
    >
      <!-- Indicators -->
      <ol class="carousel-indicators">
        <li
          data-target="#carousel-example-generic"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
      </ol>

      <!-- Wrapper for slides -->
      <div class="carousel-inner" role="listbox">
        <div class="item active">
          <img
            src="https://cdn.spacetelescope.org/archives/images/thumb700x/heic1904a.jpg"
            alt="..."
          />
          <div class="carousel-caption">...</div>
        </div>
        <div class="item">
          <img
            src="https://ncc-phinf.pstatic.net/ncc01/2011/2/16/233/3.jpg?type=w323"
            alt="..."
          />
          <div class="carousel-caption">...</div>
        </div>
        ...
      </div>

      <!-- Controls -->
      <a
        class="left carousel-control"
        href="#carousel-example-generic"
        role="button"
        data-slide="prev"
      >
        <span
          class="glyphicon glyphicon-chevron-left"
          aria-hidden="true"
        ></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="right carousel-control"
        href="#carousel-example-generic"
        role="button"
        data-slide="next"
      >
        <span
          class="glyphicon glyphicon-chevron-right"
          aria-hidden="true"
        ></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  // $('.carousel').carousel()
  methods: {
    carousel: function () {
      this.timer = setInterval(this.next, 4000);
    },
  }
}
</script>

<style>
/* .example-slide {
  align-items: center;
  background-color: #666;
  color: #999;
  display: flex;
  font-size: 1.5rem;
  justify-content: center;
  min-height: 10rem;
} */
</style>