<template>
  <main class="main_page">
    <MovieBanner />
    <MovieBox 
      v-for="(movie, index) in movies" 
      :key="index" 
      :location="movie.location" 
      :title="movie.location"
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

const movie1 = {
  location: 'USA, 2016 - Current',
  title: 'Stranger Things',
  rating: '86.0 / 100',
  percent: 97,
  cats: 'Action, Adventure, Horror',
  img: '/images/poster1.png'
}

const movie2 = {
  location: 'USA, 2005',
  title: 'Batman Begins',
  rating: '82.0 / 100',
  percent: 70,
  cats: 'Action, Adventure',
  img: '/images/poster2.png'
}

const movie3 = {
  location: 'USA, 2017',
  title: 'Dunkirk',
  rating: '78.0 / 100',
  percent: 94,
  cats: 'Action, Drama, History',
  img: '/images/poster3.png'
}

const movie4 = {
  location: 'USA, 2018',
  title: 'Spider-Man : Into The Spider Verse',
  rating: '84.0 / 100',
  percent: 87,
  cats: 'Animation, Action, Adventure',
  img: '/images/poster4.png'
}

const movies = [movie1, movie2, movie3, movie4]

const myFunc = (num1: number, num2: number) => {
  const add = num1 + num2

  console.log(add)
}

myFunc(25, 62)
myFunc(36, 24)
</script>
<style scoped>
.main_page {
  display: flex;
  column-gap: 64px;
  width: 1200px;
  flex-wrap: wrap;
}
</style>
