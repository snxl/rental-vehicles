import BaseTrigger from './baseTrigger'

class Vehicle extends BaseTrigger {
  public id!: number
  public name!: string
  public brand!: string
  public year!: Date

  public static get tableName (): string {
    return 'Vehicles'
  }
}

export default Vehicle
