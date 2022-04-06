import BaseTrigger from './baseTrigger'

class User extends BaseTrigger {
  public id!: number
  public name!: string
  public email!: string
  public password!: string

  public static get tableName (): string {
    return 'Users'
  }
}

export default User
