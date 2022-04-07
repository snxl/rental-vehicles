import bcrypt from 'bcryptjs'
import HashClient from '@src/domain/clients/hashClient'

class HashClientImpl implements HashClient {
  public async encrypt (password: string): Promise<string> {
    return bcrypt.hash(password, 10)
  }

  public async verify (password: string, encrypt: string): Promise<boolean> {
    return bcrypt.compare(password, encrypt)
  }
}

export default HashClientImpl
