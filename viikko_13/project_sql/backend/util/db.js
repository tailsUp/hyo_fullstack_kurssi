const Sequelize = require('sequelize')
const { DATABASE_URL } = require('./config')
const { Umzug, SequelizeStorage } = require('umzug')
const {logger } = require('../util/simpleLogger')

/**
 * Ohjelma ei toimi jostain syystä ssl optioilla. Kysytty apua - ei vastauksia. Kirjattu pois että saadaan edettyä.
 */
const sequelize = new Sequelize(DATABASE_URL, {
  dialectOptions: {
    /*ssl: {
      require: true,
      rejectUnauthorized: false
    }*/
  },
});

/**
 * 
 * Funktio yhdistää backendin tietokantaan.
 * 
 * @returns null
 */
const connectToDatabase = async () => {
  try 
  {
    await sequelize.authenticate()
    try 
    {
      await runMigrations()
    }
    catch(err) 
    {
      logger('failed while running migrations. ')
    }
    logger('connected to the database')
  }
  catch (err)
  {
    logger('failed to connect to the database. ')
    return process.exit(1)
  }
  return null
}

/**
 * Funktiota käytetään migraatioiden konfiguraatioiden ajamiseen.
 */
const migrationConf = {
  migrations: {
    glob: 'migrations/*.js',
  },
  storage: new SequelizeStorage({ sequelize, tableName: 'migrations' }),
  context: sequelize.getQueryInterface(),
  logger: console,
}
  
/**
 * Funktio ajaa migraatiot.
 */
const runMigrations = async () => {
  const migrator = new Umzug(migrationConf)
  const migrations = await migrator.up()
  console.log('Migrations up to date', {
    files: migrations.map((mig) => mig.name),
  })
}

/**
 * Funktiolla peruutetaan migraatiot.
 */
const rollbackMigration = async () => {
  await sequelize.authenticate()
  const migrator = new Umzug(migrationConf)
  await migrator.down()
}


module.exports = { connectToDatabase, sequelize, rollbackMigration }