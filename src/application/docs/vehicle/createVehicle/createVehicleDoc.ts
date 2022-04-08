import input from './input'
import example from './example'
import { output201, output400 } from './output'

const infos = {
  tags: ['vehicle'],
  summary: 'Create vehicle',
  description: 'Register a vehicle inthe database'
}

const requestBody = {
  content: {
    'application/json': {
      schema: input,
      example
    }
  }
}

const res201 = {
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
