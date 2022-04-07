import { Request, Response, NextFunction } from 'express'
import JsonWebTokenClientImpl from '@src/infra/clients/jsonWebTokenClientImpl'
import keys from '@src/shared/config/keys'

async function requireAdmin (request: Request, response: Response, next: NextFunction): Promise<Response|void> {
  const errorResponse = { error: true, msg: 'Not autorized' }

  const { authorization } = request.headers
  if (!authorization) return response.status(401).json(errorResponse)

  const token = authorization.split(' ')[1]

  try {
    const verifyToken = await new JsonWebTokenClientImpl().verify(token, keys.SECRET_TOKEN!)

    request.userId = verifyToken.id

    next()
  } catch (error) {
    return response.status(401).json(errorResponse)
  }

  return response.status(401).json(errorResponse)
}

export default requireAdmin
