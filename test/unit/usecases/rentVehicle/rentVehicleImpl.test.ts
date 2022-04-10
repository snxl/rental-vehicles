import RentVehicleRepo from '@src/domain/repositories/rentVehicleRepo'
import RentVehicleImpl from '@src/domain/usecases/rentVehicle/rentVehicleImpl'
import AppError from '@src/shared/helpers/errors/appErrors'
import { createRentVehicle, getValidRentVehicle } from '@test/factories/models/rentVehicle'
import FakeRentVehicleRepo from '@test/fakes/repositories/fakeRentVehicleRepo'

describe('Test class RentVehicleImpl', () => {
  let rentVehicleImpl: RentVehicleImpl
  let rentVehicleRepo: RentVehicleRepo

  const defaultInput = {
    userId: 1,
    vehicleId: 1
  }

  beforeEach(() => {
    rentVehicleRepo = new FakeRentVehicleRepo()

    rentVehicleImpl = new RentVehicleImpl(
      rentVehicleRepo
    )
  })

  it('It should rent a vehicle', async () => {
    const input = { ...defaultInput }
    const rentVehicle = getValidRentVehicle()

    rentVehicleRepo.findByUserId = jest.fn(async () => [])
    rentVehicleRepo.findByVehicleId = jest.fn(async () => [])

    const spy = jest.spyOn(rentVehicleRepo, 'create')
    spy.mockResolvedValueOnce(rentVehicle)

    const rentVehicleEntity = createRentVehicle()
    rentVehicleEntity.UserId = input.userId
    rentVehicleEntity.VehicleId = input.vehicleId

    const output = await rentVehicleImpl.run(input)

    expect(output.id).toBe(1)
    expect(output.userId).toBe(1)
    expect(output.vehicleId).toBe(1)
    expect(spy).toBeCalledWith(rentVehicleEntity)
  })

  it('It should return vehicle in use', async () => {
    const input = { ...defaultInput }

    expect.assertions(3)

    try {
      rentVehicleRepo.findByUserId = jest.fn(async () => [])

      await rentVehicleImpl.run(input)
    } catch (error) {
      expect(error).toBeInstanceOf(AppError)
      expect(error).toHaveProperty('message', 'Vehicle is currently in use')
      expect(error).toHaveProperty('statusCode', 400)
    }
  })

  it('It should return already have a rented vehicle', async () => {
    const input = { ...defaultInput }

    expect.assertions(3)

    try {
      await rentVehicleImpl.run(input)
    } catch (error) {
      expect(error).toBeInstanceOf(AppError)
      expect(error).toHaveProperty('message', 'User already has a rented vehicle')
      expect(error).toHaveProperty('statusCode', 400)
    }
  })
})
