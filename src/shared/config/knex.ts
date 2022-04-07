import { Model } from 'objection'
import Knex from 'knex'
import config from './keys'

const knex = Knex({
  client: 'pg',
  connection: {
    password: config.PG_PASSWORD,
    database: config.PG_DATABASE,
    user: config.PG_USER,
    port: 5432,
    host: 'postgres'
  },
  debug: config.environment !== 'production'
})

Model.knex(knex)

export { knex }

export default Model
