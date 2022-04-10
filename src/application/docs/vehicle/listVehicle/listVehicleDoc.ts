import input from './input'
import { output200, output404 } from './output'

const infos = {
  tags: ['vehicle'],
  summary: 'List all vehicles',
  description: 'Register a vehicle inthe database'
}

const res200 = {
  description: 'Success',
  content: {
    'application/json': {
      schema: output200
    }
  }
}

const res404 = {
  description: 'Error',
  content: {
    'application/json': {
      schema: output404
    }
  }
}

const security = [
  { bearerAuth: [] }
]

export default {
  get: {
    ...infos,
    ...input,
    responses: {
      200: res200,
      404: res404
    },
    security
  }
}
