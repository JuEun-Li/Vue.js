<template>
  <div id="app">
    <tool-bar></tool-bar>
    <back-ground></back-ground>
    <router-view></router-view>
    <footer></footer>
  </div>
</template>

<script>
import BackGround from './components/BackGround.vue';
import ToolBar from './components/ToolBar.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    ToolBar,
    BackGround,
    Footer
  }
}
</script>

<style type="text/css">
  
</style>