<template>
    <div class="wrapper">
        <h3>{{ welcomeTitle }}</h3>
        <p>{{ shortDescription }}</p>
    </div>
</template>

<script setup lang="ts">
const welcomeTitle = 'Welcome to Planet List';
const shortDescription = 'Please push the button above to enter the world of Planets.';
</script>

<style lang="scss" scoped>
.wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    height: calc(100vh - 180px);
}

h3 {
    margin-bottom: 15px;
}

p {
    text-align: center;
}
</style>
