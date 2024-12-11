<script setup lang="ts">
import navbar from './UI/navbar.vue'
import footerComponent from './UI/footerComponent.vue';
import './scss/main.scss'


</script>

<template>
    <navbar />
    <RouterView></RouterView>
    <footerComponent />
</template>

<style></style>