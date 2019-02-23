<template>
    <div class="card-content">
        <div class="media">
            <div class="media-content">
                <p class="title is-4">{{ title }}</p>
                <div class="subtitle is-6">
                    <span class="tag tag-style" :class="'is-' + color">{{ date }}</span>
                    <span class="tag is-light tag-style" v-for="item in tags">
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
            date: String,
            color: String
        }
    }
</script>

<style>
    .tag-style {
        margin-right: 5px;
        margin-bottom: 5px;
    }
</style>