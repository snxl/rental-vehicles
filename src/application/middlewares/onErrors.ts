import { NextFunction, Request, Response } from 'express'
import AppError from '@src/shared/helpers/errors/appErrors'
import log from '@src/shared/helpers/log'

async function onErrors (err: Error, request: Request, response: Response, next: NextFunction): Promise<Response> {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message
    })
  }

  log.error(err)

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error.'
  })
}

export default onErrors
