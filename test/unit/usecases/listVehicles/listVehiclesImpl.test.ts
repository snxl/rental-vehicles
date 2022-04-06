import VehicleRepo from '@src/domain/repositories/vehicleRepo'
import ListVehiclesImpl from '@src/domain/usecases/listVehicles/listVehiclesImpl'
import AppError from '@src/shared/helpers/errors/appErrors'
import { getArrayVehicle } from '@test/factories/models/vehicle'
import FakeVehicleRepo from '@test/fakes/repositories/fakeVehicleRepo'

describe('Test class ListVehiclesImpl', () => {
  let listVehiclesImpl: ListVehiclesImpl
  let vehicleRepo: VehicleRepo

  const defaultInput = {
    limit: 1,
    offset: 1
  }

  beforeEach(() => {
    vehicleRepo = new FakeVehicleRepo()

    listVehiclesImpl = new ListVehiclesImpl(
      vehicleRepo
    )
  })

  it('It should list all vehicles', async () => {
    const input = { ...defaultInput }
    const arrayOfVehicle = getArrayVehicle()

    const spy = jest.spyOn(vehicleRepo, 'listAll')
    spy.mockResolvedValueOnce(arrayOfVehicle)

    const output = await listVehiclesImpl.run(input)

    expect(output.vehicles).toEqual(arrayOfVehicle)
    expect(spy).toBeCalledWith(1, 1)
  })

  it('It should return the vehicles with the default input', async () => {
    const input = { ...defaultInput }
    input.limit = 0
    input.offset = 0

    const arrayOfVehicle = getArrayVehicle()

    const spy = jest.spyOn(vehicleRepo, 'listAll')
    spy.mockResolvedValueOnce(arrayOfVehicle)

    const output = await listVehiclesImpl.run(input)

    expect(output.vehicles).toEqual(arrayOfVehicle)
    expect(spy).toBeCalledWith(50, 0)
  })

  it('should return no vehicle found', async () => {
    const input = { ...defaultInput }

    expect.assertions(3)

    try {
      vehicleRepo.listAll = jest.fn(async () => undefined)

      await listVehiclesImpl.run(input)
    } catch (error) {
      expect(error).toBeInstanceOf(AppError)
      expect(error).toHaveProperty('message', 'No vehicle found')
      expect(error).toHaveProperty('statusCode', 404)
    }
  })
})
