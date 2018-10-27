<template>
    <section>
        <header/>
        <br/>

        <div class="container">
            <div id="m_l" class="columns">
                <div id="m_lc" class="column">
                    <Card id="m_lcc">
                        <CardImage>
                            <img src="~/assets/img/program/batchmanager.jpg"/>
                        </CardImage>
                        <CardContent title="BatchManager" :tags="['C#']" date="2017-07">
                            윈도우 배치파일을 관리하고 <br/>
                            웹에서 확인하는 프로그램
                        </CardContent>
                    </Card>
                </div>
                <div id="m_lc" class="column">
                    <Card id="m_lcc">
                        <CardImage>
                            <img src="~/assets/img/program/stereomixsetting.jpg"/>
                        </CardImage>
                        <CardContent title="StereoMixSetting" :tags="['C#']" date="2017-04">
                            스테레오을 킬려면 과정이 귀찮아서 <br/>
                            간단하게 만든 마우스 매크로
                        </CardContent>
                    </Card>
                </div>
                <div id="m_lc" class="column">
                    <Card id="m_lcc">
                        <CardContent title="GetCallLog" :tags="['C#']" date="2017-03">
                            휴대폰의 문자, 전화 알림을 컴퓨터로 불러오는 프로그램
                        </CardContent>
                    </Card>
                    <br/>
                    <Card id="m_lcc">
                        <CardContent title="RemotePetFood" :tags="['C#', 'WebView']" date="2017-04">
                            반려동물 급여기를 제어하는 웹뷰 프로그램
                        </CardContent>
                    </Card>
                    <br/>
                    <Card id="m_lcc">
                        <CardContent title="FileServer" :tags="['Node.js']" date="2017-09">
                            파일을 업로드하고 다운로드 할 수 있는 서비스
                        </CardContent>
                    </Card>
                </div>
            </div>
            <div id="m_l" class="columns">
                <div id="m_lc" class="column">
                    <Card id="m_lcc">
                        <CardImage>
                            <img src="~/assets/img/program/airq.jpg"/>
                        </CardImage>
                        <CardContent title="AirQualityTool" :tags="['Node.js', 'AJAX', 'Arduino']" date="2017-09">
                            온도, 습도, 미세먼지 수치를 측정하여 <br/>
                            DB에 업로드하고 웹에서 그래프로 표시해주는 서비스. <br/>
                            (사진은 옛날꺼 그래프 라이브러리 바꿈)
                        </CardContent>
                    </Card>
                </div>
                <div id="m_lc" class="column">
                    <Card id="m_lcc">
                        <CardContent title="ServerStatus" :tags="['Node.js', 'TelegramBot']" date="2017-07">
                            서버컴퓨터의 상태를 텔레그램 봇으로 <br/>
                            알려주는 봇
                        </CardContent>
                    </Card>
                    <br/>
                    <Card id="m_lcc">
                        <CardContent title="SkyLightQP-Status" :tags="['PHP']" date="2017-09">
                            웹사이트의 상태를 알려주는 홈페이지
                        </CardContent>
                    </Card>
                    <br/>
                    <Card id="m_lcc">
                        <CardContent title="SkyLightQP(2017)" :tags="['HTML5', 'Bootstrap']" date="2017">
                            하늘빛 포트폴리오 2017 버전
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

<style lang="scss">
    .m_l {
        column-count: 3;
        column-gap: 0;
    }
    .m_lc {
        break-inside: avoid;
        padding: 5px;
    }
    .m_lcc {
        padding: 10px;
        border-radius: 10px;
    }
</style>