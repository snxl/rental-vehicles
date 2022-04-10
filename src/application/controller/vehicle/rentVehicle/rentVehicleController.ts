
import RentVehicleImpl from '@src/domain/usecases/rentVehicle/rentVehicleImpl'
import RentVehicleRepoImpl from '@src/infra/repositories/rentVehicleRepoImpl'
import log from '@src/shared/helpers/log'
import { Request, Response } from 'express'
import RentVehicleSchema from './rentVehicleSchema'

class RentVehicleController {
  public async handle (request: Request, response: Response): Promise<Response> {
    log.info({
      name: 'rentVehicle',
      body: request.body
    })

    const vehicleId = request.body.vehicleId
    const userId = request.userId!

    const schema = new RentVehicleSchema({ vehicleId, userId })
    if (!schema.isValid()) {
      return response.status(400).json({ status: 'error', error: schema.getErrors() })
    }

    const rentVehicleImpl = new RentVehicleImpl(
      new RentVehicleRepoImpl()
    )

    const output = await rentVehicleImpl.run({ vehicleId, userId })

    log.info({
      name: 'rentVehicle',
      data: output
    })

    return response.status(200).json({ status: 'success', data: output })
  }
}

export default new RentVehicleController()
