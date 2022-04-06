import VehicleRepo from '@src/domain/repositories/vehicleRepo'
import CreateVehicleImpl from '@src/domain/usecases/createVehicle/createVehicleImpl'
import AppError from '@src/shared/helpers/errors/appErrors'
import { getValidVehicle } from '@test/factories/models/vehicle'
import FakeVehicleRepo from '@test/fakes/repositories/fakeVehicleRepo'

describe('Test class CreateVehicleImpl', () => {
  let vehicleRepo: VehicleRepo
  let createVehicleImpl: CreateVehicleImpl

  const defaultInput = {
    name: 'test',
    brand: 'test brand',
    year: new Date()
  }

  beforeEach(() => {
    vehicleRepo = new FakeVehicleRepo()

    createVehicleImpl = new CreateVehicleImpl(
      vehicleRepo
    )
  })

  it('It should register a vehicle', async () => {
    const input = { ...defaultInput }
    const vehicleEntity = getValidVehicle()

    vehicleRepo.create = jest.fn(async () => vehicleEntity)

    const output = await createVehicleImpl.run(input)

    expect(output.id).toBe(1)
    expect(output.name).toBe('test')
    expect(output.brand).toBe('test brand')
    expect(output.year).toBe(vehicleEntity.year)
  })

  it('It should return error in the manufacturing date', async () => {
    const input = { ...defaultInput }
    input.year.setDate(input.year.getDate() + 1)

    expect.assertions(3)

    try {
      await createVehicleImpl.run(input)
    } catch (error) {
      expect(error).toBeInstanceOf(AppError)
      expect(error).toHaveProperty('message', 'Vehicle has a date greater than the current one')
      expect(error).toHaveProperty('statusCode', 400)
    }
  })
})
