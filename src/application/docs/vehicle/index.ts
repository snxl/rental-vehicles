import createVehicleDoc from './createVehicle/createVehicleDoc'
import listVehicleDoc from './listVehicle/listVehicleDoc'
import rentVehicleDoc from './rentVehicle/rentVehicleDoc'

export default {
  '/rental-vehicles/v1/vehicle': createVehicleDoc,
  '/rental-vehicles/v1/vehicle/list': listVehicleDoc,
  '/rental-vehicles/v1/vehicle/rent': rentVehicleDoc
}
