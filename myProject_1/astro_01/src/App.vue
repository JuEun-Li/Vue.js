<template>
  <div id="app">
    <tool-bar></tool-bar>
    <back-ground></back-ground>
    <router-view></router-view>
  </div>
</template>

<script>
import BackGround from './components/BackGround.vue';
import ToolBar from './components/ToolBar.vue';

export default {
  components: {
    ToolBar,
    BackGround
  }
}
</script>

<style type="text/css">
  
</style>