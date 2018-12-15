<template>
    <section>
        <section class="hero is-medium is-primary is-bold">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">
                        반가워요!
                    </h1>
                    <h2 class="subtitle">
                        개발을 즐겨하는 사람, 하늘빛
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
                <br/>
            </noscript>

            <div v-for="item in items">
                <Alert :color="item.color">{{ item.text }}</Alert>
            </div>

            <skills/>
            <br/>
            <contacts/>
        </div>
    </section>
</template>

<script>
    import Alert from "~/components/Alert";
    import Skills from "~/layouts/skills";
    import Contacts from "~/layouts/contacts";

    import items from "~/assets/config/alert.json"

    export default {
        name: "index",
        components: {
            Contacts,
            Skills,
            Alert
        },
        data(){
            return {
                items: items
            }
        }
    }
</script>