<template>
    <section>
        <section class="hero is-medium is-primary is-bold">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">
                        반가워요!
                    </h1>
                    <h2 class="subtitle">
                        개발자 하늘빛
                    </h2>
                </div>
            </div>
        </section>

        <div class="container">
            <br/>
            <noscript>
                <div class="notification is-danger">
                    자바스크립트(JavaScript)가 비활성화 되어있습니다.
                    비활성화 시 해당 홈페이지의 일부 기능이 작동하지 않을 수도 있습니다.
                </div>
                <br>
            </noscript>

            <Alert color="success">이 홈페이지는 개발 중이에요!</Alert>

            <h1 class="title" style="font-weight: 500;">이런 것들을 다룰 줄 알아요!</h1>
            <div class="columns is-1">
                <div class="column">
                    <Dot text="Node.js">
                        <img id="logo" src="~/assets/img/nodejs.png"/>
                    </Dot>
                </div>
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

            <h1 class="title " style="font-weight: 500;">연락처</h1>
            <div class="columns">
                <div class="column" style="text-align: right"><i class="fab fa-telegram"> Telegram</i> @아이디</div>
                <div class="is-divider-vertical" data-content="OR"></div>
                <div class="column"><i class="fab fa-discord"> Discord</i> 아이디</div>
            </div>
        </div>
    </section>
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
