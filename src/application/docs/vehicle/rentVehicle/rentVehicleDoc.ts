import input from './input'
import example from './example'
import { output200, output400 } from './output'

const infos = {
  tags: ['vehicle'],
  summary: 'Rent vehicle',
  description: 'Rent vehicle from database'
}

const requestBody = {
  content: {
    'application/json': {
      schema: input,
      example
    }
  }
}

const res200 = {
  description: 'Success',
  content: {
    'application/json': {
      schema: output200
    }
  }
}

const res400 = {
  description: 'Error',
  content: {
    'application/json': {
      schema: output400
    }
  }
}

const security = [
  { bearerAuth: [] }
]

export default {
  post: {
    ...infos,
    requestBody,
    responses: {
      200: res200,
      400: res400
    },
    security
  }
}
