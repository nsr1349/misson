<script setup lang="ts">
defineProps({ searchLog: Array })
</script>

<template>
  <div class="search-log">
    <div v-for="log in searchLog" @click="$emit('search' , log);console.log(log)">{{log}}</div>
  </div>
</template>

<style scoped lang="scss">
.search-log{
  display: flex;
  width: 420px;
  margin: 0px auto;
  color: var(--sub-color);
  gap: 15px;
  div{
    max-width: 80px;
    height: 20px;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.3s;
    box-sizing: border-box;
    &:hover{
      color: var(--main2-color);
      border-bottom: 1px solid var(--main2-color);
    }
  }
}
</style>