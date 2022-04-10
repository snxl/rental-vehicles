import Vehicle from '@src/domain/models/vehicle'
import VehicleRepo from '@src/domain/repositories/vehicleRepo'

class VehicleRepoImpl implements VehicleRepo {
  public async create (input: Vehicle): Promise<Vehicle> {
    return Vehicle.query()
      .insert(input)
      .returning(['*'])
  }

  public async listAll (limit: number, offset: number): Promise<Vehicle[] | undefined> {
    offset = (offset - 1) * limit

    return Vehicle.query()
      .select(['*'])
      .offset(offset)
      .limit(limit)
  }
}

export default VehicleRepoImpl
