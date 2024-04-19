<template>
    <main class="container">
        <MovieBox
            v-for="(movie, index) in movies"
            :key="index" 
            :location="movie.location"
            :title="movie.title"
            :rating="movie.rating"
            :cats="movie.cats"
            :img="movie.img"
            :percent="movie.percent"
        />
    </main>
    <div class="mf_container">
        <div class="movie_form">
            <h3 class="movie_form__title">Upload New Movie</h3>
            <input v-model="movieForm.title" class="input" placeholder="Title" />
            <input v-model="movieForm.location" class="input" placeholder="Location" />
            <input v-model="movieForm.rating" class="input" placeholder="Rating" />
            <input v-model="movieForm.percent" class="input" placeholder="Percentage" type="number" />
            <input v-model="movieForm.cats" class="input" placeholder="Categories" />
            <input @change="onFileChange" class="input" placeholder="Image" type="file" />
            <button @click="uploadMovie" class="form_btn">Upload Movie</button>
        </div>
    </div>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue';

import MovieBox from '@/components/MovieBox.vue';

const movie1 = {
  location: 'USA, 2016 - Current',
  title: 'Stranger Things',
  rating: '86.0 / 100',
  percent: 97,
  cats: 'Action, Adventure, Horror',
  img: '/images/poster1.png'
}

const emptyMovie = {
    location: '',
    title: '',
    rating: '',
    percent: 0,
    cats: '',
    img: ''
}

let movieForm = reactive(emptyMovie)
const movies = ref([movie1])

const uploadMovie = () => {
    console.log(movieForm)
    movies.value.push(movieForm)
    movieForm = reactive(emptyMovie)
}

const onFileChange = (e: Event) => {
    const t = e.target as HTMLInputElement
    const files = t.files

    if(files !== null){
        const f = files[0]
        movieForm.img = URL.createObjectURL(f)
    }
}
</script>
<style scoped>
.container {
    display: flex;
    column-gap: 32px;
    width: 1200px;
    flex-wrap: wrap;
}

.mf_container {
    width: 100%;
}

.movie_form {
    width: 400px;
    margin-top: 64px;
    margin-left: auto;
    margin-right: auto;
}

.movie_form__title {
    font-weight: bold;
    font-size: 32px;
}

.input {
    width: 100%;
    height: 40px;
    padding: 12px;
    margin-bottom: 16px; 
}

.form_btn {
    height: 40px;
    width: 150px;
    border: none;
    outline: none;
    background-color: rgb(6, 61, 43);
    color: white;
    border-radius: 8px;
    cursor: pointer;
    float: right;
}
</style>