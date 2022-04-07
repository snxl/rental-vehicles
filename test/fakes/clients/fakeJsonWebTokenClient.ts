import JsonWebTokenClient from '@src/domain/clients/jsonWebTokenClient'
import User from '@src/domain/models/user'

class FakeJsonWebTokenClient implements JsonWebTokenClient {
  public async sign (input: object): Promise<string> {
    return 'mockedTest'
  }

  public async verify (token: string, secret: string): Promise<User> {
    return new User()
  }
}

export default FakeJsonWebTokenClient
