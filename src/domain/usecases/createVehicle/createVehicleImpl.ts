import Vehicle from '@src/domain/models/vehicle'
import VehicleRepo from '@src/domain/repositories/vehicleRepo'
import AppError from '@src/shared/helpers/errors/appErrors'
import { Input, Output } from './createVehicleDTO'

class CreateVehicleImpl {
  constructor (
    private vehicleRepo: VehicleRepo
  ) {}

  public async run (input: Input): Promise<Output> {
    if (input.year > new Date()) {
      throw new AppError('Vehicle has a date greater than the current one', 400)
    }

    const vehicle = new Vehicle()
    vehicle.name = input.name
    vehicle.brand = input.brand
    vehicle.year = input.year

    const createVehicle = await this.vehicleRepo.create(vehicle)

    return {
      ...createVehicle
    }
  }
}

export default CreateVehicleImpl
