<template>
  <main class="main_page">
    <MovieBanner />
    <MovieBox 
      v-for="(movie, index) in movies" 
      :key="index" 
      :location="movie.location" 
      :title="movie.title"
      :rating="movie.rating" 
      :percent="movie.percent" 
      :cats="movie.cats" 
      :img="movie.img" 
    />
  </main>
</template>
<script lang="ts" setup>
import MovieBox from '../components/MovieBox.vue'
import MovieBanner from '../components/MovieBanner.vue'
import { useStore } from '@/stores'

const store = useStore()
const movies = store.movies

</script>
<style scoped>
.main_page {
  display: flex;
  column-gap: 64px;
  width: 1200px;
  flex-wrap: wrap;
}

.app_btn {
  width: 300px;
  height: 72px;
  font-size: 32px;
  background-color: rgb(5, 5, 94);
  color: white;
  margin-bottom: 32px;
  margin-top: 12px;
  border-radius: 8px;
  cursor: pointer;
}
</style>
