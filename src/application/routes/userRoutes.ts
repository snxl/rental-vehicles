import { Application } from 'express'
import CreateUserController from '../controller/user/createUser/createUserController'

function userRoutes (app: Application): void {
  app.post('/rental-vehicles/v1/user', CreateUserController.handle)
}

export default userRoutes
