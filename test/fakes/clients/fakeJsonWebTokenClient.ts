import JsonWebTokenClient, { token } from '@src/domain/clients/jsonWebTokenClient'

class FakeJsonWebTokenClient implements JsonWebTokenClient {
  public async sign (input: object): Promise<string> {
    return 'mockedTest'
  }

  public async verify (token: string, secret: string): Promise<token> {
    return {
      email: 'test@test.com',
      userId: 1,
      exp: 1,
      iat: 1
    }
  }
}

export default FakeJsonWebTokenClient
