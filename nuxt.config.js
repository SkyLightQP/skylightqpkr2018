module.exports = {
    loading: {
        color: 'blue'
    },

    head: {
        title: '하늘빛 | SkyLightQP',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { property: 'og:url', content: 'http://skylightqp.kr'},
            { property: 'og:title', content: '하늘빛 | SkyLightQP'}
        ]
    },

    css: [
        { src: 'bulma', lang: 'sass' },
        { src: '~/assets/css/fonts.scss', lang: 'sass' },
        { src: '~/node_modules/@fortawesome/fontawesome-free/css/all.css' }
    ]
}