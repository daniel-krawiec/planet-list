<template>
    <header>
        <h1>World of Planets</h1>
        <Button v-if="$route.name == 'PlanetList'" as="router-link" label="Back" to="/"/>
        <Button v-else as="router-link" label="Enter" to="/list"/>
    </header>
</template>

<script setup lang="ts">
import Button from 'primevue/button';
</script>

<style lang="scss" scoped>
header {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 20px;
    padding: 20px;
}
.p-button {
    text-decoration: none;
}
</style>