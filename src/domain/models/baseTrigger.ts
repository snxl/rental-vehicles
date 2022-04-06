import { ModelOptions, QueryContext } from 'objection'
import Model from '@src/shared/config/knex'

abstract class BaseTrigger extends Model {
  public created_at!: Date
  public updated_at!: Date

  $beforeInsert (queryContext: QueryContext): void {
    this.created_at = new Date()
    this.updated_at = new Date()
  }

  $beforeUpdate (opt: ModelOptions, queryContext: QueryContext): void {
    this.updated_at = new Date()
  }
}

export default BaseTrigger
