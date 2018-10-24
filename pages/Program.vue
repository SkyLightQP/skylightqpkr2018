<template>
    <section>
        <header/>
        <br/>
        <div class="container">
            <div class="columns">
                <div class="column">
                    <Card>
                        <CardImage>
                            <img src="https://bulma.io/images/placeholders/128x128.png"/>
                        </CardImage>
                        <CardContent title="프로젝트 이름" :tags="['Java', 'Kotlin', 'Scala']" date="2018-01">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Nunc gravida, lorem quis iaculis eleifend, elit libero ullamcorper quam,
                            quis egestas massa ante eu tellus. Aenean ligula purus, molestie at ullamcorper quis,
                            blandit eget sem. Ut mollis eu mauris at venenatis. Morbi eget quam non sem porta pulvinar
                            ac sit amet magna.
                        </CardContent>
                    </Card>
                </div>
                <div class="column">
                    <Card>
                        <CardImage>
                            <img src="https://bulma.io/images/placeholders/128x128.png"/>
                        </CardImage>
                        <CardContent title="테스트" :tags="[1,2,3]" date="2018-01">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
                            Nunc gravida, lorem quis iaculis eleifend, elit libero ullamcorper quam, <br/>
                            quis egestas massa ante eu tellus. Aenean ligula purus, molestie at ullamcorper quis, <br/>
                            blandit eget sem. Ut mollis eu mauris at venenatis. Morbi eget quam non sem porta pulvinar
                            ac sit amet magna.
                        </CardContent>
                    </Card>
                </div>
                <div class="column">
                    <Card>
                        <CardImage>
                            <img src="https://bulma.io/images/placeholders/128x128.png"/>
                        </CardImage>
                        <CardContent title="테스트" :tags="[1,2,3]" date="2018-01">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
                            Nunc gravida, lorem quis iaculis eleifend, elit libero ullamcorper quam, <br/>
                            quis egestas massa ante eu tellus. Aenean ligula purus, molestie at ullamcorper quis, <br/>
                            blandit eget sem. Ut mollis eu mauris at venenatis. Morbi eget quam non sem porta pulvinar
                            ac sit amet magna.
                        </CardContent>
                    </Card>
                </div>
                <div class="column">
                    <Card>
                        <CardImage>
                            <img src="https://bulma.io/images/placeholders/128x128.png"/>
                        </CardImage>
                        <CardContent title="테스트" :tags="[1,2,3]" date="2018-01">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
                            Nunc gravida, lorem quis iaculis eleifend, elit libero ullamcorper quam, <br/>
                            quis egestas massa ante eu tellus. Aenean ligula purus, molestie at ullamcorper quis, <br/>
                            blandit eget sem. Ut mollis eu mauris at venenatis. Morbi eget quam non sem porta pulvinar
                            ac sit amet magna.
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
        <footer/>
    </section>
</template>

<script>
    import Header from "~/layouts/header";
    import Footer from "~/layouts/footer";
    import Card from "~/components/card/Card";
    import CardImage from "~/components/card/CardImage";
    import CardContent from "~/components/card/CardContent";

    export default {
        name: "Program",
        components: {CardContent, CardImage, Card, Footer, Header}
    }
</script>