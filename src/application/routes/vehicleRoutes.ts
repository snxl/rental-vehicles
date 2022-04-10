import { Application } from 'express'
import CreateVehicleController from '../controller/vehicle/createVehicle/createVehicleController'
import ListVehicleController from '../controller/vehicle/listVehicle/listVehicleController'
import RentVehicleController from '../controller/vehicle/rentVehicle/rentVehicleController'
import VehicleReleaseController from '../controller/vehicle/vehicleRelease/vehicleReleaseController'

function vehicleRoutes (app: Application): void {
  app.post('/rental-vehicles/v1/vehicle', CreateVehicleController.handle)
  app.get('/rental-vehicles/v1/vehicle/list', ListVehicleController.handle)
  app.post('/rental-vehicles/v1/vehicle/rent', RentVehicleController.handle)
  app.delete('/rental-vehicles/v1/vehicle/release', VehicleReleaseController.handle)
}

export default vehicleRoutes
