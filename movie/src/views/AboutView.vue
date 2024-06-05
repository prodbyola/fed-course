<template>
    <main>
        <input v-model="myText" placeholder="My Text" />
        <button @click="changeText">Click Me</button>
        <p class="my-text">{{ myText }}</p>
    </main>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

let myText = ref("Olamide")

const changeText = () => {
    myText.value = "Clicked Value"
}
</script>
<style scoped>
.my-text {
    margin-top: 35px;
}
.my-number {
    font-size: 60px;
}

.btn {
    background-color: rgb(3, 87, 87);
    color: white;
    text-transform: uppercase;
    font-size: 20px;
    outline: none;
    border: none;
    height: 58px;
    width: 200px;
    cursor: pointer;
}
</style>