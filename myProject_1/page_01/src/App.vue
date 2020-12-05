<template>
  <div id="app">
    <PageHeader></PageHeader>
    <PageMain></PageMain>
    <PageFooter></PageFooter>
  </div>
</template>

<script>
import PageHeader from './components/PageHeader.vue'
import PageMain from './components/PageMain.vue'
import PageFooter from './components/PageFooter.vue'

export default {
  components: {
    'PageHeader': PageHeader,
    'PageMain': PageMain,
    'PageFooter': PageFooter
  } // components 등록하기
}
</script>

<style>
  div#app {
    padding: 30px; margin: 30px auto; max-width: 400px;
      border: 1px solid #ccc; box-shadow: 3px 3px 3px #aaa;
      background-color: aliceblue; }

  div#app div { margin-bottom: 20px;}
  label { display: block;}
  input[type=text] { padding: 4px;}
</style>
