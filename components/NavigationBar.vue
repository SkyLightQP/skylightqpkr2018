<template>
    <nav class="navbar is-light" role="navigation">
        <div class="navbar-brand">
            <a id="navbar-font" class="navbar-item" href="https://skylightqp.kr">
                하늘빛
            </a>

            <a role="button" class="navbar-burger burger" :class="{ 'is-active': isActive }" aria-label="menu" aria-expanded="false" v-on:click="setActive()">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div class="navbar-menu" :class="{ 'is-active': isActive }">
            <div class="navbar-start">
                <a class="navbar-item is-active">
                    Home
                </a>

                <div class="navbar-item has-dropdown is-hoverable">
                    <a class="navbar-link">
                        Dev
                    </a>

                    <div class="navbar-dropdown">
                        <a class="navbar-item">
                            Program / Web
                        </a>
                        <a class="navbar-item">
                            Minecraft
                        </a>
                    </div>
                </div>
            </div>

            <div class="navbar-end">
                <a class="navbar-item">
                    <i class="fab fa-github"></i>
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