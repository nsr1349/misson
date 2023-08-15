<script setup lang="ts">

</script>

<template>
  <div class="loader-box">
    <div class="loader loader-black loader-3"></div>
  </div>
</template>

<style scoped lang="scss">
.loader-box{
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.loader {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 3em;
    display: inline-block;
    position: relative;
    vertical-align: middle;
}
.loader,
.loader:before,
.loader:after {
    animation: 1s infinite ease-in-out;
}
.loader:before,
.loader:after {
    width: 100%; 
    height: 100%;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
}
.loader-black { background-color: var(--gray-color); }
/* Loader 3 */
.loader-3:before {
    content: '';
    border: 10px solid var(--main2-color);
    top: -10px;
    left: -10px;
    animation-name: loader3;
}
@keyframes loader3 {
    0% { transform: scale(0); }
    100% { transform: scale(1); }
}
</style>