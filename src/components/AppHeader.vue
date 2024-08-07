<template>
    <header class="header">
        <h1>World of Planets</h1>
        <Button v-if="isPlanetListRoute" as="router-link" label="Back" to="/" />
        <Button v-else as="router-link" label="Enter" to="/list" />
    </header>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import Button from 'primevue/button';

const route = useRoute();
const isPlanetListRoute = computed(() => route.name === 'PlanetList');
</script>

<style lang="scss" scoped>
.header {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding: 20px;
}

.p-button {
    text-decoration: none;
}
</style>