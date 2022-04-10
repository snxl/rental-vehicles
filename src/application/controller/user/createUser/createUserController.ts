import CreateUserImpl from '@src/domain/usecases/createUser/createUserImpl'
import HashClientImpl from '@src/infra/clients/hashClientImpl'
import JsonWebTokenClientImpl from '@src/infra/clients/jsonWebTokenClientImpl'
import UserRepoImpl from '@src/infra/repositories/userRepoImpl'
import log from '@src/shared/helpers/log'
import { Request, Response } from 'express'
import CreateUserSchema from './createUserSchema'

class CreateUserController {
  public async handle (request: Request, response: Response): Promise<Response> {
    log.info({
      name: 'createUser',
      body: request.body
    })

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

    log.info({
      name: 'createUser',
      data: output
    })

    return response.status(201).json({ status: 'success', data: output })
  }
}

export default new CreateUserController()
