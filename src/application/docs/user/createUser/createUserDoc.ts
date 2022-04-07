import input from './input'
import example from './example'
import { output201, output400 } from './output'

const infos = {
  tags: ['user'],
  summary: 'Create user',
  description: 'Create and return user token'
}

// const security = [
//   { bearerAuth: [] }
// ]

const requestBody = {
  content: {
    'application/json': {
      schema: input,
      example
    }
  }
}

const res201 = {
  description: 'Sucesso',
  content: {
    'application/json': {
      schema: output201
    }
  }
}

const res400 = {
  description: 'Sucesso',
  content: {
    'application/json': {
      schema: output400
    }
  }
}

export default {
  post: {
    ...infos,
    requestBody,
    responses: {
      201: res201,
      400: res400
    }
  }
}
