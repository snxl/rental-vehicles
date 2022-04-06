import Vehicle from '@src/domain/models/vehicle'
import VehicleRepo from '@src/domain/repositories/vehicleRepo'

class FakeVehicleRepo implements VehicleRepo {
  public async create (input: Vehicle): Promise<Vehicle> {
    return new Vehicle()
  }

  public async listAll (limit: number, offset: number): Promise<Vehicle[]> {
    const vehicles: Vehicle[] = []

    const vehicleOne = new Vehicle()
    vehicles.push(vehicleOne)

    const vehicleTwo = new Vehicle()
    vehicles.push(vehicleTwo)

    return vehicles
  }
}

export default FakeVehicleRepo
