<template>
  <div :style="{ backgroundColor: color }"> <!--backgroundColor는 객체로 해석됨. javascript 속성명에 - 문자를 사용할 수 없기 때문에 형태가 조금 다르다.-->
    <h2>
      {{ title }} -
      <small>{{ description }}</small>
    </h2>
    <input type="number" v-model="counter" />
    <button type="button" @click="counter++">++</button>
    <button type="button" @click="counter--">--</button>
    <button type="button" @click="$emit('send', counter)">전달</button><!-- 자식 -> 부모 이벤트를 전달. 이 이벤트의 이름은 'send' 이고, 이벤트 파라미터 값으로 counter-->
  </div>
</template>

<script>
export default {
  name: "Counter1",
  props: {
    title: { type: String, required: true },
    description: { type: String, default: "안녕하세요" },
    color: { type: String, default: "#fff" }
  },
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
}
button {
  padding: 0.4em 1em;
  margin-right: 5px;
}
</style>

