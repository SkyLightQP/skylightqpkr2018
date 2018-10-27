<template>
    <div class="card-content">
        <div class="media">
            <div class="media-content">
                <p class="title is-4">{{ title }}</p>
                <div class="subtitle is-6">
                    <span class="tag is-primary">{{ date }}</span>
                    <span id="tag" class="tag is-light" v-for="item in tags">
                            {{ item }}
                    </span>
                </div>
            </div>
        </div>

        <div class="content">
            <slot/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CardContent",
        props: {
            title: String,
            tags: Array,
            date: String
        }
    }
</script>

<style>
    #tag {
        margin-right: 5px;
    }
</style>