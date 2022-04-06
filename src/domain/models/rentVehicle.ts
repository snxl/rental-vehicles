import BaseTrigger from './baseTrigger'

class RentVehicle extends BaseTrigger {
  public id!: number
  public UserId!: number
  public VehicleId!: number

  public static get tableName (): string {
    return 'RentVehicles'
  }
}

export default RentVehicle
