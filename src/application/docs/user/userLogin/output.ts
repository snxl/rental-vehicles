export const output201 = {
  type: 'object',
  properties: {
    status: { type: 'string', default: 'success' },
    data: {
      type: 'object',
      properties: {
        token: { type: 'string', default: 'uiahtc.uasb$#oij' }
      }
    }
  }
}

export const output400 = {
  type: 'object',
  properties: {
    status: { type: 'string', default: 'error' },
    message: { type: 'string', default: 'Password does not valid' }
  }
}

export const output404 = {
  type: 'object',
  properties: {
    status: { type: 'string', default: 'error' },
    message: { type: 'string', default: 'User does not exists' }
  }
}
