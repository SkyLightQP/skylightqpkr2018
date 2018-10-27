<template>
    <section>
        <br/>
        <div class="container">
            <Alert color="info">Masonry 스타일 특징 때문인지 날짜대로 배열해도 이상하게 보여서 일단 포기??</Alert>

            <masonry :cols="{default: 3, 700: 1}" :gutter="30">
                <div v-for="item in items" :key="item.title">
                    <Card>
                        <template v-if="item.image !== undefined">
                            <CardImage>
                                <img :src="require(`~/assets/img/program/${item.image}`)"/>
                            </CardImage>
                        </template>
                        <CardContent :title="item.title" :tags="item.tags" :date="item.date">
                            {{ item.contents }}
                        </CardContent>
                    </Card>
                </div>
            </masonry>
        </div>
    </section>
</template>

<script>
    import items from "~/static/data.json";

    import Card from "~/components/card/Card";
    import CardImage from "~/components/card/CardImage";
    import CardContent from "~/components/card/CardContent";

    import Vue from 'vue'
    import VueMasonry from 'vue-masonry-css'
    import Alert from "../components/Alert";

    Vue.use(VueMasonry);

    export default {
        name: "Program",
        components: {Alert, CardContent, CardImage, Card},
        data(){
            return {
                items: items
            }
        }
    }
</script>