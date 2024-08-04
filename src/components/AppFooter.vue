<template>
    <footer>
        <p>Planet List</p>
        <p><a href="mailto:${{ mailTo }}">{{ mailTo }}</a></p>
    </footer>
</template>

<script setup lang="ts">
const mailTo: string = 'daniel-krawiec@hotmail.com'
</script>

<style scoped></style>