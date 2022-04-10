import createVehicleDoc from './createVehicle/createVehicleDoc'
import listVehicleDoc from './listVehicle/listVehicleDoc'

export default {
  '/rental-vehicles/v1/vehicle': createVehicleDoc,
  '/rental-vehicles/v1/vehicle/list': listVehicleDoc
}
