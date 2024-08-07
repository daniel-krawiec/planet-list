<template>
    <footer class="footer">
        <p>Planet List</p>
        <a :href="`mailto:${mailTo}`">{{ mailTo }}</a>
    </footer>
</template>

<script setup lang="ts">
const mailTo = 'daniel-krawiec@hotmail.com'
</script>

<style lang="scss" scoped>
.footer {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 20px;
    background-color: #18181b;
    position: absolute;
    bottom: 0;
    left: 0;
}
</style>