<template>
  <div>
    <h2>
      {{ title }} -
      <small>{{ description }}</small>
    </h2>
    <input type="number" v-model="counter" />
    <button type="button" @click="counter++">++</button> <!--@click은 v-on:click과 같다-->
    <button type="button" @click="counter--">--</button>
  </div>
</template>

<script>
export default {
  name: "Counter1", // 컴포넌트 이름(파일명이 달라도 괜찮다)
  props: ["title", "description"], // 파라미터와 비슷하다.
  data: function() {
    return { counter: 0 };
  }
};
</script>

<style scoped>
div {
  border: 1px solid gray;
  padding: 0 20px 20px 20px;
  margin-top: 10px;
}
input {
  padding: 5px;
  margin-right: 5px; 
} /* <template> 부분에서는, 태그와 태그 사이의 공백이나 줄바꿈 문자가 전부 제거된다. 따라서 마진값 지정 필수 */
button {
  padding: 0.4em 1em;
  margin-right: 5px;
}
</style>

