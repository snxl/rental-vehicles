import CreateUserSchema from '@src/application/controller/user/createUser/createUserSchema'

describe('Test class CreateUserSchema', () => {
  let validSchema: any

  beforeEach(() => {
    validSchema = {
      name: 'test',
      email: 'test@test.com',
      password: '12345678'
    }
  })

  it('It should return any errors', () => {
    const schema = new CreateUserSchema({ ...validSchema })

    expect(schema.isValid()).toBe(true)
    expect(schema.getErrors()).toEqual([])
  })

  it('It should return email invalid', () => {
    delete validSchema.email
    const schema = new CreateUserSchema({ ...validSchema })

    expect(schema.isValid()).toBe(false)
    expect(schema.getErrors()).toEqual(['email field is empty'])
  })

  it('It should return name invalid', () => {
    delete validSchema.name
    const schema = new CreateUserSchema({ ...validSchema })

    expect(schema.isValid()).toBe(false)
    expect(schema.getErrors()).toEqual(['name field is empty'])
  })

  it('It should return email invalid', () => {
    delete validSchema.password
    const schema = new CreateUserSchema({ ...validSchema })

    expect(schema.isValid()).toBe(false)
    expect(schema.getErrors()).toEqual(['password field is empty'])
  })
})
