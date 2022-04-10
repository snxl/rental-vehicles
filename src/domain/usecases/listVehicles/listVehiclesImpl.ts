import VehicleRepo from '@src/domain/repositories/vehicleRepo'
import AppError from '@src/shared/helpers/errors/appErrors'
import { Input, Output } from './listVehiclesDTO'

class ListVehiclesImpl {
  constructor (
    private vehicleRepo: VehicleRepo
  ) {}

  public async run (input: Input): Promise<Output> {
    if (!input.limit) {
      input.limit = 50
    }

    if (!input.offset) {
      input.offset = 1
    }

    const listVehicle = await this.vehicleRepo.listAll(input.limit, input.offset)

    if (!listVehicle.length) {
      throw new AppError('No vehicle found', 404)
    }

    return {
      vehicles: listVehicle
    }
  }
}

export default ListVehiclesImpl
