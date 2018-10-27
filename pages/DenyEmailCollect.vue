<template>
    <section>
        <header/>
        <br>
        <div class="container">
            <h1 class="title">이메일 무단 수집 거부 안내</h1>
            <div class="box">
                <p>
                    본 웹사이트에 게시된 이메일 주소가 전자우편 수집 프로그램이나 그 밖의 기술적 장치를 이용하여 무단으로 수집되는 것을 거부하며, <br/>
                    이를 위반시 정보통신망법에 의해 형사처벌됨을 유념하시기 바랍니다.
                </p>
            </div>
        </div>
        <footer/>
    </section>
</template>
　
<script>
    import Header from "~/layouts/header";
    import Footer from "~/layouts/footer";

    export default {
        name: "DenyEmailCollect",
        components: {Footer, Header}
    }
</script>