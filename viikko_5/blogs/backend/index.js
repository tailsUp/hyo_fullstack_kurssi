const app = require('./app') // varsinainen Express-sovellus
const config = require('./utils/config')
const logger = require('./utils/logger')

/**
 * Funktio kirjaa portin jossa ohjelma pyörii.
 */
app.listen(3001, () => {
  logger.info(`Server running on port ${config.PORT}`)
})