<template>
    <div class="banner">
        <div class="banner_overlay"></div>
        <div class="banner_content">
            <div class="banner_meta">
                <h3 class="banner_title">John Wick 3 : Parabellum</h3>
                <MovieRating class="banner_rating" rating="88.0 / 100" :percent="97" />
                <p class="banner_desc">
                    John Wick is on the run after killing a member of the international assassins' guild, and with a $14
                    million price tag on his head, he is the target of hit men and women everywhere.
                </p>
                <AppButton class="banner_btn" label="WATCH MOVIE" />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import MovieRating from './MovieRating.vue';
import AppButton from './AppButton.vue';
</script>
<style scoped>
.banner {
    width: 1440px;
    height: 600px;
    background-image: url("/images/banner1.png");
    color: white;
    position: relative;
    margin-bottom: 34px;
}

.banner_overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: black;
    top: 0;
    left: 0;
    opacity: 0.5;
}

.banner_content {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 108px;
    top: 0;
    left: 0;
}

.banner_title {
    line-height: 56px;
    font-size: 48px;
    font-weight: bold;
    margin-bottom: 18px;
}

.banner_meta {
    width: 404px;
}

.banner_rating {
    margin-bottom: 18px;
}

.banner_desc {
    line-height: 18px;
    font-size: 14px;
    font-weight: 500;
    width: 302px;
}

.banner_btn {
    background-color: #BE123C;
    font-size: 14px;
    font-weight: bold;
    color: white;
    height: 36px;
    width: 169px;
    border-radius: 6px;
    margin-top: 12px;
}
</style>