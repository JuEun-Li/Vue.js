<template>
  <div class="lds-facebook" v-if="loading">
      loading...               
  </div>
</template>

<script>
export default {
  props: {
    loading: {                                               
      type: Boolean,
      required: true,
    }
  }
}
</script>

<style>
.lds-facebook {
  display: inline-block;
  position: absolute;
  width: 64px;
  height: 64px;
  top: 47%;
  left: 47%;
}
</style>