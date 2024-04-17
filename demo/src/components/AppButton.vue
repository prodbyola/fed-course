<template>
    <button class="app_btn">
        {{ label }}
    </button>
</template>
<script setup lang="ts">
defineProps<{
    label: string
}>()
</script>
<style scoped>
button {
    border: none;
    outline: none;
}
</style>