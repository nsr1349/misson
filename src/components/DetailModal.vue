<script setup lang="ts">
// import { ref , watch } from "vue"
defineProps({
  movieDetail : Object as () => any,
});
</script>

<template>
  <div class="hide" :class="{'open' : movieDetail}">
    <div class="detail-modal" @click="$emit('closeModal')" v-if="movieDetail">
      <div class="white-bg">
        <div class="detail-img" :style="{ backgroundImage: `url(${movieDetail.Poster})` }">
          <div class="detail-img-gradiant">
            <h1>{{ movieDetail.Title }}</h1>
            <h6>{{ movieDetail.Released }}</h6>
            <h6>{{ movieDetail.Runtime }}</h6>
          </div>
        </div>
        <ul class="detail-Genres" >
          <li v-for="Genre in movieDetail.Genre.split(',')" :key="Genre" >{{ Genre }}</li>
        </ul>
        <ul class="detail-Ratings" >
          <li v-for="Rating in movieDetail.Ratings" :key="Rating">
            <h6>{{ Rating.Source }}</h6>
            <h1>{{ Rating.Value }}</h1>
          </li>
        </ul>
        <div class="black-area">
          <h6>plot</h6>
          <p>{{ movieDetail.Plot }}</p>
          <ul class="detail-about">
            <li>Production : {{ movieDetail.Production }}</li>
            <li>Director : {{ movieDetail.Director }}</li>
            <li>Writer : {{ movieDetail.Writer }}</li>
            <li>Actors : {{ movieDetail.Actors }}</li>
          </ul>
          <hr>
        </div>
      </div>
    </div>
  </div>
  
</template>


<style scoped lang="scss">

.detail-modal{
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.5);
  position: absolute;
  color: var(--main-color);

  .white-bg {
    width: 460px; 
    max-height: 800px;
    background: var(--main2-color);
    margin: 70px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: scroll;
    transition: all .3s;
    .detail-img{
      width: 280px;
      min-height: 400px;
      height: 400px;
      border-bottom-left-radius: 140px;
      border-bottom-right-radius: 140px;
      background-size : 100%;
      background-repeat : no-repeat;
      background-position : center;
      overflow: hidden;
      color: var(--main2-color);
      background: rgb(2,0,36);
      .detail-img-gradiant{
        position: relative;
        width: 100%;
        height: 100%;
        background: rgb(2,0,36);
        background: linear-gradient(180deg, rgba(2,0,36,0) 0%, rgba(33,33,116,0) 20%, rgba(0,0,0,1) 100%);
        h1 {
          padding: 0 10px;
          font-size: 25px;
          font-weight: 500;
          position: absolute;
          left: 0;
          right: 0;
          bottom: 95px;
        }
        h6 {
          color:  var(--gray-color);
          font-size: 12px;
          font-weight: 500;
          position: absolute;
          left: 0;
          right: 0;
        }
        h6:nth-child(2) {
          bottom: 65px;
        }
        h6:nth-child(3) {
          bottom: 45px;
        }
      }
    }
    .detail-Genres{
      display: flex;
      gap: 10px;
      margin: 30px 0;
      li {
        font-size: 14px;
        font-weight: 600;
        background-color: var(--gray-color);
        padding: 7px 14px;
        border-radius: 5px;
      }
      li:last-child{
        background-color: var(--main-color);
        color: var(--sub-color);
      }
    }
    .detail-Ratings{
      display: flex;
      gap: 40px;
      margin-bottom: 50px;
      li {
        width: 100px;
        position: relative;
        h6 {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 60px;
          font-size: 16px;
          margin-bottom: 20px;
        }
        h1{
          font-size: 24px;
          font-weight: 600;
        }
        &::after{
          content: '';
          height: 70%;
          width: .1px;
          position: absolute;
          background-color: var(--gray-color);
          right: -20px;
          bottom: 0px;
        }
      }
      li:last-child{
        &::after{
          content: none;
        }
      }
    }
    .black-area{
      background-color: var(--main-color);
      color: var(--main2-color);
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      h6{
        color: var(--gray-color);
        font-size: 20px;
        margin: 40px 0 20px;
      }
      p{
        width: 370px;
      }
      .detail-about{
        font-size: 14px;
        color: var(--gray-color);
        margin: 50px 0 5px;
        width: 90%;
        text-align: start;
      }
      hr{
        width: 90%;
        height: 1px;
        color: red;
        background-color: var(--gray-color);
        border: none;
      }
    }
  }
  .detail-anime{
    width: 460px; 
    height: 800px;
  }
  .white-bg::-webkit-scrollbar {
    width: 0px; /* 스크롤바의 너비 */
    height: 0px;
  }

}
</style>