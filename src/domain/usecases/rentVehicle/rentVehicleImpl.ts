import RentVehicle from '@src/domain/models/rentVehicle'
import RentVehicleRepo from '@src/domain/repositories/rentVehicleRepo'
import AppError from '@src/shared/helpers/errors/appErrors'
import { Input, Output } from './rentVehicleDTO'

class RentVehicleImpl {
  constructor (
    private rentVehicleRepo: RentVehicleRepo
  ) {}

  public async run (input: Input): Promise<Output> {
    const checkUserDoesNotARented = await this.rentVehicleRepo.findByUserId(input.userId)
    if (checkUserDoesNotARented) {
      throw new AppError('User already has a rented vehicle', 400)
    }

    const checkVehicleIsInUse = await this.rentVehicleRepo.findByVehicleId(input.vehicleId)
    if (checkVehicleIsInUse) {
      throw new AppError('Vehicle is currently in use', 400)
    }

    const rentVehicle = new RentVehicle()
    rentVehicle.UserId = input.userId
    rentVehicle.VehicleId = input.vehicleId

    const createRentalVehicle = await this.rentVehicleRepo.create(rentVehicle)

    return {
      id: createRentalVehicle.id,
      userId: createRentalVehicle.UserId,
      vehicleId: createRentalVehicle.VehicleId
    }
  }
}

export default RentVehicleImpl
