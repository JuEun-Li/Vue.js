<template>
  <div id="app">
    <tool-bar></tool-bar>
    <router-view></router-view>
    <under-bar></under-bar>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue'
import UnderBar from './components/UnderBar.vue'

export default {
  components: { 
    ToolBar,
    UnderBar,
  }
}
</script>

<style>
  * {
    padding: 0;
    margin: 0;
  }
</style>