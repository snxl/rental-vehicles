import RentVehicleSchema from '@src/application/controller/vehicle/rentVehicle/rentVehicleSchema'

describe('Test class RentVehicleSchema', () => {
  let validSchema: any

  beforeEach(() => {
    validSchema = {
      vehicleId: 1,
      userId: 1
    }
  })

  it('It should return any errors', () => {
    const schema = new RentVehicleSchema({ ...validSchema })

    expect(schema.isValid()).toBe(true)
    expect(schema.getErrors()).toEqual([])
  })

  it('It should return vehicleId invalid', () => {
    delete validSchema.vehicleId
    const schema = new RentVehicleSchema({ ...validSchema })

    expect(schema.isValid()).toBe(false)
    expect(schema.getErrors()).toEqual(['vehicleId field is empty'])
  })

  it('It should return userId invalid', () => {
    delete validSchema.userId
    const schema = new RentVehicleSchema({ ...validSchema })

    expect(schema.isValid()).toBe(false)
    expect(schema.getErrors()).toEqual(['userId field is empty'])
  })
})
