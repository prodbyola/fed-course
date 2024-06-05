<template>
    <div class="movie_box">
        <img :src="img" />
        <p class="movie_subtext movie_location">{{ location }}</p>
        <h3 class="movie_title">{{ title }}</h3>
        <MovieRating :rating="rating" :percent="percent" />
        <p class="movie_subtext movie_cat">{{ cats }}</p>
    </div>
</template>
<style scoped>
.movie_box {
    width: 250px;
}

.movie_location {
    margin-top: 6px;
    margin-bottom: 10px;
}

.movie_subtext {
    font-weight: bold;
    font-size: 12px;
    color: #9CA3AF;
}

.movie_title {
    font-weight: bold;
    font-size: 18px;
    color: #111827;
    margin-bottom: 8px;
}

.movie_meta__content p {
    font-size: 12px;
    color: #111827;
}

.movie_cat {
    margin-top: 8px;
}
</style>
<script lang="ts" setup>
import MovieRating from './MovieRating.vue'
defineProps<{
    location: string,
    title: string,
    rating: string,
    percent: number,
    cats: string,
    img: string
}>()
</script>