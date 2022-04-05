import winstonLogger from './winston'
import keys from '@src/shared/config/keys'

const env = keys.environment

let logger

switch (env) {
  case 'production':
    logger = winstonLogger
    break
  case 'development':
    logger = winstonLogger
    break
  default:
    logger = winstonLogger
    break
}

export default { ...logger }
