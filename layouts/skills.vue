<template>
    <section>
        <h1 class="title is-4" style="font-weight: 500;">이런 것들을 다룰 줄 알아요!</h1>
        <div class="columns">
            <div class="column">
                <Dot text="Node.js">
                    <img class="logo" src="~/assets/img/nodejs.png"/>
                </Dot>
            </div>
            <div class="column">
                <Dot text="Vue.js">
                    <img class="logo" src="~/assets/img/vuejs.png"/>
                </Dot>
            </div>
            <div class="column">
                <Dot text="Kotlin">
                    <img class="logo" src="~/assets/img/kotlin.png"/>
                </Dot>
            </div>
            <div class="column">
                <Dot text="Java">
                    <img class="logo" src="~/assets/img/java.png"/>
                </Dot>
            </div>
            <div class="column">
                <Dot text="HTML5">
                    <img class="logo" src="~/assets/img/html5.png"/>
                </Dot>
            </div>
        </div>
    </section>
</template>

<script>
    import Dot from "~/components/Dot";
    export default {
        name: "skills",
        components: {Dot}
    }
</script>
