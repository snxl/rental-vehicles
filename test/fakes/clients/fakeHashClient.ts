import HashClient from '@src/domain/clients/hashClient'

class FakeHashClient implements HashClient {
  public async encrypt (input: string): Promise<string> {
    return 'fakerTest'
  }
}

export default FakeHashClient
