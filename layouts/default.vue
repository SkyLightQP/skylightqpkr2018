<template>
    <section>
        <Header/>
        <nuxt/>
        <Footer/>
    </section>
</template>

<script>
    import Header from "./header";
    import Footer from "./footer";

    export default {
        components: {
            Header,
            Footer
        },
        name: "default"
    }
</script>