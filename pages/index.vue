<template>
    <div>
        <section class="hero is-medium is-primary is-bold">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">
                        반가워요!
                    </h1>
                    <h2 class="subtitle">
                        아무말아무말
                    </h2>
                </div>
            </div>
        </section>

        <section class="container">
            <br/>
            <Alert color="success">이 홈페이지는 개발 중이에요!</Alert>

            <h1 class="title" style="font-weight: 500;">이런 것들을 다룰 줄 알아요!</h1>
            <div class="columns is-1">
                <div class="column">
                    <Dot text="Vue.js">
                        <img id="logo" src="~/assets/img/Vue.png"/>
                    </Dot>
                </div>
                <div class="column">
                    <Dot text="Kotlin">
                        <img id="logo" src="~/assets/img/Kotlin.png"/>
                    </Dot>
                </div>
                <div class="column">
                    <Dot text="Java">
                        <img id="logo" src="~/assets/img/java.png"/>
                    </Dot>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import Alert from "~/components/Alert";
    import Dot from "~/components/Dot";

    export default {
        name: "index",
        components: {
            Dot,
            Alert
        }
    }
</script>
