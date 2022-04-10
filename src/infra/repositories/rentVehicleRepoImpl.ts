import RentVehicle from '@src/domain/models/rentVehicle'
import RentVehicleRepo from '@src/domain/repositories/rentVehicleRepo'

class RentVehicleRepoImpl implements RentVehicleRepo {
  public async findByUserId (id: number): Promise<RentVehicle[] | []> {
    return RentVehicle.query()
      .where('UserId', id)
  }

  public async create (input: RentVehicle): Promise<RentVehicle> {
    return RentVehicle.query()
      .insert(input)
      .returning(['*'])
  }

  public async findByVehicleId (id: number): Promise<RentVehicle[] | []> {
    return RentVehicle.query()
      .where('VehicleId', id)
  }

  public async deleteRentalVehicle (id: number): Promise<RentVehicle> {
    const [result] = await RentVehicle.query()
      .delete()
      .where('id', id)
      .returning(['*'])

    return result
  }
}

export default RentVehicleRepoImpl
