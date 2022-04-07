import input from './input'
import example from './example'
import { output201, output400, output404 } from './output'

const infos = {
  tags: ['user'],
  summary: 'User login',
  description: 'Login and return user token'
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
      schema: output201
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

const res404 = {
  description: 'Error',
  content: {
    'application/json': {
      schema: output404
    }
  }
}

export default {
  post: {
    ...infos,
    requestBody,
    responses: {
      200: res200,
      400: res400,
      404: res404
    }
  }
}
