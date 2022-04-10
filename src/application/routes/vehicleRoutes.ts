import { Application } from 'express'
import CreateVehicleController from '../controller/vehicle/createVehicle/createVehicleController'
import ListVehicleController from '../controller/vehicle/listVehicle/listVehicleController'
import RentVehicleController from '../controller/vehicle/rentVehicle/rentVehicleController'

function vehicleRoutes (app: Application): void {
  app.post('/rental-vehicles/v1/vehicle', CreateVehicleController.handle)
  app.get('/rental-vehicles/v1/vehicle/list', ListVehicleController.handle)
  app.post('/rental-vehicles/v1/vehicle/rent', RentVehicleController.handle)
}

export default vehicleRoutes
