import User from '../models/user'

interface JsonWebTokenClient {
  sign: (input: object) => Promise<string>
  verify: (token: string, secret: string) => Promise<User>
}

export default JsonWebTokenClient
