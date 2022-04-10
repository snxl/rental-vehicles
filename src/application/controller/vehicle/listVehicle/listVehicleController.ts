
import ListVehiclesImpl from '@src/domain/usecases/listVehicles/listVehiclesImpl'
import VehicleRepoImpl from '@src/infra/repositories/vehicleRepoImpl'
import { Request, Response } from 'express'
import ListVehicleSchema from './listVehicleSchema'

class ListVehicleController {
  public async handle (request: Request, response: Response): Promise<Response> {
    const limitQuery = request.query.limit ?? 0
    const pageQuery = request.query.page ?? 0

    const limit = Number(limitQuery)
    const offset = Number(pageQuery)

    const schema = new ListVehicleSchema({ limit, offset })
    if (!schema.isValid()) {
      return response.status(400).json({ status: 'error', error: schema.getErrors() })
    }

    const listVehiclesImpl = new ListVehiclesImpl(
      new VehicleRepoImpl()
    )

    const output = await listVehiclesImpl.run({ limit, offset })

    return response.status(201).json({ status: 'success', data: output })
  }
}

export default new ListVehicleController()
