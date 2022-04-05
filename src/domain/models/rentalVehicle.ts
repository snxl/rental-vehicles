import BaseTrigger from './baseTrigger'

class RentalVehicle extends BaseTrigger {
  public id!: number
  public UserId!: number
  public VehicleId!: number
  public created_at!: Date
  public updated_at!: Date

  public static get tableName (): string {
    return 'RentalVehicles'
  }
}

export default RentalVehicle
