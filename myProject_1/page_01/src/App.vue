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

</style>
