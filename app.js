const logger = require('log4js').getLogger()
const app = require('express')()

const { Nuxt, Builder } = require('nuxt')
const nuxtConfig = require('./nuxt.config')

if (process.env.NODE_ENV === 'production') {
    logger.level = 'ALL'
} else if (process.env.NODE_ENV === 'development') {
    logger.level = 'DEBUG'
    nuxtConfig.dev = true
}

const nuxt = new Nuxt(nuxtConfig)

if (nuxtConfig.dev) {
    new Builder(nuxt).build()
}
app.use(nuxt.render)

const port = 80
app.listen(port, () => logger.info(`Http server listening on ${port}`))
