import Vehicle from '../models/vehicle'

interface VehicleRepo {
  create: (input: Vehicle) => Promise<Vehicle>
}

export default VehicleRepo
