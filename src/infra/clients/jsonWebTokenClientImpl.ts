import JsonWebTokenClient from '@src/domain/clients/jsonWebTokenClient'
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
}

export default JsonWebTokenClientImpl
