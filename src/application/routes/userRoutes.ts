import { Application } from 'express'
import CreateUserController from '../controller/user/createUser/createUserController'
import userLoginController from '../controller/user/userLogin/userLoginController'

function userRoutes (app: Application): void {
  app.post('/rental-vehicles/v1/user', CreateUserController.handle)
  app.post('/rental-vehicles/v1/user/login', userLoginController.handle)
}

export default userRoutes
