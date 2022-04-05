import BaseTrigger from './baseTrigger'

class User extends BaseTrigger {
  public id!: number
  public name!: string
  public email!: string
  public created_at!: Date
  public updated_at!: Date

  public static get tableName (): string {
    return 'Users'
  }
}

export default User