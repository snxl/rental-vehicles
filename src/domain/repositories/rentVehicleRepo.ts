import RentVehicle from '../models/rentVehicle'

interface RentVehicleRepo {
  findByUserId: (id: number) => Promise<RentVehicle[] | []>
  create: (input: RentVehicle) => Promise<RentVehicle>
  findByVehicleId: (id: number) => Promise<RentVehicle[] | []>
  deleteRentalVehicle: (id: number) => Promise<RentVehicle>
}

export default RentVehicleRepo
