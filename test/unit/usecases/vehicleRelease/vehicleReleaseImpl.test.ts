import RentVehicleRepo from '@src/domain/repositories/rentVehicleRepo'
import VehicleReleaseImpl from '@src/domain/usecases/vehicleRelease/vehicleReleaseImpl'
import AppError from '@src/shared/helpers/errors/appErrors'
import { getValidRentVehicle } from '@test/factories/models/rentVehicle'
import FakeRentVehicleRepo from '@test/fakes/repositories/fakeRentVehicleRepo'

describe('Test class VehicleReleaseImpl', () => {
  let vehicleReleaseImpl: VehicleReleaseImpl
  let rentVehicleRepo: RentVehicleRepo

  beforeEach(() => {
    rentVehicleRepo = new FakeRentVehicleRepo()

    vehicleReleaseImpl = new VehicleReleaseImpl(
      rentVehicleRepo
    )
  })

  it('It should release a vehicle in use', async () => {
    const rentVehicle = getValidRentVehicle()

    const spy = jest.spyOn(rentVehicleRepo, 'deleteRentalVehicle')
    spy.mockResolvedValueOnce(rentVehicle)

    const output = await vehicleReleaseImpl.run({ userId: 1 })

    expect(output.id).toBe(1)
    expect(output.userId).toBe(1)
    expect(output.vehicleId).toBe(1)
    expect(spy).toBeCalledWith(1)
  })

  it('It should return without vehicle to release', async () => {
    expect.assertions(3)

    try {
      rentVehicleRepo.findByUserId = jest.fn(async () => [])

      await vehicleReleaseImpl.run({ userId: 1 })
    } catch (error) {
      expect(error).toBeInstanceOf(AppError)
      expect(error).toHaveProperty('message', 'No rental vehicle found')
      expect(error).toHaveProperty('statusCode', 404)
    }
  })
})
