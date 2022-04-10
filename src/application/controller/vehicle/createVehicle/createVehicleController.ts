
import CreateVehicleImpl from '@src/domain/usecases/createVehicle/createVehicleImpl'
import VehicleRepoImpl from '@src/infra/repositories/vehicleRepoImpl'
import log from '@src/shared/helpers/log'

import { Request, Response } from 'express'
import CreateVehicleSchema from './createVehicleSchema'

class CreateVehicleController {
  public async handle (request: Request, response: Response): Promise<Response> {
    log.info({
      name: 'createVehicle',
      body: request.body
    })

    const schema = new CreateVehicleSchema(request.body)
    if (!schema.isValid()) {
      return response.status(400).json({ status: 'error', error: schema.getErrors() })
    }

    const createUserImpl = new CreateVehicleImpl(
      new VehicleRepoImpl()
    )

    const output = await createUserImpl.run(request.body)

    log.info({
      name: 'userLogin',
      data: output
    })

    return response.status(201).json({ status: 'success', data: output })
  }
}

export default new CreateVehicleController()
