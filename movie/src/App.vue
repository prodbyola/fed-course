<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="app_nav">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/upload">Upload</RouterLink>
  </div>
  <RouterView />
</template>
<style scoped>
body {
  display: block !important;
}

.app_nav {
  display: flex;
  column-gap: 18px;
  font-size: 2rem;
}
</style>
