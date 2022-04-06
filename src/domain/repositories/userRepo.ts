import User from '../models/user'

interface UserRepo {
  createUser: (input: User) => Promise<User>
  findByEmail: (email: string) => Promise<User | undefined>
}

export default UserRepo
