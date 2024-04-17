<template>
    <main>
        <p id="my-text" class="my-number">{{ text }}</p>
        <button 
            @click="changePosition"
            class="btn"
        >Move</button>
    </main>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const text = ref("MyText")
const pos = ref(0)

const changePosition = () => {
    const textBox = document.getElementById("my-text")
    if(textBox){
        pos.value += 1
        textBox.style.marginLeft = pos.value+"px"
    }
}
</script>
<style scoped>
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