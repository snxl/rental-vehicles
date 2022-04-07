import CreateUserImpl from '@src/domain/usecases/createUser/createUserImpl'
import HashClientImpl from '@src/infra/clients/hashClientImpl'
import JsonWebTokenClientImpl from '@src/infra/clients/jsonWebTokenClientImpl'
import UserRepoImpl from '@src/infra/repositories/userRepoImpl'
import { Request, Response } from 'express'
import CreateUserSchema from './createUserSchema'

class CreateUserController {
  public async handle (request: Request, response: Response): Promise<Response> {
    const schema = new CreateUserSchema(request.body)
    if (!schema.isValid()) {
      return response.status(400).json({ status: 'error', error: schema.getErrors() })
    }

    const createUserImpl = new CreateUserImpl(
      new UserRepoImpl(),
      new HashClientImpl(),
      new JsonWebTokenClientImpl()
    )

    const output = await createUserImpl.run(request.body)

    return response.status(201).json({ status: 'success', data: output })
  }
}

export default new CreateUserController()
