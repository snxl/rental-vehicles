import Vehicle from '../models/vehicle'

interface VehicleRepo {
  create: (input: Vehicle) => Promise<Vehicle>
  listAll: (limit: number, offset: number) => Promise<Vehicle[] | []>
}

export default VehicleRepo
