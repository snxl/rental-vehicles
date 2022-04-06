import CreateUserImpl from '@src/domain/usecases/createUser/createUserImpl'
import AppError from '@src/shared/helpers/errors/appErrors'
import FakeHashClient from '@test/fakes/clients/fakeHashClient'
import FakeJsonWebTokenClient from '@test/fakes/clients/fakeJsonWebTokenClient'
import FakeUserRepo from '@test/fakes/repositories/fakeUserRepo'
import crypto from 'crypto'

describe('Test class CreateUserImpl', () => {
  let createUserImpl: CreateUserImpl
  let fakeUserRepo: FakeUserRepo
  let fakeHashClient: FakeHashClient
  let fakeJsonWebTokenClient: FakeJsonWebTokenClient

  const randString = crypto.randomBytes(8).toString('hex')
  const inputDefault = {
    email: `${randString}@test.com`,
    password: '12345678',
    name: 'test'
  }

  beforeEach(() => {
    fakeUserRepo = new FakeUserRepo()
    fakeHashClient = new FakeHashClient()
    fakeJsonWebTokenClient = new FakeJsonWebTokenClient()

    createUserImpl = new CreateUserImpl(
      fakeUserRepo,
      fakeHashClient,
      fakeJsonWebTokenClient
    )
  })

  it('It should create an user', async () => {
    const input = { ...inputDefault }

    fakeUserRepo.findByEmail = jest.fn(async () => undefined)

    const output = await createUserImpl.run(input)

    expect(output.token).toBe('mockedTest')
  })

  it('It should return error email exists', async () => {
    const input = { ...inputDefault }

    expect.assertions(3)

    try {
      await createUserImpl.run(input)
    } catch (error) {
      expect(error).toBeInstanceOf(AppError)
      expect(error).toHaveProperty('message', 'email in use')
      expect(error).toHaveProperty('statusCode', 400)
    }
  })

  it('It should return password length error', async () => {
    const input = { ...inputDefault }
    input.password = '1234567'

    expect.assertions(3)

    try {
      await createUserImpl.run(input)
    } catch (error) {
      expect(error).toBeInstanceOf(AppError)
      expect(error).toHaveProperty('message', 'password must be eight characters long')
      expect(error).toHaveProperty('statusCode', 400)
    }
  })

  it('It should return an existing email error', async () => {
    const input = { ...inputDefault }
    input.email = 'test'

    expect.assertions(3)

    try {
      await createUserImpl.run(input)
    } catch (error) {
      expect(error).toBeInstanceOf(AppError)
      expect(error).toHaveProperty('message', 'email invalid')
      expect(error).toHaveProperty('statusCode', 400)
    }
  })
})
