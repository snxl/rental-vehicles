import UserLoginImpl from '@src/domain/usecases/userLogin/userLoginImpl'
import HashClientImpl from '@src/infra/clients/hashClientImpl'
import JsonWebTokenClientImpl from '@src/infra/clients/jsonWebTokenClientImpl'
import UserRepoImpl from '@src/infra/repositories/userRepoImpl'
import log from '@src/shared/helpers/log'
import { Request, Response } from 'express'
import UserLoginSchema from './userLoginSchema'

class UserLoginController {
  public async handle (request: Request, response: Response): Promise<Response> {
    log.info({
      name: 'userLogin',
      body: request.body
    })

    const schema = new UserLoginSchema(request.body)
    if (!schema.isValid()) {
      return response.status(400).json({ status: 'error', error: schema.getErrors() })
    }

    const createUserImpl = new UserLoginImpl(
      new UserRepoImpl(),
      new HashClientImpl(),
      new JsonWebTokenClientImpl()
    )

    const output = await createUserImpl.run(request.body)

    log.info({
      name: 'userLogin',
      data: output
    })

    return response.status(200).json({ status: 'success', data: output })
  }
}

export default new UserLoginController()
