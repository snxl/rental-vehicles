import UserLoginSchema from '@src/application/controller/user/userLogin/userLoginSchema'

describe('Test class UserLoginSchema', () => {
  let validSchema: any

  beforeEach(() => {
    validSchema = {
      email: 'test@test.com',
      password: '12345678'
    }
  })

  it('It should return any errors', () => {
    const schema = new UserLoginSchema({ ...validSchema })

    expect(schema.isValid()).toBe(true)
    expect(schema.getErrors()).toEqual([])
  })

  it('It should return email invalid', () => {
    delete validSchema.email
    const schema = new UserLoginSchema({ ...validSchema })

    expect(schema.isValid()).toBe(false)
    expect(schema.getErrors()).toEqual(['email field is empty'])
  })

  it('It should return email invalid', () => {
    delete validSchema.password
    const schema = new UserLoginSchema({ ...validSchema })

    expect(schema.isValid()).toBe(false)
    expect(schema.getErrors()).toEqual(['password field is empty'])
  })
})
