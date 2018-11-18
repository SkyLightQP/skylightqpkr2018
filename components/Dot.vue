<template>
    <div id="dot">
        <span>
            <slot/>
            </span>
        <span id="text">
            <p>{{ text }}</p>
        </span>
    </div>
</template>

<script>
    export default {
        name: "Dot",
        props: {
            text: {
                type: String,
                required: true
            }
        }
    }
</script>


<style lang="scss">
    @import "~/node_modules/bulma/bulma.sass";

    $color: $light;

    @keyframes logoRotate {
        0% {
            opacity: 1;
            transform: perspective(600px) rotateY(0deg);
        }
        100% {
            opacity: 0;
            transform: perspective(600px) rotateY(360deg);
        }
    }

    @keyframes fadeInAndOut {
        20% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    #dot {
        height: 150px;
        width: 150px;
        background-color: $color;
        border-radius: 50%;
        position: relative;

        #logo {
            position: absolute;
            max-width: 100%;
            max-height: 100%;
            width: 50%;
            height: auto;
            margin: auto;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
        }
        &:hover #logo{
            animation-name: logoRotate;
            animation-duration: 0.3s;
            animation-fill-mode: forwards;
            animation-timing-function: ease-in;
        }

        #text {
            position: absolute;
            color: black;
            text-align: center;
            line-height: 150px;
            opacity: 0;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
        }
        &:hover #text {
            animation-name: fadeInAndOut;
            animation-duration: 0.3s;
            animation-fill-mode: forwards;
            animation-timing-function: ease-in;
        }
    }
</style>