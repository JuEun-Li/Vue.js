<template>
  <div id="app">
    <AstroHeader></AstroHeader>
    <AstroBackground></AstroBackground>
    <AstroMain></AstroMain>
    <AstroFooter></AstroFooter>

    <!-- 라우터 화면 출력 -->
    <router-view></router-view>
   </div>
</template>

<script>
 import AstroHeader from './components/AstroHeader.vue'
 import AstroBackground from './components/AstroBackground.vue'
 import AstroMain from './components/AstroMain.vue'
 import AstroFooter from './components/AstroFooter.vue'
  
export default {
  components: {
    'AstroHeader': AstroHeader,
    'AstroBackground': AstroBackground,
    'AstroMain': AstroMain,
    'AstroFooter': AstroFooter
  }
}
</script>

<style type="text/css">
  
</style>
