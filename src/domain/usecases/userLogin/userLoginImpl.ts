import HashClient from '@src/domain/clients/hashClient'
import JsonWebTokenClient from '@src/domain/clients/jsonWebTokenClient'
import UserRepo from '@src/domain/repositories/userRepo'
import AppError from '@src/shared/helpers/errors/appErrors'
import { Input, Output } from './userLoginDTO'

class UserLoginImpl {
  constructor (
    private userRepo: UserRepo,
    private hashClient: HashClient,
    private jsonWebTokenClient: JsonWebTokenClient
  ) {}

  public async run (input: Input): Promise<Output> {
    const findUser = await this.userRepo.findByEmail(input.email)

    if (!findUser) {
      throw new AppError('User does not exists', 404)
    }

    const passwordIsValid = await this.hashClient.verify(input.password, findUser.password)

    if (!passwordIsValid) {
      throw new AppError('Password does not valid', 400)
    }

    const token = await this.jsonWebTokenClient.sign({ userId: findUser.id, email: input.email })

    return {
      token
    }
  }
}

export default UserLoginImpl
