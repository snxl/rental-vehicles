import createVehicleDoc from './createVehicle/createVehicleDoc'
import listVehicleDoc from './listVehicle/listVehicleDoc'
import rentVehicleDoc from './rentVehicle/rentVehicleDoc'
import vehicleReleaseDoc from './vehicleRelease/vehicleReleaseDoc'

export default {
  '/rental-vehicles/v1/vehicle': createVehicleDoc,
  '/rental-vehicles/v1/vehicle/list': listVehicleDoc,
  '/rental-vehicles/v1/vehicle/rent': rentVehicleDoc,
  '/rental-vehicles/v1/vehicle/release': vehicleReleaseDoc
}
