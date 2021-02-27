<template>
  <div id="app">
    <tool-bar></tool-bar>
    <router-view></router-view>
    <astro-footer></astro-footer>
  </div>
</template>

<script>
import AstroFooter from '../../astro_01/src/components/AstroFooter.vue'
import ToolBar from './components/ToolBar.vue'

export default {
  components: { ToolBar, AstroFooter },
}
</script>

<style>
  * {
    padding: 0;
    margin: 0;
  }
</style>