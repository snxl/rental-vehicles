import RentVehicle from '@src/domain/models/rentVehicle'
import RentVehicleRepo from '@src/domain/repositories/rentVehicleRepo'

class FakeRentVehicleRepo implements RentVehicleRepo {
  public async findByUserId (id: number): Promise<RentVehicle[] | undefined> {
    const rentVehicle: RentVehicle[] = []

    const rentVehicleEntity = new RentVehicle()
    rentVehicleEntity.id = 1
    rentVehicleEntity.UserId = 1
    rentVehicleEntity.VehicleId = 1
    rentVehicle.push(rentVehicleEntity)

    return rentVehicle
  }

  public async create (input: RentVehicle): Promise<RentVehicle> {
    return new RentVehicle()
  }

  public async findByVehicleId (id: number): Promise<RentVehicle[] | undefined> {
    const rentVehicle: RentVehicle[] = []

    const rentVehicleEntity = new RentVehicle()
    rentVehicleEntity.id = 1
    rentVehicleEntity.UserId = 1
    rentVehicleEntity.VehicleId = 1
    rentVehicle.push(rentVehicleEntity)

    return rentVehicle
  }

  public async deleteRentalVehicle (id: number): Promise<RentVehicle> {
    return new RentVehicle()
  }
}

export default FakeRentVehicleRepo
