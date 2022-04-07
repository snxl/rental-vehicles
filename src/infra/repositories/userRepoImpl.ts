import User from '@src/domain/models/user'
import UserRepo from '@src/domain/repositories/userRepo'

class UserRepoImpl implements UserRepo {
  public async createUser (input: User): Promise<User> {
    return User.query()
      .insert(input)
      .returning(['*'])
  }

  public async findByEmail (email: string): Promise<User | undefined> {
    return User.query()
      .select(['*'])
      .where('email', email)
      .first()
  }
}

export default UserRepoImpl
