import production from './production'
import development from './development'
import Envs from '@src/shared/config/envTypes'

const { NODE_ENV } = process.env

let env: Envs

switch (NODE_ENV) {
  case 'production':
    env = production
    break
  case 'development':
    env = development
    break
  default:
    env = development
    break
}

export default { ...env }
