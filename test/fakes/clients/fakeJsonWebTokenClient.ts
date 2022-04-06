import JsonWebTokenClient from '@src/domain/clients/jsonWebTokenClient'

class FakeJsonWebTokenClient implements JsonWebTokenClient {
  public async sign (input: object): Promise<string> {
    return 'mockedTest'
  }
}

export default FakeJsonWebTokenClient
