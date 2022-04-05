import { Request, Response } from 'express'
import responseTime from 'response-time'
import log from '@src/shared/helpers/log'

export default responseTime((request: Request, response: Response, time: number) => {
  log.info(`[response_time]: ${time}ms`, 'responseTime')
})
