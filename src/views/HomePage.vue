<template>
    <h1>{{ WelcomeTitle }}</h1>
    <p> {{ ShortDescription }}</p>
    <Button as="router-link" label="Enter" icon="pi pi-globe" to="/list"/>
</template>

<script setup lang="ts">
import Button from 'primevue/button';

const WelcomeTitle: string = 'Welcome to Planet List'
const ShortDescription: string = 'Please push the button below to enter the world of Planets.'

</script>

<style scoped></style>
