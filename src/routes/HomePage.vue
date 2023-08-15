<script setup lang="ts">
import { ref , reactive , watch } from "vue"
import { useRouter, useRoute  } from 'vue-router'
import { fetchMovies, fetchMovieDetial } from "../util/api";
import DetailModal from '../components/DetailModal.vue'
import SearchLog from '../components/SearchLog.vue'
import Loading from '../components/Loading.vue'
import { getItem , setItem } from '../util/storge'

const router = useRouter()
const route = useRoute()

const searchOption = reactive({ word : '', page : 1 })

const isLoading = ref(false) 
const isSearchMode = ref(false)
const movieList = ref(null) as any
const movieDetail = ref(null) as any
const searchLog = ref([])

// 검색해야할 옵션이 바뀔 때마다 재검색
let timer:any
watch( searchOption , ()=>{
  isSearchMode.value = !(searchOption.word === '')
  clearTimeout(timer)
  timer = setTimeout(()=> {
    if (route.query.q !== searchOption.word) searchOption.page = 1
    if (!searchOption.word){
      movieList.value = null 
      router.push(`/`) 
    } else { searchMovies() }
  },300)
},{ deep : true })

async function searchMovies(){ 
  if (searchOption.word){
    isLoading.value = true
      router.push(`/search?q=${ searchOption.word }&page=${ searchOption.page }`)
      movieList.value = await fetchMovies(searchOption.word, searchOption.page)
      if (movieList.value.Response === 'True') addSearchLog( searchOption.word )
    isLoading.value = false
  }
}
async function searchDetail(id:string){
  isLoading.value = true
  movieDetail.value = await fetchMovieDetial(id)
  isLoading.value = false
}
// 로컬에 검색기록 저장
function addSearchLog( word:string ){
  const log = getItem('searchLog',[])
  if (log.length > 5) log.shift()
  if (log.indexOf(word) === -1) log.unshift(word)
  setItem('searchLog',JSON.stringify(log))
  searchLog.value = log
}
async function pageMove(move:number){
  const pageResult =  searchOption.page + move
  const totalpage = Math.ceil(movieList.value.totalResults/10)
  if (0 < pageResult && pageResult <= totalpage ) searchOption.page += move
}

// 처음 url 이 메인이 아닐 수도 있으니까 초기 세팅
function firstSetting(){ 
  if (route.query.q){ 
    searchOption.word = route.query.q as string 
    searchOption.page = Number(route.query.page)
  }
  if (!getItem('searchLog',true)) searchLog.value = getItem('searchLog',[])
}
firstSetting()

</script>

<template>
  <!-- 모달들 -->
  <DetailModal :movieDetail="movieDetail"  @closeModal="movieDetail = null"/>
  <Loading v-if="isLoading"/>
  <!-- 로고 -->
  <div class="title" :class="{ isSearchMode }"><h1>M O V I E S</h1></div>
  <!-- 검색창 -->
  <div class="search-section">
    <input  class="search-bar" 
            v-model="searchOption.word" 
            placeholder="search...">
    <SearchLog :searchLog = searchLog 
                @search="searchOption.word = $event" />
  </div>
  <!-- 검색결과 -->
  <div class="">
    <router-view  :movieList = movieList 
                  @showMovieDetail="searchDetail($event)"
                  @pageMove="pageMove($event)"></router-view>
  </div>
</template>

<style scoped lang="scss">
.title{
  height: 380px;
  font-size: 35px;
  overflow: hidden;
  box-sizing: border-box;
  transition: all 1s;
  h1 { margin-top: 320px }
}
.search-section{
  padding-bottom: 70px;
}
.search-bar{
    width: 400px;
    height: 20px;
    margin: 30px 0 15px;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    outline: none;
}
.isSearchMode{
  height: 50px;
}
.hide{
  opacity: 0;
  transition: all .5s;
}
.open{ opacity: 1; }
</style>
