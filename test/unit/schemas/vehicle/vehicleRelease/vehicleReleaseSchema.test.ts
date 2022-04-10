import VehicleReleaseSchema from '@src/application/controller/vehicle/vehicleRelease/vehicleReleaseSchema'

describe('Test class VehicleReleaseSchema', () => {
  let validSchema: any

  beforeEach(() => {
    validSchema = {
      userId: 1
    }
  })

  it('It should return any errors', () => {
    const schema = new VehicleReleaseSchema({ ...validSchema })

    expect(schema.isValid()).toBe(true)
    expect(schema.getErrors()).toEqual([])
  })

  it('It should return userId invalid', () => {
    delete validSchema.userId
    const schema = new VehicleReleaseSchema({ ...validSchema })

    expect(schema.isValid()).toBe(false)
    expect(schema.getErrors()).toEqual(['userId field is empty'])
  })
})
