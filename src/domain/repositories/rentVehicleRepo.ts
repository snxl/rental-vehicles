import RentVehicle from '../models/rentVehicle'

interface RentVehicleRepo {
  findByUserId: (id: number) => Promise<RentVehicle[] | undefined>
  create: (input: RentVehicle) => Promise<RentVehicle>
  findByVehicleId: (id: number) => Promise<RentVehicle[] | undefined>
}

export default RentVehicleRepo