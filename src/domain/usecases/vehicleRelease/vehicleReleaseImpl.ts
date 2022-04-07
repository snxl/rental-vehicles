import RentVehicleRepo from '@src/domain/repositories/rentVehicleRepo'
import AppError from '@src/shared/helpers/errors/appErrors'
import { Input, Output } from './vehicleReleaseDTO'

class VehicleReleaseImpl {
  constructor (
    private rentVehicleRepo: RentVehicleRepo
  ) {}

  public async run (input: Input): Promise<Output> {
    const findRentalVehicle = await this.rentVehicleRepo.findByUserId(input.userId)
    if (!findRentalVehicle) {
      throw new AppError('No rental vehicle found', 404)
    }

    const deleteRentalVehicle = await this.rentVehicleRepo.deleteRentalVehicle(findRentalVehicle[0].id)

    return {
      id: deleteRentalVehicle.id,
      userId: deleteRentalVehicle.UserId,
      vehicleId: deleteRentalVehicle.VehicleId
    }
  }
}

export default VehicleReleaseImpl
