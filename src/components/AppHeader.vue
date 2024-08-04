<template>
    <header>
        <h1>World of Planets</h1>
        <Button v-if="$route.name == 'PlanetList'" as="router-link" label="Back" icon="pi pi-back" to="/"/>
    </header>
</template>

<script setup lang="ts">
import Button from 'primevue/button';
</script>

<style scoped></style>