import Vehicle from '@src/domain/models/vehicle'
import VehicleRepo from '@src/domain/repositories/vehicleRepo'

class FakeVehicleRepo implements VehicleRepo {
  public async create (input: Vehicle): Promise<Vehicle> {
    return new Vehicle()
  }
}

export default FakeVehicleRepo
