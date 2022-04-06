import HashClient from '@src/domain/clients/hashClient'
import JsonWebTokenClient from '@src/domain/clients/jsonWebTokenClient'
import UserRepo from '@src/domain/repositories/userRepo'
import UserLoginImpl from '@src/domain/usecases/userLogin/userLoginImpl'
import AppError from '@src/shared/helpers/errors/appErrors'
import FakeHashClient from '@test/fakes/clients/fakeHashClient'
import FakeJsonWebTokenClient from '@test/fakes/clients/fakeJsonWebTokenClient'
import FakeUserRepo from '@test/fakes/repositories/fakeUserRepo'
import crypto from 'crypto'

describe('Test class UserLoginImpl', () => {
  let userLoginImpl: UserLoginImpl
  let fakeUserRepo: UserRepo
  let fakeHashClient: HashClient
  let fakeJsonWebTokenClient: JsonWebTokenClient

  const randString = crypto.randomBytes(8).toString('hex')
  const inputDefault = {
    email: `${randString}@test.com`,
    password: '12345678'
  }

  beforeEach(() => {
    fakeUserRepo = new FakeUserRepo()
    fakeHashClient = new FakeHashClient()
    fakeJsonWebTokenClient = new FakeJsonWebTokenClient()

    userLoginImpl = new UserLoginImpl(
      fakeUserRepo,
      fakeHashClient,
      fakeJsonWebTokenClient
    )
  })

  it('It should return a jwt', async () => {
    const input = { ...inputDefault }

    const output = await userLoginImpl.run(input)

    expect(output.token).toBe('mockedTest')
  })

  it('It should return incorrect password', async () => {
    const input = { ...inputDefault }

    expect.assertions(3)

    try {
      fakeHashClient.verify = jest.fn(async () => false)

      await userLoginImpl.run(input)
    } catch (error) {
      expect(error).toBeInstanceOf(AppError)
      expect(error).toHaveProperty('message', 'Password does not valid')
      expect(error).toHaveProperty('statusCode', 400)
    }
  })

  it('It should return email not exists', async () => {
    const input = { ...inputDefault }

    expect.assertions(3)

    try {
      fakeUserRepo.findByEmail = jest.fn(async () => undefined)

      await userLoginImpl.run(input)
    } catch (error) {
      expect(error).toBeInstanceOf(AppError)
      expect(error).toHaveProperty('message', 'User does not exists')
      expect(error).toHaveProperty('statusCode', 404)
    }
  })
})
