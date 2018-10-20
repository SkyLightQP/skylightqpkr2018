<template>
    <div id="Alert">
        <article class="message" :class="'is-' + color">
            <div class="message-body">
                <slot/>
            </div>
        </article>
        <br/>
    </div>
</template>

<script>
    export default {
        name: "Alert",
        props: {
            color: {
                type: String,
                required: true
            }
        }
    }
</script>