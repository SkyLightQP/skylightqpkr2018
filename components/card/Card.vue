<template>
    <div id="card" class="card">
        <slot/>
    </div>
</template>

<script>
    export default {
        name: "Card",
    }
</script>

<style>
    #card {
        margin-bottom: 30px;
    }
</style>