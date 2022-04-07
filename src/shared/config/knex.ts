import { Model } from 'objection'
import Knex from 'knex'
import config from './keys'
import log from '../helpers/log'

const knex = Knex({
  client: 'pg',
  connection: {
    password: config.PG_PASSWORD,
    database: config.PG_DATABASE,
    user: config.PG_USER,
    port: 5432,
    host: 'postgres',
    ssl: {
      rejectUnauthorized: false
    }
  },
  debug: config.environment !== 'production'
})

knex.on('connect', stream => {
  log.info('Connect in database')
})

Model.knex(knex)

export { knex }

export default Model
