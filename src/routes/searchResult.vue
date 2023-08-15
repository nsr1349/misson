<script setup lang="ts">
import { useRoute  } from 'vue-router'
import MovieCard from '../components/MovieCard.vue'
import SearchResultFalse from '../components/SearchResultFalse.vue'

const route = useRoute()

defineProps({
  movieList : Object as () => any,
})
</script>

<template>
  <div v-if="movieList && movieList.Response === 'True'" >
    <ul class="movie-list">
      <MovieCard v-for="movie in movieList.Search" :key="movie.imdbID" 
                :movie = 'movie'
                @click="$emit('showMovieDetail' , movie.imdbID )"/>
    </ul>
    <div class="page-mover" >
      <i class="fa-solid fa-chevron-left" @click="$emit('pageMove',-1)"></i>
      <div> {{ route.query.page }} / {{ Math.ceil(movieList.totalResults/10) }} </div>
      <i class="fa-solid fa-chevron-right" @click="$emit('pageMove',+1)"></i>
    </div>
  </div>
  <SearchResultFalse v-else-if="movieList && movieList.Response === 'False'"/>
</template>

<style lang="scss">
.movie-list{
  margin: 0 auto;
  width: 900px;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.page-mover{
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  i{
    padding: 5px 8px;
    border-radius: 5px;
    transition: all 0.3s;
    &:hover{
      background-color: var(--gray-color);
      color: var(--main-color);
    }
  }
}

</style>