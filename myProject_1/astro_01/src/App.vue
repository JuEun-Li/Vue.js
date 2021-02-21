<template>
  <div id="app">
    <tool-bar></tool-bar>
    <back-ground></back-ground>
    <router-view></router-view>
    <astro-footer></astro-footer>   
  </div>
</template>

<script>
import BackGround from './components/BackGround.vue';
import ToolBar from './components/ToolBar.vue';
import AstroFooter from './components/AstroFooter.vue';
export default {
  components: {
    AstroFooter,
    ToolBar,
    BackGround
  }
}
</script>

<style type="text/css">
  .top {
  width: 4.5%;
  height: 6.5%;
  padding-top: 1%;
  background-color: lightgray;
  color:gray;
  box-shadow: 2px 2px 2px lightgray;
  text-align: center;
  display: scroll;
  position: fixed;
  bottom: 5%;
  right: 5%;
  text-decoration: none;
  opacity:0.7;
}
 h1 {
   text-align: center;
   font-size: 2.5em;
 }
 .star {
   color: skyblue;
   padding-right: 15px;
 }
  .first {
   display: inline-block;
   width:100%;
   text-align: center;
   color: gray;
   padding-right: 15px;
   font-size: 1.5em;
 } /* 페이지 중앙 설명 문구 */
 .font2 {
  display: inline-block;
  width:100%;
  text-align: center;
  color: navy;
  font-size: 1.3em;
  padding-bottom: 1%;
  padding-top: 1%;
} /* 현재 위치를 알려주는 문장*/
 hr {
   width: 50%;
   color: lightgray;
   border: solid 1px;
 }
 .line {
  width: 10%;
  height: 7px;
  background: rgb(125, 157, 168);
  margin: 1% 1% 2% 1%;
  margin-left: auto; margin-right: auto;
}
</style>