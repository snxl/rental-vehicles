import User from '@src/domain/models/user'
import UserRepo from '@src/domain/repositories/userRepo'

class FakeUserRepo implements UserRepo {
  public async createUser (input: User): Promise<User> {
    return new User()
  }

  public async findByEmail (email: string): Promise<User | undefined> {
    return new User()
  }
}

export default FakeUserRepo
