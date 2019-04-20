<template>
    <nav class="navbar is-light" role="navigation">
        <div class="navbar-brand">
            <nuxt-link id="navbar-font" class="navbar-item" to="/">
                하늘빛
            </nuxt-link>

            <a role="button" class="navbar-burger burger" :class="{ 'is-active': isActive }" aria-label="menu" aria-expanded="false" v-on:click="setActive()">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div class="navbar-menu" :class="{ 'is-active': isActive }">
            <div class="navbar-start">
                <nuxt-link class="navbar-item" to="/">
                    <i class="fas fa-home"></i>&nbsp;Home
                </nuxt-link>

                <nuxt-link class="navbar-item" to="/info">
                    <i class="fas fa-info-circle"></i>&nbsp;Info
                </nuxt-link>

                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                        <i class="fas fa-cog"></i>&nbsp;Dev
                    </a>
                    <div class="navbar-dropdown">
                        <nuxt-link class="navbar-item" to="/program">
                            <i class="fas fa-desktop"></i>&nbsp;Program / Web
                        </nuxt-link>
                        <nuxt-link class="navbar-item" to="/minecraft">
                            <i class="fas fa-gamepad"></i>&nbsp;Minecraft
                        </nuxt-link>
                    </div>
                </div>

                <nuxt-link class="navbar-item" to="/ask">
                    <i class="fas fa-question"></i>&nbsp;Ask
                </nuxt-link>
            </div>

            <div class="navbar-end">
                <a class="navbar-item" href="https://blog.skylightqp.kr">
                    <i class="fas fa-book"></i>&nbsp;Blog
                </a>
                <a class="navbar-item" href="https://github.com/SkyLightQP">
                    <i class="fas fa-code-branch"></i>&nbsp;Git
                </a>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "NavigationBar",
        data() {
            return {
                isActive: false
            }
        },
        methods: {
            setActive() {
                this.isActive = !this.isActive
            }
        }
    }
</script>