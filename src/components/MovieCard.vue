<script setup lang="ts">
defineProps({
  movie: Object as () => any,
});
</script>

<template>
  <li>
    <div :style="{ backgroundImage: `url(${movie.Poster})` }"></div>
    <h1>{{ movie.Title }}</h1>
  </li>
</template>

<style scoped lang="scss">
li {
    width: 17%;
    height: 260px;
    div {
      width: 100%;
      height: 220px;
      background-size : 100%;
      background-repeat : no-repeat;
      background-position : center;
      margin-bottom: 10px;
      transition: all 0.3s;
    }
    &:hover{ div{ background-size : 110%; }}
  }
</style>