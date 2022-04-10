
import VehicleReleaseImpl from '@src/domain/usecases/vehicleRelease/vehicleReleaseImpl'
import RentVehicleRepoImpl from '@src/infra/repositories/rentVehicleRepoImpl'
import { Request, Response } from 'express'
import VehicleReleaseSchema from './vehicleReleaseSchema'

class VehicleReleaseController {
  public async handle (request: Request, response: Response): Promise<Response> {
    const userId = request.userId!

    const schema = new VehicleReleaseSchema({ userId })
    if (!schema.isValid()) {
      return response.status(400).json({ status: 'error', error: schema.getErrors() })
    }

    const vehicleRelease = new VehicleReleaseImpl(
      new RentVehicleRepoImpl()
    )

    const output = await vehicleRelease.run({ userId })

    return response.status(200).json({ status: 'success', data: output })
  }
}

export default new VehicleReleaseController()
