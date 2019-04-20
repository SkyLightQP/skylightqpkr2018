<template>
    <section>
        <br/>
        <div class="container">
            <masonry :cols="{default: 3, 700: 1}" :gutter="30">
                <div v-for="item in items" :key="item.title">
                    <Card>
                        <template v-if="item.image !== undefined">
                            <CardImage>
                                <img :src="require(`~/assets/img/minecraft/${item.image}`)"/>
                            </CardImage>
                        </template>
                        <CardContent :title="item.title" :tags="item.tags" :date="item.date" color="info">
                            {{ item.contents }}
                        </CardContent>
                    </Card>
                </div>
            </masonry>
        </div>
    </section>
</template>

<script>
    import items from "~/assets/config/data_minecraft.json";

    import Card from "~/components/card/Card";
    import CardImage from "~/components/card/CardImage";
    import CardContent from "~/components/card/CardContent";

    import Vue from 'vue'
    import VueMasonry from 'vue-masonry-css'

    Vue.use(VueMasonry);

    export default {
        name: "minecraft",
        components: {CardContent, CardImage, Card},
        data(){
            return {
                items: items
            }
        }
    }
</script>