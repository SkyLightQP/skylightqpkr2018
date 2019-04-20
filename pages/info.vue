<template>
    <div class="container">
        <br/>
        <div class="box content">
            <div v-html="model"></div>
        </div>
    </div>
</template>

<script>
    import md from '~/assets/config/info.md'

    export default {
        name: "info",
        data() {
            return {
                model: md
            }
        }
    }
</script>