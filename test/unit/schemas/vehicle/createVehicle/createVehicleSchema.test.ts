import CreateVehicleSchema from '@src/application/controller/vehicle/createVehicle/createVehicleSchema'

describe('Test class CreateVehicleSchema', () => {
  let validSchema: any

  beforeEach(() => {
    validSchema = {
      name: 'test',
      brand: 'branding test',
      year: '2020-01-01'
    }
  })

  it('It should return any errors', () => {
    const schema = new CreateVehicleSchema({ ...validSchema })

    expect(schema.isValid()).toBe(true)
    expect(schema.getErrors()).toEqual([])
  })

  it('It should return name invalid', () => {
    delete validSchema.name
    const schema = new CreateVehicleSchema({ ...validSchema })

    expect(schema.isValid()).toBe(false)
    expect(schema.getErrors()).toEqual(['name field is empty'])
  })

  it('It should return brand invalid', () => {
    delete validSchema.brand
    const schema = new CreateVehicleSchema({ ...validSchema })

    expect(schema.isValid()).toBe(false)
    expect(schema.getErrors()).toEqual(['brand field is empty'])
  })

  it('It should return year invalid', () => {
    delete validSchema.year
    const schema = new CreateVehicleSchema({ ...validSchema })

    expect(schema.isValid()).toBe(false)
    expect(schema.getErrors()).toEqual(['year field is empty'])
  })
})
