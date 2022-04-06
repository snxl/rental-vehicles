import HashClient from '@src/domain/clients/hashClient'
import JsonWebTokenClient from '@src/domain/clients/jsonWebTokenClient'
import User from '@src/domain/models/user'
import UserRepo from '@src/domain/repositories/userRepo'
import regex from '@src/shared/config/regex'
import AppError from '@src/shared/helpers/errors/appErrors'
import { Input, Output } from './createUserDTO'

class CreateUserImpl {
  constructor (
    private userRepo: UserRepo,
    private hashClient: HashClient,
    private jsonWebTokenClient: JsonWebTokenClient
  ) {}

  public async run (input: Input): Promise<Output> {
    if (!regex.email.test(input.email)) {
      throw new AppError('email invalid', 400)
    }

    if (input.password.length < 8) {
      throw new AppError('password must be eight characters long', 400)
    }

    const checkEmailExists = await this.userRepo.findByEmail(input.email)

    if (checkEmailExists) {
      throw new AppError('email in use', 400)
    }

    const hashPassword = await this.hashClient.encrypt(input.password)

    const user = new User()
    user.email = input.email
    user.password = hashPassword
    user.name = input.name

    const createUser = await this.userRepo.createUser(user)

    const token = await this.jsonWebTokenClient.sign({ userId: createUser.id, email: createUser.email })

    return {
      token
    }
  }
}

export default CreateUserImpl
