<template>
  <div>
    <span></span>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
 div {
   position: relative;
    top: 0;
    padding: 0;
    margin: 0;
    width: 100%;
    height: 250px;
   background-color: aliceblue;
   background-image:url('https://cdn.spacetelescope.org/archives/images/thumb700x/heic0709b.jpg');
   /*Credit: NASA, ESA, Marc Postman (STScI), and the CLASH team. */
 }

 span {
   position:absolute;
  margin-top: 16%;
  width: 100%;
  background: black;
  height: 52px;
  display: block;
  /* flex-direction: row; */
  /* list-style-type: none; */
  opacity: 0.8; /*흐리게 조절*/
 }
</style>