import JsonWebTokenClient, { token } from '@src/domain/clients/jsonWebTokenClient'
import keys from '@src/shared/config/keys'
import jwt from 'jsonwebtoken'

class JsonWebTokenClientImpl implements JsonWebTokenClient {
  public async sign (input: object): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      jwt.sign(input, keys.SECRET_TOKEN!, {
        expiresIn: '15min'
      }, (err, token) => {
        if (err) {
          reject(err)
        } else {
          resolve(token!)
        }
      })
    })
  }

  public async verify (token: string, secret: string): Promise<token> {
    return new Promise<token>((resolve, reject) => {
      jwt.verify(token, secret, (err, payload) => {
        if (err) {
          reject(err)
        } else {
          resolve(payload as token)
        }
      })
    })
  }
}

export default JsonWebTokenClientImpl
