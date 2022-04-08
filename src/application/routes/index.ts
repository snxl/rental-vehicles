import { Application } from 'express'
import requireToken from '../middlewares/requireToken'
import userRoutes from './userRoutes'
import vehicleRoutes from './vehicleRoutes'

class Routes {
  load (app: Application): void {
    userRoutes(app)
    app.use(requireToken)
    vehicleRoutes(app)
  }
}

export default Routes
