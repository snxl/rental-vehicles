interface JsonWebTokenClient {
  sign: (input: object) => Promise<string>
  verify: (token: string, secret: string) => Promise<token>
}

export interface token {
  userId: number
  email: string
  iat: number
  exp: number
}

export default JsonWebTokenClient
