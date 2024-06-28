<template>
    <main>
        <div class="product_list">
            <div v-for="(product, index) in productList" :key="index" class="product_card">
                <div :style="{
                    backgroundImage: `url(${product.image})`
                }" class="product_img"></div>
                <h3 class="product_title">{{ product.title }}</h3>
                <p class="product_price">₦{{ product.price }}</p>
            </div>
        </div>
    </main>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import axios from 'axios'

type Product = {
    category: string
    description: string
    id: number
    image: string
    price: number
    rating: {
        count: number
        rate: number
    }
    title: string
}

const productList = ref<Product[]>([])

onMounted(() => {
    axios
        .get('https://fakestoreapi.com/products')
        .then((resp) => productList.value = resp.data)
})
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

.product_list {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    column-gap: 48px;
    row-gap: 12px;
}

.product_card {
    width: 200px;
    cursor: pointer;
}

.product_img {
    height: 150px;
    width: 200px;
    background-size: cover;
    transition: all .5s;
}

.product_img:hover {
    transform: scale(130%);
}

.product_title {
    font-weight: bold;
    text-align: center;
    line-height: 1.2;
}

.product_price {
    font-size: 2rem;
    text-align: center;
}
</style>