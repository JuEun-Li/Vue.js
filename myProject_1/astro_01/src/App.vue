<template>
  <div id="app">
    <tool-bar></tool-bar>
    <back-ground></back-ground>
    <router-view></router-view>
    <astro-footer></astro-footer>
    <spinner :loading="LoadingStatus"></spinner>   
  </div>
</template>

<script>
import BackGround from './components/BackGround.vue';
import ToolBar from './components/ToolBar.vue';
import AstroFooter from './components/AstroFooter.vue';
import Spinner from './components/Spinner.vue';
import bus from './routes/bus.js';

export default {
  components: {
    AstroFooter,
    ToolBar,
    BackGround,
    Spinner,
  },
  data(){
    return {
      LoadingStatus : false
    };
  },
  methods:{
    startSpinner(){
      this.LoadingStatus = true;
    },
    endSpinner(){
      this.LoadingStatus = false;
    }
  },
  created(){
    bus.$on('start:spinner', this.startSpinner);
    bus.$on('end:spinner', this.endSpinner);
  },
  beforeDestroy(){
    bus.$off('start:spinner');
    bus.$off('end:spinner');
  },
}
</script>

<style type="text/css">
  
</style>