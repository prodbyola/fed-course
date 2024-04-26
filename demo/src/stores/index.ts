import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useStore = defineStore('appStore', () => {
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
  
  const movies = ref([movie1, movie2, movie3, movie4])

  return {
    movies
  }
})
