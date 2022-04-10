import { Application } from 'express'
import CreateVehicleController from '../controller/vehicle/createVehicle/createVehicleController'
import ListVehicleController from '../controller/vehicle/listVehicle/listVehicleController'

function vehicleRoutes (app: Application): void {
  app.post('/rental-vehicles/v1/vehicle', CreateVehicleController.handle)
  app.get('/rental-vehicles/v1/vehicle/list', ListVehicleController.handle)
}

export default vehicleRoutes
