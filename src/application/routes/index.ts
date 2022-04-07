import { Application } from 'express'
import userRoutes from './userRoutes'

class Routes {
  load (app: Application): void {
    userRoutes(app)
  }
}

export default Routes
