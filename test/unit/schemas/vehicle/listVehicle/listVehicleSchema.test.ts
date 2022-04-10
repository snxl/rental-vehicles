import ListVehicleSchema from '@src/application/controller/vehicle/listVehicle/listVehicleSchema'

describe('Test class ListVehicleSchema', () => {
  let validSchema: any

  beforeEach(() => {
    validSchema = {
      limit: 1,
      offset: 1
    }
  })

  it('It should return any errors', () => {
    const schema = new ListVehicleSchema({ ...validSchema })

    expect(schema.isValid()).toBe(true)
    expect(schema.getErrors()).toEqual([])
  })

  it('It should return limit invalid', () => {
    validSchema.limit = NaN
    const schema = new ListVehicleSchema({ ...validSchema })

    expect(schema.isValid()).toBe(false)
    expect(schema.getErrors()).toEqual(['limit must be a number'])
  })

  it('It should return offset invalid', () => {
    validSchema.offset = NaN
    const schema = new ListVehicleSchema({ ...validSchema })

    expect(schema.isValid()).toBe(false)
    expect(schema.getErrors()).toEqual(['offset must be a number'])
  })
})
