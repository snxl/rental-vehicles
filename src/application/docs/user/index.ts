import createUserDoc from './createUser/createUserDoc'
import userLoginDoc from './userLogin/userLoginDoc'

export default {
  '/rental-vehicles/v1/user': createUserDoc,
  '/rental-vehicles/v1/user/login': userLoginDoc
}
