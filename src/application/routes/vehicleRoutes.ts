import { Application } from 'express'
import CreateVehicleController from '../controller/vehicle/createVehicle/createVehicleController'

function vehicleRoutes (app: Application): void {
  app.post('/rental-vehicles/v1/vehicle', CreateVehicleController.handle)
}

export default vehicleRoutes
