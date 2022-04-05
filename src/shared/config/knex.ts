import { Model } from 'objection'
import Knex from 'knex'
import config from './keys'

const knex = Knex({
  client: 'pg',
  connection: {
    connectionString: config.DATABASE_URI,
    ssl: {
      rejectUnauthorized: false
    }
  },
  debug: config.environment !== 'production'
})

Model.knex(knex)

export { knex }

export default Model
